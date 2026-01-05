"use client";

import { useState } from "react";

interface GraduateData {
    initials: string;
    name: string;
    subtitle: string;
    journeyTitle: string;
    journeyDescription: string;
    quote: string;
    highlightWords?: string[];
}

interface GraduateProps {
    graduates: GraduateData[];
    gradientColors?: [string, string];
    arrowColor?: string;
}

const Graduate: React.FC<GraduateProps> = ({
    graduates,
    gradientColors = ["#0061AF", "#002573"],
    arrowColor = "#0061AF",
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? graduates.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === graduates.length - 1 ? 0 : prev + 1));
    };

    const renderQuote = (graduate: GraduateData) => {
        if (!graduate.highlightWords?.length) return graduate.quote;
        let modifiedQuote = graduate.quote;
        graduate.highlightWords.forEach((word) => {
            const regex = new RegExp(`(${word})`, "gi");
            modifiedQuote = modifiedQuote.replace(
                regex,
                `<span class="text-[#0061AF] font-semibold">$1</span>`
            );
        });
        return modifiedQuote;
    };

    return (
        <div className="flex flex-col items-center justify-center w-full ">

            <div className="relative w-full max-w-7xl overflow-hidden  h-350">

                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {graduates.map((graduate, idx) => (
                        <div key={idx} className="flex-shrink-0 w-full px-4">
                            <div
                                className="rounded-2xl p-10 w-full"
                                style={{
                                    background: `linear-gradient(90deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`,
                                }}
                            >
                                {/* Header */}
                                <div className="flex items-center space-x-4 mt-10 ml-0 md:ml-10">
                                    <div className="w-15 h-15 rounded-full bg-[#EAEAEA] flex items-center justify-center">
                                        <p className="text-[#0060AF] text-2xl">{graduate.initials}</p>
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-bold text-[#FFFFFF]">{graduate.name}</h1>
                                        <p className="text-sm text-[#FFFFFF]">{graduate.subtitle}</p>
                                    </div>
                                </div>

                                <div className="border-b border-b-[#FFFFFF] w-full max-w-[1100px] mx-auto my-4"></div>

                                {/* Body */}
                                <div className="flex flex-col md:flex-row w-full gap-4 h-auto md:h-[480px] md:w-full">
                                    {/* Left: Journey */}
                                    <div className="w-full flex flex-col justify-center px-0 gap-2 h-auto md:w-1/2 mt-10">
                                        <h1 className="text-[#FFFFFF] text-3xl lg:text-4xl mb-6 md:text-2xl">
                                            {graduate.journeyTitle}
                                        </h1>
                                        {graduate.journeyDescription.split("\n\n").map((para, idx) => (
                                            <p key={idx} className="text-[#FFFFFF] text-sm leading-relaxed">
                                                {para}
                                            </p>
                                        ))}
                                    </div>


                                    <div className="w-full mt-5 md:mt-10 bg-[#FFFFFF] flex items-center justify-center rounded-2xl lg:h-100 md:h-90 h-70 p-2 lg-w-1/2 md:w-1/2">
                                        <p
                                            className="text-[#7A7A7A] lg:text-4xl md:text-3xl text-2xl text-center leading-snug"
                                            dangerouslySetInnerHTML={{ __html: renderQuote(graduate) }}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="flex justify-end w-full gap-2 absolute right-1 mt-4 ">
                    <button
                        onClick={handlePrev}
                        className="w-14 h-14 flex items-center justify-center text-white rounded-full text-2xl hover:scale-110 transition"
                        style={{ backgroundColor: arrowColor }}
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-14 h-14 flex items-center justify-center text-white rounded-full text-2xl hover:scale-110 transition"
                        style={{ backgroundColor: arrowColor }}
                    >
                        &#8594;
                    </button>
                </div>

            </div>
        </div>
    );
};

;

export default Graduate;
    {/* Dots Indicator */}
        {/* <div className="flex justify-center mt-4 gap-2">
          {graduates.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div> */}