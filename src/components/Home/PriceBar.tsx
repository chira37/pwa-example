import React from "react";

interface PriceBarProps {
    name?: string;
    price?: string;
}

const PriceBar: React.FC<PriceBarProps> = ({ name, price }) => {
    return (
        <div
            id="price_bar"
            className="flex py-5 px-8 justify-between  w-full bg-white fixed bottom-0 shadow-sm border-t"
        >
            <div className="">
                <p className="font-poppins text-sm text-gray-500 mb-1">{name}</p>
                <p className="font-poppins text-base text-gray-700 font-semibold">{price}</p>
            </div>
            <div className="flex flex-col justify-center">
                <button
                    className="py-2 px-12 rounded-xl  text-white font-poppins
                bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none 
                hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500
                focus:bg-gradient-to-r focus:from-blue-800 focus:to-blue-600"
                >
                    Join
                </button>
            </div>
        </div>
    );
};
export default PriceBar;
