import React from "react";

import skillDomain from "@/app/_utils/Skill_Domain";

const Skills = () => {
    return (
        <>
            <div className="text-[#dbe7f0] grid grid-cols-4 gap-6 mt-10 mx-5">
                {skillDomain.map((skill, index) => {
                    return (
                        <>
                            <div className="inline-flex gap-4 text-lg items-center">
                                {skill.icon}
                                <h3>{skill.name}</h3>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Skills;
