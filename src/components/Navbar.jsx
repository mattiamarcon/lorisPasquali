import { Link } from "react-router-dom";
import { AiOutlineMenu,AiOutlineClose  } from "react-icons/ai";


export default function Navbar(){

    //<AiOutlineClose onClick={menu}  id="manuBarsX"/>

    function menu(){
        let list = document.getElementById("navbarUL");
        list.classList.toggle('top-[80px]');
        list.classList.toggle('opacity-100');
        const menuBars=document.getElementById("menuBars");
        //const menuBarsx=document.getElementById("menuBarsx");
        //menuBars.classList.toggle("hidden");
        //!menuBarsx.classList.contains("hidden")?console.log("non ce"):console.log("cie");
    }

    return(
        <>
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center ">
            <span className="text-2xl font-[Poppins] cursor-pointer">
                <Link to={'/'}>
                    <img className="h-10 inline"
                    src="./logo.svg" />
                </Link>
            </span>

            <span className="text-3xl cursor-pointer mx-2 md:hidden block">
                <AiOutlineMenu onClick={menu} id="menuBars"/>
                
            </span>
            </div>

            <ul className="md:flex md:items-center z-10 md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in-out duration-500" id="navbarUL">
                <li className="mx-4 my-6 md:my-0">
                    <Link to={'/'} className="text-xl hover:text-cyan-500 duration-500">HOME</Link>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <Link to={'/storia'} className="text-xl hover:text-cyan-500 duration-500">STORIA</Link>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <Link to={'/contatti'} className="text-xl hover:text-cyan-500 duration-500">CONTATTI</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}