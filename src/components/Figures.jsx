export default function Figures({title,url}){
    return(
        <div className="w-2/3 lg:w-5/12 xl:w-2/12 bg-blue-900 rounded-md flex flex-col justify-evenly text-center h-96 my-5 cursor-pointer">
            <img src={url} alt=""  className="xl:w-2/3 lg:w-1/3 md:w-1/3 sm:w-1/2 w-3/4 mx-auto"/>
            <h1 className="text-white text-3xl font-semibold">{title}</h1>
        </div>
    )
}