import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="bg-slate-900 text-center">
            <div className="w-full flex flex-col justify-evenly p-3">
                <p className="text-gray-400 m-2"><Link to={'/'}>Loris Pasquali Immobiliare Costruzioni</Link></p>
                <a href="https://www.google.com/maps/dir//Bar+Villeneuve+Piazza+Europa,+10+31040+Mansu%C3%A8+TV/@45.8202778,12.53,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47795d5b95324513:0x11f5a394823538fc!2m2!1d12.5300077!2d45.8203317?entry=ttu" className="text-gray-300 font-thin m-2" target="_blank">VIA PER ODERZO,12-31040 Mansuè(TV)</a>
                <a href="tel:+393920142460" rel="noopener noreferrer" className="text-gray-300 font-thin m-2">CELL: +39 123 456 7890</a>
                <p className="text-gray-300 font-thin m-2">P. IVA 00068670264</p>
            </div>
        </footer>
    );
}