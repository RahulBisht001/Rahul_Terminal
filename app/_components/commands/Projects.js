import React from "react";
import Link from "next/link";

import projectsList from "@/app/_utils/Projects_List";

const Projects = () => {
    return (
        <>
            <div className="text-white">
                <h1 className="text-lg font-normal blinking-text text-green-400">Here'r my latest projects</h1>

                <div className="grid grid-cols-3">
                    {projectsList.map((project, index) => (
                        <div key={index}>
                            <div className="relative inline-block">
                                <div className="bg-green-500 absolute inset-0 translate-x-1 translate-y-1 "></div>
                                <div className="bg-[#101010] hover:cursor-pointer inline-block p-5 relative z-10 parent_bellAnimate">
                                    <h2 className="text-xl">{project.title}</h2>

                                    <h3 className="underline underline-offset-4 child_bellAnimate">
                                        Check Description
                                    </h3>

                                    <div className="flex justify-evenly mt-5">
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            className="text-base hover:text-green-500"
                                        >
                                            Live Link
                                        </Link>
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="text-base hover:text-green-500"
                                        >
                                            Github
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
