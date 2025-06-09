

window.varispeed="HOLA";
window.speedTest=0;
window.resultdownload=0;
window.resultupload=0;

window.speedTestStatus="stop";



function setVelocidad(speed) {
  speed = speed*1000;
 /*  document.getElementById("velocidad").innerHTML = speed; */

  // Aquí se modificaría la rotación del indicador de velocidad
/*   const arrow = document.querySelector(".arrow-red"); */

  // Establecer el ángulo de rotación según la velocidad
  const minAngle = -44.5; // Ángulo mínimo en grados para una velocidad de 0
  const maxAngle = 226 - (226 * 0.205); // Ángulo máximo en grados para una velocidad de 10

  const speedValues = [0, 20, 50, 80, 100, 500, 1000, 2000, 5000, 8000, 10000];
  const angleSteps = (maxAngle - minAngle) / (speedValues.length - 1);
  

  let rotationAngle;

  for (let i = 0; i < speedValues.length; i++) {
    if (speed >= speedValues[i] && speed <= speedValues[i + 1]) {
      let ratio = (speed - speedValues[i]) / (speedValues[i + 1] - speedValues[i]);
      rotationAngle = minAngle + (angleSteps * i) + (angleSteps * ratio);
      break;
    }
  }

  if (speed >= 10000) {
    rotationAngle = maxAngle;
  }
  if (window.speedTestStatus=="downloading"){
  window.resultdownload=speed;
  }
  else if (window.speedTestStatus=="uploading"){
    window.resultupload=speed;
  }





/*   console.log(speedTest); */

/*   arrow.style.setProperty("--rotation", `${rotationAngle}deg`); */
/*    console.log("angulo rotacion z: "+rotationAngle); */

}
  
function setDescarga(download) {
  
     
  console.log(download.toFixed(3) + " G");
  console.log((download * 1000).toFixed(1) + " MB");

  
  
  download=download*1000;
  window.resultdownload=download;

 /*  console.log("Download: "+ download); */
  //download=58;
/*   setArrowRotation("manecilla_verde", download); */


}

  function setSubida(upload) {
   
/*     document.getElementById("circle-upload-value").innerHTML = upload.toFixed(3) + " G";
    document.getElementById("circle-upload-mbps").innerHTML = (upload * 1000).toFixed(1) + " MB";
 */
    
    console.log(upload.toFixed(3) + " G");
    console.log((upload * 1000).toFixed(1) + " MB");

    
    upload=upload*1000;
    window.resultupload=upload;

    /* console.log("Upload: "+ upload); */
      //upload=83;
    /*   setArrowRotation("manecilla_azul", upload); */

  }
  
 


  function setArrowRotation(arrow, speed) {
    const minAngle = -44.5; // Ángulo mínimo en grados para una velocidad de 0
    const maxAngle = 226 - (226 * 0.205); // Ángulo máximo en grados para una velocidad de 10
  
    const speedValues = [0, 20, 50, 80, 100, 500, 1000, 2000, 5000, 8000, 10000];
    const angleSteps = (maxAngle - minAngle) / (speedValues.length - 1);
    
    let rotationAngle;
  
    for (let i = 0; i < speedValues.length; i++) {
      if (speed >= speedValues[i] && speed <= speedValues[i + 1]) {
        let ratio = (speed - speedValues[i]) / (speedValues[i + 1] - speedValues[i]);
        rotationAngle = minAngle + (angleSteps * i) + (angleSteps * ratio);
        break;
      }
    }
  
    if (speed >= 10000) {
      rotationAngle = maxAngle;
    }
  
/* 
    const flecha = window.shareScene.getObjectByName(arrow);
    flecha.visible = true;
    flecha.rotation.z = rotationAngle; */
  }


  function hideArrows() {

  }


  //-----------------------------------------------------
  //-----------------------------------------------------
  //-----------------------------------------------------
  //---------------------CARRITO-------------------------
  //-----------------------------------------------------
  //-----------------------------------------------------

  let shouldStopAnimation = false; 
  let carAnimationCompleted = true;




  function initTest() {
    window.testingDownloadFinish=false;
    window.testingUploadFinish=false;
    window.resultdownload=0;
    window.resultupload=0;
    window.testingDownload=true;
    window.testingUpload=false;
  runTasks();
/*   document.getElementById("startButtonDesk").disabled = true;
  document.getElementById("startButtonDesk").classList.add("disabled");
  document.getElementById("secondButtonDesk").disabled = false;
  document.getElementById("secondButtonDesk").classList.remove("disabled"); */
}


  
  function resetCarAnimation() {
    if(shouldStopAnimation) {

    }

  }

  