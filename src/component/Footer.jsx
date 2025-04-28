
import Group41 from "../assets/Group41.png"
import Shape from "../assets/Shape.png"
export const Footer = () => {
    return <div className="mt-8">

        <div className="mx-8 ">
            <div className="mb-8">
                <img src={Group41} alt="logo" className="mb-8" />
                <div className=" mr-300 h-px bg-black/50 "></div>
            </div>
            <div className="flex justify-between gap-16 text-[18px] text-[#0649E7]">
                <div className="flex justify-between gap-16">
                    <div>
                        <p className="underline">Address</p>
                        <p>1875 Mission St Ste 103 #450
                            <br></br> San Francisco, CA 94103</p>
                    </div>
                    <div>
                        <p className="underline" >Email</p>
                        <p>finance@mobiusengine.ai</p>
                    </div>
                    <div>
                        <p className="underline">Telephone</p>
                        <p>650-889-6026</p>
                    </div>
                </div>
                <div >
                    <p className="underline">Socials</p>
                    <div className="flex gap-1">
                        <img src={Shape} alt="linkdln" srcset="" className=" w-10 h-10  border-2 rounded-full p-2" />
                        <img src={Shape} alt="linkdln" srcset="" className=" w-10 h-10 border-2 rounded-full p-2" />
                    </div>
                </div>
            </div>

        </div>
        <div className="bg-[#0649E7] text-white flex justify-between px-8 items-center mt-16">

            <p>© 2023 Mobiusservices LLC</p>
            <div className="flex justify-between p-4 items-centern gap-4">
                <p>Terms & Conditions</p>
                <p>Terms & Conditions</p>
            </div>

        </div>
    </div>

}