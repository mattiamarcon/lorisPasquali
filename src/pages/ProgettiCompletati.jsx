import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProgettiCompletati(){

    const progettiCompletati = [
        {
            Luogo: "Vicenza",
            Anno: 2018,
            Descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aperiam veniam porro nihil delectus laborum aliquid minima. Labore, iure. Iusto eius soluta, consectetur earum numquam nostrum odit. Veniam, totam ratione.",
            pathPrima: "./progettiCompletati/casaPrima.jpg",
            pathDopo: "./progettiCompletati/casaDopo.jpg"
        },
        {
            Luogo: "Caorle",
            Anno: 2020,
            Descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aperiam veniam porro nihil delectus laborum aliquid minima. Labore, iure. Iusto eius soluta, consectetur earum numquam nostrum odit. Veniam, totam ratione.",
            pathPrima: "./progettiCompletati/casaPrima.jpg",
            pathDopo: "./progettiCompletati/casaDopo.jpg"
        },
        {
            Luogo: "Caorle",
            Anno: 2016,
            Descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aperiam veniam porro nihil delectus laborum aliquid minima. Labore, iure. Iusto eius soluta, consectetur earum numquam nostrum odit. Veniam, totam ratione.",
            pathPrima: "./progettiCompletati/casaPrima.jpg",
            pathDopo: "./progettiCompletati/casaDopo.jpg"
        }
    ]

    return (
        <>
            <Navbar />
            <div className="w-full flex flex-col">
                <div className="w-full text-center relative grid place-items-center">
                    <img src="./gru.png" alt="" className="w-full object-cover opacity-70 h-24"/>
                    <h1 className="absolute text-4xl font-bold">PROGETTI COMPLETATI</h1>
                </div>    
                <div>
                    {progettiCompletati.map(progetto=>{
                        
                    })}
                </div>
            </div>
            <Footer />
        </>
    )  
}