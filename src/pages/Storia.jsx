import { useEffect,useRef } from "react";
import StandardPage from "../components/StandardPage";
import { Carousel } from "flowbite-react";


export default function Storia(){

  //sistemare bene graficamente pagina storia

    return (
      <>
        <StandardPage>
          <div className="grid place-items-center relative text-center">
            <img src="famigliaConCasa.png" alt="" className="w-full opacity-70 h-72 lg:h-96 object-cover" />
            <h1 className="absolute text-6xl font-bold text-red-700 underline underline-offset-2">I NOSTRI VALORI</h1>
          </div>
          <div className="flex flex-col xl:flex-row p-3 w-full justify-evenly mt-8">
            <div className="flex flex-col xl:w-1/4 m-3 text-center justify-evenly w-5/6 mx-auto">
              <h1 className=" font-semibold text-4xl mb-5 2xl:mb-0">LA FAMIGLIA</h1>
              <p className="mb-8">
                L'azienda edile "Loris Pasquali Immobiliare Costruzioni" è una nuova e dinamica realtà nel panorama edile, fondata e guidata con passione da un unico socio, il quale porta con sé l'antica tradizione familiare nel settore delle costruzioni. Cresciuto in una <strong>famiglia di muratori</strong> nel cuore della provincia di Treviso e del Veneto, il fondatore ha deciso di intraprendere questa avventura per rimanere vicino alla sua famiglia e per onorare la lunga eredità di maestria artigianale che lo ha preceduto.
              </p>
            </div>
            <img src="foto2.png" alt="" className="xl:w-1/2 h-[260px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-11/12 mx-auto mb-3 "/>
          </div>
          <hr />
          <div className="flex flex-col sm:flex-row p-3 w-full justify-evenly flex-wrap ">
          <div className="flex flex-col sm:w-2/5 xl:w-1/4 m-3 text-center justify-evenly w-5/6 mx-auto">
              <h1 className=" font-semibold text-4xl mb-5 2xl:mb-0">LA TRADIZIONE</h1>
              <p className="mb-8">
                Guidato dalla convinzione che il vero valore di un'impresa risieda nella sua capacità di mettere al centro le esigenze delle persone e di creare spazi che ispirino e trasformino, il fondatore si dedica con fervore alle ristrutturazioni e alle costruzioni. Con una visione orientata al futuro e un profondo rispetto per le radici, "Loris Pasquali Immobiliare Costruzioni" si impegna a offrire soluzioni innovative e su misura per ogni progetto, mantenendo sempre vivo lo spirito dell'artigianato tradizionale.
              </p>
            </div>
            <div className="grid place-items-center">
              <video src="videoCostruction.mp4" loop autoPlay muted className="h-[800px] sm:h-[600px] mb-6 w-fit sm:mt-8 sm:ml-5 rounded-lg" />
            </div>
            
            <div className="flex flex-col lg:w-2/5 xl:w-1/4 m-3 text-center justify-evenly w-5/6 mx-auto">
              <h1 className=" font-semibold text-4xl mb-5 2xl:mb-0">IL NOSTRO TERRITORIO</h1>
              <p className="mb-8">
                Nato nel cuore della provincia di Treviso e del Veneto, l'azienda ha rapidamente guadagnato fiducia e riconoscimento nella comunità locale, grazie alla sua reputazione di affidabilità, professionalità e attenzione ai dettagli. Attraverso un costante impegno per l'eccellenza e un approccio centrato sul cliente, "Loris Pasquali Immobiliare Costruzioni" si propone di diventare un punto di riferimento nel settore edile, trasformando le aspirazioni dei clienti in realtà tangibili e durature.
              </p>
            </div>
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