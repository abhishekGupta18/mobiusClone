import RectangleBg from "../assets/Rectangle-bg.png"
import { Navbar } from "./Navbar"
import getStarted from "../assets/Group155.png"

import bookImg from "../assets/Group45.png"

export const Home = () => {
    return (
        <div className="w-full h-[860px] bg-cover bg-center flex flex-col justify-between " style={{ backgroundImage: `url(${RectangleBg})` }}>



            <div>
                <Navbar />
            </div>

            <div className="flex justify-center mb-40 h-[500px] gap-32 " >

                <div className=" flex flex-col gap-8">
                    <h1 className="text-[80px] text-white">
                        Land job interviews <br></br> <span className="text-[#022183]">10x</span> faster
                    </h1>
                    <p className="text-white">

                        Custom-built resumes that match your goals, keywords, and <br></br> recruiter expectations.
                    </p>
                    <img src={getStarted} alt="grt started" srcset="" className="h-[70px] w-[220px]" />
                </div>

                <div className="h-full" >
                    <img src={bookImg} alt="" srcset="" />
                </div>

            </div>
        </div>
    )
}
