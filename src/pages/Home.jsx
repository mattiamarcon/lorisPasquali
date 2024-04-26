import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Home(){

    //<img src="homeImage.png" alt="" className="h-[90vh] p-3 xl:w-full object-cover" />
    //<h1 className=" text-red-500">HOME</h1>

    return (
        <>
            <Navbar />
            <div className="relative grid place-items-center h-[90vh]">
                <img src="./foto2.png" alt="" className="h-[90vh] p-3 xl:w-full object-cover opacity-70" />
                <div className="absolute flex flex-col h-1/3 justify-evenly w-4/5 text-center font-sans p-2">
                    <h1 className="font-bold text-4xl">PASQUALI LORIS IMMOBILIARE COSTRUZIONI</h1>
                    <button className="border-black border-2 w-fit p-3 rounded-md m-auto bg-yellow-200 font-bold text-xl italic hover:bg-yellow-300">LA NOSTRA IDEA DI LAVORO</button>
                </div>
            </div>
            <Footer />
        </>
    );
}