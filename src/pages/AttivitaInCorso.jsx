import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useEffect, useState } from "react";


export default function AttivitaInCorso(){

    const [attivita,setAttivita] = useState([]);

    useEffect(()=>{
        fetch("./attivitaInCorso/attivitaInCorso.json")
        .then(data=>{return data.json()})
        .then(json=>setAttivita(json))
        .catch(e=>console.log(e));
    },[])

    return (
        <>
            <Navbar />
            <div className="w-full flex flex-col">
                <div className="w-full text-center relative grid place-items-center">
                    <img src="./lavoriInCorso.jpg" alt="" className="w-full object-cover opacity-90 h-24"/>
                    <h1 className="absolute text-4xl font-bold">ATTIVITA IN CORSO</h1>
                </div>  
                <div className="w-full">
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 place-items-center">
                        {attivita.map(progetto=>{
                            return <Card progetto={progetto} key={progetto.id} id={progetto.id} />
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )  
}