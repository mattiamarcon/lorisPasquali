import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";


export default function ProgettiCompletati(){

    const progettiCompletati = [
        {
            id:0,
            Luogo: "Vicenza",
            Anno: 2018,
            Descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aperiam veniam porro nihil delectus laborum aliquid minima. Labore, iure. Iusto eius soluta, consectetur earum numquam nostrum odit. Veniam, totam ratione.",
            pathPrima: "./progettiCompletati/casaPrima.jpg",
            pathDopo: "./progettiCompletati/casaDopo.jpg"
        },
        {
            id:1,
            Luogo: "Caorle",
            Anno: 2020,
            Descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aperiam veniam porro nihil delectus laborum aliquid minima. Labore, iure. Iusto eius soluta, consectetur earum numquam nostrum odit. Veniam, totam ratione.",
            pathPrima: "./progettiCompletati/casaPrima.jpg",
            pathDopo: "./progettiCompletati/casaDopo.jpg"
        },
        {
            id:2,
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
                
                <div className="w-full">
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 place-items-center">
                        {progettiCompletati.map(progetto=>{
                            return <Card progetto={progetto} key={progetto.id} />
                        })}
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )  
}

