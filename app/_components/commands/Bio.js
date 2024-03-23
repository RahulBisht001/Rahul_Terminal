import React from "react";
import Image from "next/image";
import Link from "next/link";

import {MdVerified} from "react-icons/md";
import {FaLinkedin} from "react-icons/fa";
import {SiLinktree} from "react-icons/si";
import {BsGithub} from "react-icons/bs";
import {IoLogoTwitter} from "react-icons/io";

const Bio = () => {
    return (
        <>
            <div className="text-white py-4 px-10">
                <div className="flex items-center gap-8 mb-2 px-4">
                    <Image
                        src={"/assets/RahulB.png"}
                        alt="Rahul Bisht image"
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-yellow-300"
                    />
                    <div>
                        <div className="flex gap-3 items-center mb-2">
                            <h1 className="text-2xl text-gray-200">Rahul Bisht</h1>
                            <MdVerified size={25} className="text-blue-500" />
                        </div>
                        <h2 className="text-gray-300 text-sm my-1">Full Stack MERN Next.js Developer from India.</h2>
                        <h2 className="text-gray-300 text-sm">22 spins on this cosmic carousel.</h2>
                    </div>
                </div>

                <div>
                    <p className="text-sm leading-8">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hi there👋, I am
                        Rahul! 🎓Pre-final year student pursuing B.Tech.Full Stack Developer with expertise in MERN
                        Stack and Next.js.I've fortified my problem-solving skills through DSA practice in Java.
                        Proficient in Database Management Systems , Operating System & Object Oriented Programming
                        ,Exploring Computer Networks.
                    </p>
                </div>
                <br />

                <div className="grid grid-cols-2 justify-center">
                    <div className="flex gap-2 items-center my-3">
                        <BsGithub size={30} className="text-green-500" />
                        <p className="text-green-500">Github</p>
                        <Link href={"https://github.com/RahulBisht001"} className="text-blue-500 text-sm">
                            @RahulBisht001
                        </Link>
                    </div>
                    <div className="flex gap-2 items-center my-3">
                        <FaLinkedin size={30} className="text-red-500" />
                        <p className="text-red-500">Linkedin</p>
                        <Link href={"https://www.linkedin.com/in/RahulB001/"} className="text-blue-500 text-sm">
                            @RahulB001
                        </Link>
                    </div>

                    <div className="flex gap-2 items-center my-3">
                        <SiLinktree size={30} className="text-yellow-300" />
                        <p className="text-yellow-300">Linktree</p>
                        <Link href={"https://linktr.ee/rahulb_001"} className="text-blue-500 text-sm">
                            @rahulb_001
                        </Link>
                    </div>

                    <div className="flex gap-2 items-center my-3">
                        <IoLogoTwitter size={30} className="text-purple-500" />
                        <p className="text-purple-500">Twitter</p>
                        <Link href={"https://twitter.com/Twts_RahulB"} className="text-blue-500 text-sm">
                            @Twts_RahulB
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bio;
