import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useEffect, useState } from "react";


export default function ProgettiCompletati(){

    const [progettiCompletati,setProgettiCompletati] = useState([]);

    useEffect(()=>{
        fetch("./progettiCompletati/storicoProgetti.json")
        .then(data=>{return data.json()})
        .then(json=>setProgettiCompletati(json))
        .catch(e=>console.log(e));
    },[])

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
