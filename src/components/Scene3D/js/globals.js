

/* import {objectsToTest} from '../../script.js'; */

export class GlobalVariables{
    listenMouseWheel = false;
    desactivateHover = true;
    isAnimating = true;
    observing = false;
    nowWatching = 'animationToRoot';
    
    globalEnvIntensity = {envIntensity: 2};
}

let globalVariables = new GlobalVariables();
export default globalVariables;


