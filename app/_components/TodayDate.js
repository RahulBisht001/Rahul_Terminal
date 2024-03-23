import React from "react";

const TodayDate = () => {
    const date = new Date().toDateString();
    return (
        <>
            <div className="p-2 pt-0">
                <h1 className="p-1 font-Josefin text-md text-gray-200">Hello 👋, Recruiter !</h1>
                <h1 className="p-1 font-Josefin text-md text-gray-200">Its, {date}</h1>
            </div>
        </>
    );
};

export default TodayDate;
