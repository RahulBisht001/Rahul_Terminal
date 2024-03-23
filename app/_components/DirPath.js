import React from "react";

import {FaFolderOpen} from "react-icons/fa";

const DirPath = () => {
    return (
        <>
            <div className="flex items-center">
                <div className=" bg-yellow-200 -translate-x-10">
                    <div className="flex gap-[2px] h-7 items-center justify-center pl-8 text-black text-sm pr-2">
                        <FaFolderOpen size={18} />
                        <h1 className="text-end">/skills</h1>
                    </div>
                </div>

                <div
                    className="-translate-x-10 w-5 h-7 border-l-2 border-yellow-200 bg-yellow-200 z-20"
                    style={{
                        clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                    }}
                ></div>
            </div>
        </>
    );
};

export default DirPath;