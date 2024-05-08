import { useRef,useState } from "react";
import { Carousel } from "flowbite-react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


export default function Card({progetto,id}){

    const foto = progetto.Foto;

    return (
        <div className="m-3 w-5/6" >
            <div className="border-black border-2 rounded-t-md p-1 cursor-pointer">
                <div className="h-48 sm:h-56 lg:h-72 l:h-96 2xl:h-96 ">
                    <Carousel leftControl={<MdArrowBackIosNew color="white" />} rightControl={<MdArrowForwardIos color="white" />} >
                        {foto.map(f=>{
                            return <img src={f.url} alt="" key={f.url} />
                        })}
                    </Carousel>
                </div>
            </div>
            
            <div className="border-black border-2 border-t-0 rounded-b-md p-2" >
                <ul>
                    <li>{progetto.Luogo}</li>
                    <li>{progetto.Inizio}-{progetto.Fine}</li>
                    <li>{progetto.Descrizione}</li>
                </ul>
            </div>
        </div>            
            
    );
}

