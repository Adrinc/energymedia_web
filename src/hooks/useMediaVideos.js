/**
 * useMediaVideos Hook
 * Obtiene videos desde Supabase (tabla media_files)
 * Energy Media - Video Gallery Integration
 */

import { useState, useEffect, useCallback } from 'react';
import { supabase, ORGANIZATION_ID } from '../lib/supabase';

/**
 * Transforma los datos crudos de media_files al formato esperado por el componente
 * @param {Object} mediaFile - Registro de media_files
 * @returns {Object} Video formateado
 */
const transformMediaFile = (mediaFile) => {
  const metadata = mediaFile.metadata_json || {};
  
  return {
    // ID único del video
    id: mediaFile.media_file_id,
    
    // Información básica
    title: mediaFile.title || metadata.original_file_name || mediaFile.file_name || 'Sin título',
    description: mediaFile.file_description || null,
    
    // URL del video para reproducción
    fileUrl: mediaFile.file_url,
    storagePath: mediaFile.storage_path,
    
    // Información del poster/thumbnail
    posterUrl: metadata.poster_url || null,
    posterFileName: metadata.poster_file_name || null,
    
    // Tags (categorías basadas en tags)
    tags: metadata.tags || [],
    category: metadata.tags?.[0] || 'Video', // Primera tag como categoría principal
    
    // Metadata adicional
    duration: metadata.duration_seconds || mediaFile.seconds || null,
    fileSize: metadata.file_size_bytes || mediaFile.file_size_bytes || null,
    reproductions: metadata.reproducciones || 0,
    uploadedAt: metadata.uploaded_at || mediaFile.created_at_timestamp,
    lastViewedAt: metadata.last_viewed_at || null,
    originalFileName: metadata.original_file_name || mediaFile.file_name,
    
    // Tipo de archivo
    mimeType: mediaFile.mime_type,
    fileExtension: mediaFile.file_extension,
    
    // Flag para saber si tiene poster
    hasPoster: !!metadata.poster_url
  };
};

/**
 * Hook para obtener videos desde Supabase
 * @param {Object} options - Opciones de configuración
 * @param {number} options.limit - Límite de videos a obtener (default: 50)
 * @param {string} options.orderBy - Campo para ordenar (default: 'created_at_timestamp')
 * @param {boolean} options.ascending - Orden ascendente (default: false)
 * @returns {Object} { videos, loading, error, refetch }
 */
export const useMediaVideos = (options = {}) => {
  const {
    limit = 50,
    orderBy = 'created_at_timestamp',
    ascending = false
  } = options;

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVideos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('media_files')
        .select('*')
        .eq('organization_fk', ORGANIZATION_ID)
        .eq('file_type', 'video') // Solo videos
        .order(orderBy, { ascending })
        .limit(limit);

      if (fetchError) {
        throw fetchError;
      }

      // Transformar datos al formato esperado
      const transformedVideos = (data || []).map(transformMediaFile);
      setVideos(transformedVideos);

    } catch (err) {
      console.error('Error fetching videos:', err);
      setError(err.message || 'Error al cargar los videos');
    } finally {
      setLoading(false);
    }
  }, [limit, orderBy, ascending]);

  // Cargar videos al montar el componente
  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return {
    videos,
    loading,
    error,
    refetch: fetchVideos
  };
};

/**
 * Incrementa el contador de reproducciones de un video
 * @param {number} mediaFileId - ID del video
 * @returns {Promise<boolean>} Success status
 */
export const incrementVideoReproduction = async (mediaFileId) => {
  try {
    // Primero obtener el metadata actual
    const { data: currentData, error: fetchError } = await supabase
      .from('media_files')
      .select('metadata_json')
      .eq('media_file_id', mediaFileId)
      .single();

    if (fetchError) throw fetchError;

    const currentMetadata = currentData?.metadata_json || {};
    const currentReproductions = currentMetadata.reproducciones || 0;

    // Actualizar con el nuevo conteo
    const updatedMetadata = {
      ...currentMetadata,
      reproducciones: currentReproductions + 1,
      last_viewed_at: new Date().toISOString()
    };

    const { error: updateError } = await supabase
      .from('media_files')
      .update({ 
        metadata_json: updatedMetadata,
        updated_at_timestamp: new Date().toISOString()
      })
      .eq('media_file_id', mediaFileId);

    if (updateError) throw updateError;

    return true;
  } catch (err) {
    console.error('Error incrementing reproduction:', err);
    return false;
  }
};

/**
 * Divide videos en grupos/rows para el carrusel
 * @param {Array} videos - Lista de videos
 * @param {number} rowCount - Número de filas (default: 3)
 * @returns {Array} Array de arrays con videos distribuidos
 */
export const splitVideosIntoRows = (videos, rowCount = 3) => {
  if (!videos || videos.length === 0) {
    return Array(rowCount).fill([]);
  }

  const rows = Array.from({ length: rowCount }, () => []);
  
  videos.forEach((video, index) => {
    const rowIndex = index % rowCount;
    rows[rowIndex].push(video);
  });

  return rows;
};

export default useMediaVideos;
