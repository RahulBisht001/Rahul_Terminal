import React from "react";

const TodayDate = () => {
    const date = new Date().toDateString();
    return (
        <>
            <div className="p-2 pt-0">
                <h1 className="p-1 text-lg text-gray-300">Hello 👋, Recruiter !</h1>
                <h1 className="p-1 text-base text-gray-300">Its, {date}</h1>
            </div>
        </>
    );
};

export default TodayDate;
