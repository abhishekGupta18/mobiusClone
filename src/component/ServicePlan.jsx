import React from "react";
import Group137 from "../assets/Group137.png";
import Group138 from "../assets/Group138.png";
import Group71 from "../assets/Group71.png";
import Group142 from "../assets/Group142.png";

export const Serviceplan = () => {
    return (
        <div className="flex flex-col my-16 gap-16 ">
            <h3 className="ml-32 text-[40px] font-medium text-[#0649E7]">
                Job Application Service Plans
            </h3>
            <div className="flex flex-row justify-center gap-6 px-8">
                {/* April Promo Card */}
                <div className="border border-[#0649E7] rounded-2xl p-6 flex flex-col w-80 relative">
                    <p className="text-lg font-medium mb-2 text-[#0649E7]">April Promo</p>
                    <h3 className="text-3xl font-bold text-[#0649E7] flex items-baseline mb-6">
                        $35<span className="text-base text-[#0649E7] font-normal">/week</span>
                    </h3>


                    <div className="flex flex-col gap-3 mb-8">
                        <img src={Group137} alt="April Promo features" />

                    </div>
                    <div className="mt-auto flex justify-center">
                        <button className="bg-[#0649E7] text-white px-4 py-2 rounded-full text-sm font-medium">
                            Get Started →
                        </button>
                    </div>
                </div>

                {/* Starter Card */}
                <div className="border border-[#0649E7] rounded-2xl p-6 flex flex-col w-80 relative">
                    <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
                        Popular
                    </div>
                    <p className="text-lg font-medium mb-2 text-[#0649E7]">Starter</p>
                    <h3 className="text-3xl font-bold text-[#0649E7] flex items-baseline mb-6">
                        $50<span className="text-base text-[#0649E7] font-normal">/week</span>
                    </h3>
                    <div className="flex flex-col gap-3 mb-8">
                        <img src={Group138} alt="Starter features" />

                    </div>
                    <div className="mt-auto flex justify-center">
                        <button className="bg-[#0649E7] text-white px-4 py-2 rounded-full text-sm font-medium">
                            Get Started →
                        </button>
                    </div>
                </div>

                {/* Plus Card */}
                <div className="border border-[#0649E7] rounded-2xl p-6 flex flex-col w-80 relative text-[#0649E7]">
                    <p className="text-lg font-medium mb-2">Plus</p>
                    <h3 className="text-3xl font-bold text-[#0649E7] flex items-baseline mb-6">
                        $100<span className="text-base text-[#0649E7] font-normal">/week</span>
                    </h3>
                    <div className="flex flex-col gap-3 mb-8">
                        <img src={Group142} alt="Plus features" />

                    </div>
                    <div className="mt-auto flex justify-center">
                        <button className="bg-[#0649E7] text-white px-4 py-2 rounded-full text-sm font-medium">
                            Get Started →
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#0649E7] rounded-xl p-6 text-white w-full max-w-5xl flex justify-between items-start mx-auto">
                <div className="flex flex-col">
                    <h3 className="text-xl font-medium">Advance</h3>
                    <p className="text-sm opacity-90 mb-4">Top-tier support for serious job hunters:</p>

                    <div className="w-full h-px bg-white opacity-20 my-4"></div>

                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center text-[10px]">✓</div>
                            <span>Everything in Plus</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center text-[10px]">✓</div>
                            <span>Custom Resumes & Cover Letters</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center text-[10px]">✓</div>
                            <span>20 fully customized applications/week</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center text-[10px]">✓</div>
                            <span>Help with complex job searches</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center text-[10px]">✓</div>
                            <span>Access to senior resume experts, Founder & Exec Coaches</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-end">
                    <p className="text-3xl font-bold flex items-baseline">
                        $150<span className="text-base font-normal">/week</span>
                    </p>

                    <button className="mt-20 bg-white text-[#0649E7] px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        Get Started <span className="ml-1">→</span>
                    </button>
                </div>
            </div>

            <div className=" h-px bg-black opacity-20 my-4 w-full mx-center "></div>
        </div>
    );
};