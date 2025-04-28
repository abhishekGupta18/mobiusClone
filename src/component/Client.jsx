import Group70 from "../assets/Group70.png"
import Group72 from "../assets/Group72.png"
import Group131 from "../assets/Group131.png"
export const Client = () => {

    return <div className="flex flex-col  my-16 gap-16">
        <h3 className="ml-32 text-[40px] font-medium text-[#0649E7] ">What our clients have to say</h3>
        <div className="flex justify-center gap-16 ">
            <img src={Group70} alt="" srcset="" />

        </div>
        <div className="flex justify-center gap-16 ">
            <img src={Group72} alt="" srcset="" />

        </div>
        <div className="flex justify-center gap-16 ">
            <img src={Group131} alt="" srcset="" />

        </div>
    </div>
}