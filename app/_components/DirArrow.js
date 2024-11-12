"use client";

import React, {useState} from "react";

import {RiGitBranchFill} from "react-icons/ri";
import {FaUserGraduate} from "react-icons/fa6";
import {GoTriangleRight} from "react-icons/go";

import DirPath from "./DirPath";
import About from "./commands/About";
import Skills from "./commands/Skills";
import Projects from "./commands/Projects";

const DirArrow = () => {
    const [open, setOpen] = useState(true);
    const [dirName, setDirName] = useState("projects");

    //todo -> Feature
    // Add currTime, when the command is executed.

    return (
        <>
            <div className="mt-2 mb-2 text-black">
                {/* Directory path arrow */}
                <div className="flex items-center">
                    <div className="w-5 h-1 bg-blue-500"></div>
                    <div className="flex gap-[2px] text-base h-7 items-center bg-green-500 pl-2   justify-center pr-2">
                        <RiGitBranchFill size={20} />
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
                            <div className="flex gap-[2px] h-7 text-base items-center justify-center pl-8 pr-2">
                                <FaUserGraduate size={16} />
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
                            <DirPath dirName={dirName} />
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
                    <form className="w-full flex items-center justify-center">
                        <input
                            className="translate-y-2 -translate-x-3 bg-inherit w-full focus:outline-none placeholder:text-gray-500 tracking-widest text-white"
                            autoFocus
                            placeholder="try ls , bio , skill , contact, about . . ."
                        />

                        <h1 className="text-[#dedede] translate-y-2 -translate-x-3 bg-inherit tracking-wider ">
                            Executed{/* {currTime} */}
                        </h1>
                    </form>
                </div>
                {/* {open && <About />} */}
                {/* {open && <Skills />} */}
                {open && <Projects />}
            </div>
        </>
    );
};

export default DirArrow;
