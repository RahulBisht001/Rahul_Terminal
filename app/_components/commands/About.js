import React from "react";
import Image from "next/image";

import {MdVerified} from "react-icons/md";
import Social from "@/app/_utils/Social";

const About = () => {
    return (
        <>
            <div className="text-gray-400 py-4 px-10">
                <div className="flex items-center gap-8 mb-2 px-4">
                    <Image
                        src={"/assets/RahulB_LinkedIn.png"}
                        alt="Rahul Bisht image"
                        width={130}
                        height={130}
                        className="rounded-full border-2 border-yellow-300"
                    />
                    <div>
                        <div className="flex gap-1 items-center mb-2">
                            <h1 className="text-2xl font-600 text-gray-400">Rahul Bisht</h1>
                            <MdVerified size={20} className="text-blue-500" />
                        </div>
                        <h2 className="my-1 text-lg text-slate-500">Full Stack MERN Next.js Developer from India.</h2>
                        <h2 className="text-lg text-slate-500">22 spins on this cosmic carousel.</h2>
                    </div>
                </div>

                <div>
                    <p className="text-lg leading-8">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hi there👋, I am
                        Rahul! 🎓Final year student pursuing B.Tech.Full Stack Developer with expertise in MERN Stack
                        and Next.js.I've fortified my problem-solving skills through DSA practice in Java. Proficient in
                        Database Management Systems , Operating System & Object Oriented Programming ,Exploring Computer
                        Networks.
                    </p>
                </div>
                <br />

                <Social />
            </div>
        </>
    );
};

export default About;
