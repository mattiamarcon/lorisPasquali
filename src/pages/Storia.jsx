import { useEffect,useRef } from "react";
import StandardPage from "../components/StandardPage";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";


export default function Storia(){

  //sistemare bene graficamente pagina storia

    return (
      <>
        <StandardPage>
          <div className="grid place-items-center relative text-center">
            <img src="famigliaConCasa.png" alt="" className="w-full opacity-70 h-96 object-cover" />
            <h1 className="absolute text-7xl font-bold text-red-700 underline underline-offset-2">I NOSTRI VALORI</h1>
          </div>
          <div className="flex flex-col lg:flex-row p-3 w-full justify-evenly ">
            <div className="flex flex-col lg:w-1/3 m-3 text-center justify-evenly w-2/3 mx-auto">
              <h1 className=" font-semibold text-4xl mb-8">LA FAMIGLIA</h1>
              <p className="mb-8">
                L'azienda edile "Loris Pasquali Immobiliare Costruzioni" è una nuova e dinamica realtà nel panorama edile, fondata e guidata con passione da un unico socio, il quale porta con sé l'antica tradizione familiare nel settore delle costruzioni. Cresciuto in una <strong>famiglia di muratori</strong> nel cuore della provincia di Treviso e del Veneto, il fondatore ha deciso di intraprendere questa avventura per rimanere vicino alla sua famiglia e per onorare la lunga eredità di maestria artigianale che lo ha preceduto.
              </p>
              </div>
            <img src="foto2.png" alt="" className="lg:w-1/2 "/>
          </div>
          

      
        </StandardPage>
      </>
    );
}

/*
  <img src="famigliaConCasa.png" alt="" className="w-full opacity-85 h-96 object-cover" />
          <div className="flex flex-wrap flex-row">
            <div className="flex flex-col m-3 md:w-1/2">
              <h1>LA FAMIGLIA</h1>
              <p>
              L'azienda edile "Loris Pasquali Immobiliare Costruzioni" è una nuova e dinamica realtà nel panorama edile, fondata e guidata con passione da un unico socio, il quale porta con sé l'antica tradizione familiare nel settore delle costruzioni. Cresciuto in una famiglia di muratori nel cuore della provincia di Treviso e del Veneto, il fondatore ha deciso di intraprendere questa avventura per rimanere vicino alla sua famiglia e per onorare la lunga eredità di maestria artigianale che lo ha preceduto.
              </p>
            </div>
            <img src="foto2.png" alt="" className="lg:w-1/3"/>

           
          </div>
*/