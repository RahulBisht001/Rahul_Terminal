import React from "react";

import {FaRegFolderOpen} from "react-icons/fa6";

const DirPath = ({dirName}) => {
    return (
        <>
            <div className="flex items-center">
                <div className=" bg-yellow-300 -translate-x-10">
                    <div className="flex gap-[2px] h-7 items-center justify-center pl-8 text-black text-base pr-2">
                        <FaRegFolderOpen size={18} />
                        <h1 className="text-end">/{dirName}</h1>
                    </div>
                </div>

                <div
                    className="-translate-x-10 w-5 h-7 border-l-2 border-yellow-300 bg-yellow-300 z-20"
                    style={{
                        clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                    }}
                ></div>
            </div>
        </>
    );
};

export default DirPath;
