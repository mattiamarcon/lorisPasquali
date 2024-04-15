import { useEffect,useRef } from "react";
import Navbar from "../components/Navbar";
import Headroom from "react-headroom";

export default function Storia(){

    const ref=useRef();

    useEffect(()=>{
        document.getElementById("story-page").addEventListener(('click'),()=>{
            makeTheChange();
        })

        //react-scroll parallax

    },[])
    
    function makeTheChange(){

        const elements= document.querySelectorAll(".element");

        elements.forEach(element=>element.innerText="ciaooooooooo")

        const observer = new IntersectionObserver(animationText,{threshold:0.5});

        elements.forEach(element=>{
            observer.observe(element);
        });
    
        // elements.foreach(element => {
        //   observer.observe(element);
        // });
      }
    
      function animationText(items){
        items.foreach(item=>{
          if(item.isIntersecting){
            console.log("insterseco")
            item.target.classList.add("bg-yellow-500");
          }else{
            item.target.classList.add("bg-yellow-500");
          }
        });
      }
    
    return (
        <div id="story-page">
            <Headroom>
                <Navbar />
            </Headroom>
            <h1>STORIA</h1>
            <div className="w-full h-screen bg-red-600 element grid place-items-center">
                <p className="text-6xl">ciao</p>
            </div>
            <div className="w-full h-screen bg-green-600 element grid place-items-center" ref={ref} >
                <p className="text-6xl">ciao</p>
            </div>
            <div className="w-full h-screen bg-blue-600 element grid place-items-center" >
                <p className="text-6xl">ciao</p>
            </div>
        </div>
    );
}