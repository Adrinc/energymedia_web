import { useRive, Layout, Fit, Alignment, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useRef  } from "react";
import "./styles.css";
import { useStore } from "@nanostores/react";
import { isEnglish } from  "../../../data/variables.js";


export const RiveElement = (props) => {
  const {
    src,
    stateMachines = [],
    autoplay = true,
    artboard = null,
    fit = "contain",
    hastext = false,
    textValues = {},
    ingles = false,
  } = props;
  // Referencia para manipular directamente el DOM del componente Rive
  const riveContainerRef = useRef(null);
  const inglesx = useStore(isEnglish);
/*   console.log("isEnglishLANG:", inglesx); */
/*   console.log("isEnglishLANG:", isEnglish.value); */
  // Configuración de Rive
  const { RiveComponent, rive } = useRive({
    src: src,
    stateMachines: stateMachines.length > 0 ? stateMachines : null,
    artboard: artboard,
    automaticallyHandleEvents: true,
    useOffscreenRenderer: false,
    isTouchScrollEnabled: true,
    layout: new Layout({
      fit: fit,
      alignment: Alignment.Center,
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
    }),
    autoplay: autoplay,
    onLoad: () => {
     /*  console.log("Rive loaded"); */
    
    },
  });

  var input = useStateMachineInput(rive, "State Machine 1", "textEnglish", inglesx);
  useEffect(() => {
    if (rive) {
      if (input) {
        input.value = inglesx;
      }
    }
  }, [rive, inglesx]);
  useEffect(() => {
    if (rive && riveContainerRef.current) {
      rive.on("statechange", (event) => {
        const state = event.data[0];
        /* console.log("State animation name:", state); */

/*         if (state.includes("texto_español")) 
        {
          

   
        } 

        else if (state.includes("texto_ingles")) 
        {



        } */

      });


    }
  }, [rive]);

  /* useEffect for   resizeToCanvas(); or   get devicePixelRatioUsed(): number;
    set devicePixelRatioUsed(value: number); */

    useEffect(() => {
      if (rive) {
        const resize = () => {
          rive.resizeToCanvas();
        };
  
        window.addEventListener("resize", resize);
  
        return () => {
          window.removeEventListener("resize", resize);
        };
      }
      console.log("Rive resized");
    }, [rive]);

  useEffect(() => {
    if (rive && riveContainerRef.current) {
      rive.on("riveevent", (event) => {
       /*  console.log("Event:", event.data.name); */
   

        if (event.data.name.includes("hover_in")) {
          riveContainerRef.current.style.cursor = "pointer";
          /* change RiveElement.ingles value to true */

        } else if (event.data.name.includes("hover_out")) {
          riveContainerRef.current.style.cursor = "default";
        }


        
        if (event.data.name.includes("mx_clicked")) 
          {
            

            isEnglish.set(false);
            /* console.log("isEnglishLANG:", isEnglish.get()); */
 
     
          } 
  
          else if (event.data.name.includes("us_clicked")) 
          {
            isEnglish.set(true);
        /*     console.log("isEnglishLANG:", isEnglish.get()); */
     
          }
      });


    }
  }, [rive]);


  useEffect(() => {
    if (rive && hastext && textValues) {
      for (const [key, value] of Object.entries(textValues)) {
        try {
          rive.setTextRunValue(key, value);
          console.log(`Texto actualizado: ${key} = ${value}`);
        } catch (error) {
          console.error(`Error al establecer el valor del texto para '${key}':`, error);
        }
      }
    }
  }, [rive, hastext, textValues]);

   return (
    <div ref={riveContainerRef} style={{ width: "100%", height: "100%" }}>
      <RiveComponent />
    </div>
  );;
};

export default function Animation(props) {
  const {
    src,
    stateMachines,
    autoplay,
    artboard,
    fit,
    hastext,
    textValues,
    ingles,
  } = props;

  return (
    <RiveElement
      style={{ width: "100%", height: "100%" }}
      src={src}
      stateMachines={stateMachines}
      autoplay={autoplay}
      artboard={artboard}
      fit={fit}
      hastext={hastext}
      textValues={textValues}
      ingles={ingles}
    />
  );
}
