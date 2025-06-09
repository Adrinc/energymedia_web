
import React, { useEffect, useRef, useState, forwardRef } from 'react';


import '../../../js/speedtest/globals.js';
import '../../../js/speedtest/app.js';  
import '../../../js/speedtest/openSpeedtestGet.js';
import '../../../js/speedtest/openSpeedtestShow.js';
import '../../../js/speedtest/tabla.js';






    const SpeedTestText = forwardRef((props, SpeedTestTextRef) => {
    const [textoboton, changeTextBoton] = useState("Iniciar");
    const downloadRef = useRef();
    const uploadRef = useRef();
   
    console.log(window.ulDuration); // Ahora sí estará definido
console.log(window.dlDuration);
/* 
    if (downloadRef.current) {
      downloadRef.current.text = resultdownload.toFixed(1)>999.99 ? (resultdownload.toFixed(1)/1000).toFixed(2) +" Gb" : resultdownload.toFixed(1) +" Mb";
    }
    if (uploadRef.current) {
      uploadRef.current.text = resultupload.toFixed(1)>999.99 ? (resultupload.toFixed(1)/1000).toFixed(2) +" Gb" : resultupload.toFixed(1) +" Mb";
    } */


/* Use reft and ejecute start() one time */
useEffect(() => {
    
      
  onload();
   
  }, []);
  return (
    <section className='h-[50vh] w-[50vw] flex-col justify-center items-center align-middle bg-slate-500'>


      <p >
      Prueba tu velocidad de internet 
    </p>
    
      <p >
      DOWNLOAD 
    </p>
      <p >
      UPLOAD 
    </p>
      <p >
        {resultdownload}
    
      </p>
      <p >
        {resultupload} 
    
      </p>
      <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  onClick={() => {
 
    onload();
 
  }}
>
  {textoboton}
</button>

    
    </section>
  );
});

export default SpeedTestText;
