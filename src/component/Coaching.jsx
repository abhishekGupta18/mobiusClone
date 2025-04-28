import Group137 from "../assets/Group137.png";
import Group144 from "../assets/Group144.png";
import Group149 from "../assets/Group149.png";

export const Coaching = () => {
    return <div className="flex flex-col  my-16 gap-16">
        <div>
            <h3 className="ml-32 text-[40px] font-medium text-[#0649E7] ">Resume Building & Coaching</h3>
            <p className="ml-32   text-[#0649E7] ">Let’s talk about where you’re headed — and how your resume can get you there.<br></br>
                <span className="font-medium">Schedule a call to get started.</span> </p>
        </div>

        <div className="flex flex-row justify-center gap-6 px-8">


            <div className="border border-[#0649E7] rounded-2xl p-6 flex flex-col w-80 relative gap-2">
                <div className="mb-2">
                    <p className="text-lg font-medium  text-[#0649E7]">Resume Rebuild</p>
                    <p className=" text-{18px}  text-[#0649E7]">Crafted for senior to VP-level professionals ready for their next big step.</p>
                </div>


                <h3 className="text-3xl font-bold text-[#0649E7] flex items-baseline mb-6">
                    $1000 <span className="text-base text-[#0649E7] font-normal">one time</span>
                </h3>
                <div className="w-full h-px bg-black/50  my-4"></div>

                <div className="flex flex-col gap-3 mb-8">
                    <img src={Group137} alt="April Promo features" />

                </div>
                <div className="mt-auto flex justify-center">
                    <button className="bg-[#0649E7] text-white px-4 py-2 rounded-full text-sm font-medium">
                        Get Started →
                    </button>
                </div>
            </div>
            <div className="border border-[#0649E7] rounded-2xl p-6 flex flex-col w-80 relative gap-2">
                <div className="mb-2">
                    <p className="text-lg font-medium  text-[#0649E7]">Interview Prep</p>
                    <p className=" text-{18px}  text-[#0649E7]">Two sessions to sharpen your story, confidence, and clarity — fast.</p>
                </div>



                <h3 className="text-3xl font-bold text-[#0649E7] flex items-baseline mb-6">
                    $500 <span className="text-base text-[#0649E7] font-normal">one time</span>
                </h3>

                <div className="w-full h-px bg-black/50  my-4"></div>

                <div className="flex flex-col gap-3 mb-8">
                    <img src={Group144} alt="April Promo features" />

                </div>
                <div className="mt-auto flex justify-center">
                    <button className="bg-[#0649E7] text-white px-4 py-2 rounded-full text-sm font-medium">
                        Get Started →
                    </button>
                </div>
            </div>
        </div>


        <div className="flex justify-around items-center   bg-[#0649E7] mx-32 py-32 rounded-3xl">

            <h1 className="text-3xl font-{500} uppercase text-white">
                STILL have
                <br />doubts?
            </h1>
            <h2 className="text-6xl text-white font-bold">Contact us</h2>
            <div className="w-{110px} h-{110px}">
                <img src={Group149} alt="" srcset="" />
            </div>

        </div>

    </div>
}