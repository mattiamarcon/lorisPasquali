import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="bg-slate-800 text-center mt-6">
            <div className="w-full flex flex-col justify-evenly p-3">
                <p className="text-gray-400 m-2 underline"><Link to={'/'}>Loris Pasquali Immobiliare Costruzioni</Link></p>
                <a href="https://www.google.com/maps/dir//Bar+Villeneuve+Piazza+Europa,+10+31040+Mansu%C3%A8+TV/@45.8202778,12.53,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47795d5b95324513:0x11f5a394823538fc!2m2!1d12.5300077!2d45.8203317?entry=ttu" className="text-gray-300 font-thin mt-2" target="_blank">Via per Oderzo-12, Mansuè(TV)</a>
                <a href="tel:+393920142460" rel="noopener noreferrer" className="text-gray-300 font-thin mb-2">CELL: +39 123 456 7890</a>
                <a href="mailto:lorispasquali@gmail.com" className="text-gray-300 font-thin mb-2">Email: lorispasquali@gmail.com</a>

                <p className="text-gray-300 font-thin m-4">P. IVA 00068670264</p>

                <p className="text-gray-300 font-thin">Powered by passion</p>
            </div>
        </footer>
    );
}