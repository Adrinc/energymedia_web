import { gsap } from "gsap";
import globalVariables from './globals.js';

export class AnimationsGsap{

 animationIntro(){
    gsap.to(scene.getObjectByName('puerta').rotation, {duration: 3, z: -0.15, ease: "power2.inOut",onComplete: () => {}});
    gsap.to(camera.position, {duration: 3, x:2, y:3, z: 6.3,   ease: "power2.inOut", 
    onComplete: () => 
    {
        gsap.to(scene.getObjectByName('puerta').rotation, { z: 1.56, ease: "power2.inOut",
        onComplete: () => 
        {
        globalVariables.desactivateHover=false;
        renderer.shadowMap.autoUpdate = false;
        globalVariables.nowWatching = 'animationToRoot';
        globalVariables.listenMouseWheel=true;
        scene.getObjectByName('grid').animateGrid = false;
        scene.remove(scene.getObjectByName('grid'));
        }
    });
    }});

}

 stopAnimation() {globalVariables.isAnimating = false;}
 startAnimation() {globalVariables.isAnimating = true;}


//ANIMACIONES DENTRO DE LA SCENA



//ir a televisor

 animationToTelevisor(camera){
    globalVariables.nowWatching = 'animationToTelevisor'; 
    globalVariables.listenMouseWheel=false;
    gsap.to(camera.position, {duration: 1.25, x: -10.25, y: 0.3, z: -8.5, ease: "power2.inOut"});
    gsap.to(camera.rotation, {duration: 1.25, x: 0.1, y: 0, z: 0, ease: "power2.inOut",
    onComplete: () => { 
        globalVariables.listenMouseWheel=true;
       
    }});

}

 animationToTelevisorZoom(camera){
    globalVariables.nowWatching = 'animationToTelevisorZoom';
    globalVariables.listenMouseWheel=false;
    gsap.to(camera.position, {duration: 1.25, x: -10.4, y: 4.4, z: -16, ease: "power2.inOut"});
    gsap.to(camera.rotation, {duration: 1.25, x: 0, y: 0, z: 0, ease: "power2.inOut",
    onComplete: () => { 
        globalVariables.listenMouseWheel=true;
      
     
    }});
}

 animationToMainMenu(camera){
    globalVariables.nowWatching = 'animationToMainMenu';
    globalVariables.listenMouseWheel=false;
    gsap.to(camera.position, {duration: 1.25, x: 5, y: 3.25, z: -13, ease: "power2.inOut", });
    gsap.to(camera.rotation, {duration: 1.25, x: 0, y: 0, z: 0, ease: "power2.inOut",
    onComplete: () => { 
        globalVariables.listenMouseWheel=true;
     
    
    }});
}
 animationToRoot(camera){
    globalVariables.nowWatching = 'animationToRoot';
    globalVariables.listenMouseWheel=false;
    gsap.to(camera.position, {duration: 1.25, x:2, y:3, z: 6.3,   ease: "power2.inOut", });
    gsap.to(camera.rotation, {duration: 1.25, x: 0, y: 0, z: 0, ease: "power2.inOut",
    onComplete: () => { 
        globalVariables.listenMouseWheel=true;
     
    }});
}
 animationToGalaxy(camera){
    globalVariables.nowWatching = 'animationToGalaxy';
    globalVariables.listenMouseWheel=false;
    gsap.to(camera.position, {duration: 1.25, x:-12.6, y:3.6, z: -14.5,   ease: "power2.inOut", });
    gsap.to(camera.rotation, {duration: 1.25, x: 0, y: 1.55, z: 0, ease: "power2.inOut",
    onComplete: () => { 
        globalVariables.listenMouseWheel=true;
     
    
    }});
}

animationToNosotros(camera){
    globalVariables.nowWatching = 'animationToProyectos';
    globalVariables.listenMouseWheel=false;
    gsap.to(camera.position, {duration: 1.25, x: 16.2, y: 1.45, z: -14.5, ease: "power2.inOut", });
    gsap.to(camera.rotation, {duration: 1.25, x: 0, y: 1.57, z: 0, ease: "power2.inOut",
    onComplete: () => { 
        globalVariables.listenMouseWheel=true;
     
    
    }});
}

}