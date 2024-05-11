import StandardPage from "../components/StandardPage";
import { Link } from "react-router-dom";
import Figures from "../components/Figures";

const Figurine=[
    {title:"Costruzioni",url:"icons/costruzione.png"},
    {title:"Restaurazioni",url:"icons/Restaurazione.png"},
    {title:"Manutenzioni",url:"icons/Manutenzione.png"},
    {title:"Lavori Specializzati",url:"icons/spec.png"}
]


export default function Home(){



    //<img src="homeImage.png" alt="" className="h-[90vh] p-3 xl:w-full object-cover" />
    //<h1 className=" text-red-500">HOME</h1>


    return (
        <>
            <StandardPage>
            <div className="relative grid place-items-center h-[90vh]">
                <img src="./foto2.png" alt="" className="h-[90vh] p-3 xl:w-full object-cover opacity-70" />
                <div className="absolute flex flex-col h-1/3 justify-evenly w-4/5 text-center font-sans p-2">
                    <h1 className="font-bold text-4xl mb-8">PASQUALI LORIS IMMOBILIARE COSTRUZIONI</h1>
                    <Link to={"/storia"} className="border-black border-2 w-fit p-3 rounded-md mx-auto my-3 bg-yellow-200 font-bold text-xl italic hover:bg-yellow-300">LA NOSTRA IDEA DI LAVORO</Link>
                    <Link to={"/contatti"} className="border-black border-2 w-fit p-3 rounded-md mx-auto my-3 bg-yellow-200 font-bold text-xl italic hover:bg-yellow-300">CONTATTACI</Link>
                </div>
            </div>
            <hr />
            <h1 className="text-4xl font-bold my-9 text-center">SERVIZI</h1>
            <div className="flex flex-col lg:flex-row flex-wrap md:justify-evenly items-center">
                {Figurine.map(f=>{
                    return <Figures key={f.title} title={f.title} url={f.url}/>
                })}
            </div>
            <hr />

            <video src="videoHome.mp4" loop autoPlay muted className=" h-[280px] sm:h-[380px] md:h-[400px] lg:h-[450px] xl:h-[550px] w-11/12 mx-auto mt-6" />

            </StandardPage>
        </>
    );
}