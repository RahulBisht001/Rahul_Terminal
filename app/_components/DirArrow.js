"use client";

import React, {useState} from "react";

import {IoGitBranch} from "react-icons/io5";
import {GoTriangleRight} from "react-icons/go";
import {FaFolderOpen} from "react-icons/fa";

import DirPath from "./DirPath";
import Bio from "./commands/Bio";

const DirArrow = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <div className="mt-2 mb-2 text-black">
                {/* Directory path arrow */}
                <div className="flex items-center">
                    <div className="w-5 h-1 bg-blue-500"></div>
                    <div className="flex gap-[2px] text-sm h-7 items-center bg-green-500 pl-2   justify-center pr-2">
                        <IoGitBranch size={20} />

                        <h1>Rahul Bisht </h1>
                    </div>
                    <div
                        className=" w-5 h-7 bg-green-500 z-20"
                        style={{
                            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                        }}
                    ></div>
                    <div className="flex items-center">
                        <div className=" bg-blue-500 -translate-x-5">
                            <div className="flex gap-[2px] h-7 text-sm items-center justify-center pl-8 pr-2">
                                <FaFolderOpen size={18} />
                                <h1> /portfolio</h1>
                            </div>
                        </div>
                        <div
                            className="-translate-x-5 w-5 h-7 border-l-2 border-blue-500 bg-blue-500 z-20"
                            style={{
                                clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                            }}
                        ></div>
                        {/* <>{CmdStatus}</> */}
                    </div>

                    {/* Directory path */}
                    {open && (
                        <>
                            <DirPath />
                        </>
                    )}
                </div>

                {/* Down Arrow */}
                <div className="flex items-center">
                    <div className="h-10 w-1 bg-blue-500 -translate-y-3"></div>
                    <div className="">
                        <div className="h-1 w-4 bg-blue-500 translate-y-2 -translate-x-1"></div>
                    </div>
                    <div className="translate-y-2 -translate-x-3">
                        <GoTriangleRight className="text-2xl text-blue-500" />
                    </div>

                    {/* input command */}
                    <form className="w-full flex items-center">
                        <input
                            className="translate-y-2 -translate-x-3 bg-inherit w-full focus:outline-none placeholder:text-gray-500 tracking-widest text-white"
                            autoFocus
                            placeholder="try ls , bio , skill , contact, about . . ."
                        />
                    </form>
                </div>

                <Bio />
            </div>
        </>
    );
};

export default DirArrow;
