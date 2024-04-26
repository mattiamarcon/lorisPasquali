import Slider from "./Slider";

export default function Card({progetto}){

    return (
        <div className="m-3 md:w-2/3 w-3/4">
            <div className="border-black border-2 rounded-t-md p-2 cursor-pointer">
                <Slider>
                    <img src={progetto.pathPrima} alt="" />
                    <img src={progetto.pathDopo} alt="" />
                </Slider>
            </div>
            <div className="border-black border-2 border-t-0 rounded-b-md p-2" onSC>
                <ul>
                    <li>{progetto.Luogo}</li>
                    <li>{progetto.Anno}</li>
                    <li>{progetto.Descrizione}</li>
                </ul>
            </div>
        </div>
    );
}