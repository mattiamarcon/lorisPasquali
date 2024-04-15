import Navbar from "../components/Navbar";
import { Loader } from '@googlemaps/js-api-loader';

export default function Contatti(){

   
    
        

    return (
        <>
            <Navbar />
            <h1 className="text-blue-700 text-5xl font-sans font-bold text-center m-5">CONTATTI</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1961.1621482241155!2d12.528373817858844!3d45.8205092883968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47795d5b95324513%3A0x11f5a394823538fc!2sBar%20Villeneuve!5e1!3m2!1sit!2sit!4v1713100611581!5m2!1sit!2sit" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[70vh] "></iframe>
            <div className="flex flex-col m-4">
                <div className="flex flex-row w-full justify-center text-center p-2 ">
                    <h2 className="font-bold text-xl whitespace-pre ">Indirizzo:  </h2>
                    <a href="https://www.google.com/maps/dir//Bar+Villeneuve+Piazza+Europa,+10+31040+Mansu%C3%A8+TV/@45.8202778,12.53,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47795d5b95324513:0x11f5a394823538fc!2m2!1d12.5300077!2d45.8203317?entry=ttu" className="text-xl underline hover:text-blue-500 cursor-pointer" target="_blank">VIA PER ODERZO,12-31040 Mansuè(TV)</a>
                </div>
                <div className="flex flex-row w-full justify-center text-center p-2 ">
                    <h2 className="font-bold text-xl whitespace-pre">Telefono: </h2>
                    <a href="tel:+393920142460" rel="noopener noreferrer" className="text-xl underline hover:text-blue-500 cursor-pointer">123 456 7890</a>
                </div>
            </div>
            
        </>
    );
}