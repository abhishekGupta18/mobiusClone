import RectangleBg from "../assets/Rectangle-bg.png"
import { Navbar } from "./Navbar"

export const Home = () => {
    return (
        <div className="w-full h-[860px] bg-cover bg-center" style={{ backgroundImage: `url(${RectangleBg})` }}>
            <Navbar />

        </div>
    )
}
