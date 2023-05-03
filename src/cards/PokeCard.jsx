import { useState } from "react";

const PokeCard = (props) => {
    const [isHovering, setIsHovering] = useState(true);

    const handleMouseEnter = () => {
        setIsHovering(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovering(false);
      };

    return(
        <div>
            <div className="rounded-sm w-40 h-64 flex flex-col justify-start overflow-x-hidden">
                <div className="border-4 bg-grass rounded-md flex justify-center items-center flex-grow relative transition duration-200 hover:-translate-y-2">
                    <div className="w-full rounded-2xl">
                        <img src={props.img} alt="" className="w-full bg-cover"/>
                    </div>
                    <div className="flex rounded-lg align-middle justify-center absolute w-full h-full bg-stone-800 opacity-0 px-20 py-28 text-xl text-center hover:opacity-20">
                        <h1 className="flex flex-col justify-center absolute font-bold text-4xl hover:text-white transition duration-100 -translate-y-4">{isHovering ? 'Click Here' : ''}</h1>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center flex-shrink">
                    <h1 className="align-middle font-sans text-lg font-medium capitalize">{props.name}</h1>
                    <div className="bg-yellow-400 w-3/4 h-1 rounded-lg"></div>
                </div>
            </div>
        </div>



    );
}

export default PokeCard