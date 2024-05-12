import StandardPage from "../components/StandardPage";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";



export default function Contatti(){
    return (
        <>
            <StandardPage>
            <h1 className="text-center text-4xl font-bold my-5">CONTATTI</h1>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1961.1621482241155!2d12.528373817858844!3d45.8205092883968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47795d5b95324513%3A0x11f5a394823538fc!2sBar%20Villeneuve!5e1!3m2!1sit!2sit!4v1713100611581!5m2!1sit!2sit" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[60vh]"></iframe>
            <div className="flex flex-col md:flex-row justify-center text-center my-7 text-wrap">
                <div className="lg:w-1/4 flex flex-col md:h-56 justify-center my-5 mx-5 xl:mx-0">
                    <FaMapMarkerAlt className="mb-6 md:w-1/3 sm:w-1/5 sm:h-1/12 w-1/3 md:h-1/3 h-1/3 mx-auto" />
                    <a href="https://www.google.com/maps/dir//Bar+Villeneuve+Piazza+Europa,+10+31040+Mansu%C3%A8+TV/@45.8202778,12.53,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47795d5b95324513:0x11f5a394823538fc!2m2!1d12.5300077!2d45.8203317?entry=ttu" className="text-2xl  hover:text-blue-500 cursor-pointer " target="_blank">Via per Oderzo-12, Mansuè(TV)</a>
                </div>
                <div className="lg:w-1/4 flex flex-col md:h-56 justify-center my-5 mx-5 xl:mx-0">
                    <FaPhone className="mb-6 md:w-1/3 sm:w-1/5 sm:h-1/12 w-1/3 md:h-1/3 h-1/3 mx-auto" />
                    <a href="tel:+393920142460" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 cursor-pointer">123 456 7890</a>
                </div>
                <div className="lg:w-1/4 flex flex-col md:h-56 justify-center my-5 mx-5 xl:mx-0">
                    <IoIosMail className="mb-6 md:w-1/3 sm:w-1/5 sm:h-1/12 w-1/3 md:h-1/3 h-1/3 mx-auto" />
                    <a href="mailto:provamail@mail.com" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 cursor-pointer">provamail@mail.com</a>
                </div>
            </div>
            </StandardPage >
        </>
    );
}
