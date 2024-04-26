export default function Slider({children}){
    return (
        <div>
            <div className="flex flex-row overflow-hidden relative">
                <button className="bg-white opacity-75 rounded-full absolute left-2 top-1/2 -transalte-y-1/2 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <button className="bg-white opacity-75 rounded-full absolute right-2 top-1/2 -transalte-y-1/2 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            {children}
            </div>
        </div>
        
        
    );
}



