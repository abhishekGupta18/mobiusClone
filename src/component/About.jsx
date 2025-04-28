import AboutBG from "../assets/AboutBG.png"
import Group127 from "../assets/Group127.png"

export const About = () => {
    return (
        <div
            className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center py-64"
            style={{ backgroundImage: `url(${AboutBG})` }}
        >
            <p className="text-white text-[40px] font-medium self-start ml-64 mb-8">About Us</p>
            <div className="text-center gap-2">
                <div className="mt-6">
                    <img src={Group127} alt="review" className="w-[600px] h-auto" />
                </div>
            </div>
            <div className="flex flex-col gap-2 text-white mt-24 text-xl">
                <p>Learn more about our Board of Advisors​ ↗</p>
                <p>Follow us on our Linkedin page ↗</p>
            </div>
        </div>
    );
}
