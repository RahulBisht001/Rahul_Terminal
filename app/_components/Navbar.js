import React from "react";

const Navbar = () => {
    return (
        <>
            <header className="flex bg-[#1e1e1e] h-[34px] rounded-t-md">
                <div className="flex items-center ml-2 space-x-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                </div>
                <h1 className="flex-1 text-base text-gray-200 flex items-center justify-center">
                    🏠 RahulB/ terminal-portfolio
                </h1>
            </header>
        </>
    );
};

export default Navbar;
