import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Error(){
    const error = useRouteError();

    return (
        <div className="w-full grid place-items-center">
            <h1 className="m-3">CI SCUSIAMO, C'E' STATO UN ERRORE INASPETTATO</h1>
            <Link to={"/"} className="border-black border-2 w-fit p-3 rounded-md m-3 bg-blue-400 font-bold text-xl italic hover:bg-blue-500">TORNA ALL'HOME PAGE</Link>
        </div>
        
    );
}
