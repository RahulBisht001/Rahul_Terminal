import React from "react";
import Link from "next/link";

import {BsRocketTakeoffFill} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import {IoLogoTwitter} from "react-icons/io";

const Social = () => {
    const socialHandles = [
        {
            link: "https://github.com/RahulBisht001",
            handle: "@RahulBisht001",
            logo: <BsGithub size={20} className="text-yellow-200" />,
        },
        {
            link: "https://www.linkedin.com/in/RahulB001/",
            handle: " @RahulB001",
            logo: <FaLinkedinIn size={20} className="text-yellow-200" />,
        },
        {
            link: "https://twitter.com/Twts_RahulB",
            handle: "@Twts_RahulB",
            logo: <IoLogoTwitter size={20} className="text-yellow-200" />,
        },
        {
            link: "https://linktr.ee/rahulb_001",
            handle: "@rahulb_001",
            logo: <BsRocketTakeoffFill size={20} className="text-yellow-200" />,
        },
    ];
    return (
        <>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-x-28">
                    {socialHandles.map((item, index) => {
                        return (
                            <div key={index} className="flex gap-2 my-3 items-center">
                                {item.logo}
                                {/* render the logo */}

                                <Link href={item.link} className="text-blue-400">
                                    {item.handle}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Social;
