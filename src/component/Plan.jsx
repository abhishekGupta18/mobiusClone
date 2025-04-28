
import Group121 from "../assets/Group121.png"
import Group122 from "../assets/Group122.png"
import Group123 from "../assets/Group123.png"
import Group124 from "../assets/Group124.png"
export const Plan = () => {
    return <div className="flex flex-col  my-16 gap-16">
        <h3 className="ml-32 text-[40px] font-medium text-[#0649E7] ">How we work?</h3>
        <div className="flex justify-center gap-16 ">
            <img src={Group124} alt="" srcset="" className="w-[260px] h-[160px]" />
            <img src={Group123} alt="" srcset="" />
            <img src={Group121} alt="" srcset="" />
            <img src={Group122} alt="" srcset="" />
        </div>
    </div>
}