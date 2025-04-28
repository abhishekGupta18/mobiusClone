
import HandshakeIcon from "../assets/Asset31.png";
import PersonIcon from "../assets/Profile1.png";
import StarIcon from "../assets/Star.png";

export const ChooseUs = () => {
    return (
        <div className=" p-8 max-w-6xl mx-auto bg-gray-50">
            <h2 className="text-[40px] font-bold text-[#022183] mb-10">Why Choose Us?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-lg border border-blue-100">
                    <div className="flex flex-col items-center md:items-start">
                        <img src={HandshakeIcon} alt="Handshake icon" className="w-12 h-12 mb-4" />
                        <h3 className="text-[#022183] font-bold text-xl mb-3">Tried, Tested, Trusted</h3>
                        <p className="text-[#022183] text-sm text-center md:text-left">
                            Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.
                        </p>
                    </div>
                </div>


                <div className="bg-white p-6 rounded-lg border border-blue-100">
                    <div className="flex flex-col items-center md:items-start">
                        <img src={PersonIcon} alt="Person icon" className="w-12 h-12 mb-4" />
                        <h3 className="text-[#022183] font-bold text-xl mb-3">Real People, Real Help</h3>
                        <p className="text-[#022183] text-sm text-center md:text-left">
                            A hands-on team that actually cares — guiding you through every twist in your career path.
                        </p>
                    </div>
                </div>


                <div className="bg-white p-6 rounded-lg border border-blue-100">
                    <div className="flex flex-col items-center md:items-start">
                        <img src={StarIcon} alt="Star icon" className="w-12 h-12 mb-4" />
                        <h3 className="text-[#022183] font-bold text-xl mb-3">Beat the Line</h3>
                        <p className="text-[#022183] text-sm text-center md:text-left">
                            We search, shortlist, and apply for you, so your name shows up first — every single day.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};
