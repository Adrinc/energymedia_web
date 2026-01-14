/**
 * Supabase Client Configuration
 * Energy Media - Content Management Integration
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cbl-supabase.cbluna-dev.com';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzE1MjM4MDAwLAogICJleHAiOiAxODczMDA0NDAwCn0.qKqYn2vjtHqKqyt1FAghuIjvNsyr9b1ElpVfvJg6zJ4';

// Organization ID para filtrar contenido
export const ORGANIZATION_ID = 17;

// Storage base URLs
export const STORAGE_BASE_URL = `${supabaseUrl}/storage/v1/object/public/energymedia`;
export const VIDEOS_BUCKET_PATH = 'videos';
export const IMAGES_BUCKET_PATH = 'imagenes';

// Crear cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'media_library'
  },
  auth: {
    persistSession: false
  }
});

export default supabase;
