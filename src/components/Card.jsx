import { useState } from "react";
import { Carousel } from "flowbite-react";

export default function Card({progetto}){

    const foto = progetto.Foto;
    {foto.map(f=>{
        console.log(f.url)
    })}
    const [photoNow,setphotoNow] = useState(0);

    function stoScrollando(move){
        if(move.deltaY<0){
            if(photoNow<foto.length-1)
                setphotoNow(p=>p+1);     
        }else{
            if(photoNow>0)
                setphotoNow(p=>p+-1);
        }     
    }

    function slideLeft(){

    }

    return (
        <div className="m-3 md:w-2/3 w-3/4">
            <div className="border-black border-2 rounded-t-md p-2 cursor-pointer">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
                    <Carousel>
                        {foto.map(f=>{
                            return <img src={f.url} alt="" key={f.url} />
                        })}
                    </Carousel>
                </div>
            </div>
            
            
            <div className="border-black border-2 border-t-0 rounded-b-md p-2" >
                <ul>
                    <li>{progetto.Luogo}</li>
                    <li>{progetto.Anno}</li>
                    <li>{progetto.Descrizione}</li>
                </ul>
            </div>
        </div>
    );
}

/*
<div className="border-black border-2 rounded-t-md p-2 cursor-pointer">
                <div className="flex flex-row overflow-auto relative cards" onWheel={e=>scroll(e)}>
                <button className="lg:bg-white opacity-75 rounded-full absolute left-2 top-1/2 -transalte-y-1/2 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-6 lg:h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <button className="lg:bg-white opacity-75 rounded-full absolute right-2 top-1/2 -transalte-y-1/2 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-6 lg:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
                <img src={foto[photoNow].url} alt="" onWheel={(e)=>stoScrollando(e)}  />
                </div>
            </div>


 */

