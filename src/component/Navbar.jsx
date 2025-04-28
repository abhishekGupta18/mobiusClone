import logo from "../assets/logo.png"

export const Navbar = () => {
    return (
        <div className="text-white flex items-center justify-around py-6">

            <div>
                <img src={logo} alt="logo" className="w-[220px] h-[50px] object-contain" />
            </div>


            <div className="flex items-center gap-8">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">About Us</a>
                <a href="#" className="hover:underline">Plans</a>
                <a href="#" className="hover:underline">Testimonials</a>
                <a href="#" className="hover:underline">Privacy Policy</a>


                <select className="bg-transparent text-white focus:outline-none">
                    <option className="text-black" value="terms">Terms</option>
                    <option className="text-black" value="member">Member</option>
                    <option className="text-black" value="refer">Refer Friends</option>
                </select>
            </div>


            <div>
                <button className="w-[220px] h-[62px] bg-white text-[#022183] rounded-[32px] flex items-center justify-center font-semibold text-lg">
                    Get Started
                </button>
            </div>
        </div>
    )
}
