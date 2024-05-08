import Navbar from "./Navbar";
import Footer from "./Footer";

export default function StandardPage({children}){
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}