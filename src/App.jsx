import Navbar from "./components/Navbar";
import Headroom from "react-headroom";

export default function App(){
    return (
        <>
            <Headroom>
                <Navbar />
            </Headroom>
            <h1>HOME</h1>
        </>
    );
}
