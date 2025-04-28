
import { About } from "../component/About"
import { Client } from "../component/Client"
import { Coaching } from "../component/Coaching"
import { Home } from "../component/Home"
import { Plan } from "../component/Plan"
import { Serviceplan } from "../component/ServicePlan"
import { Footer } from "../component/Footer"
import { ChooseUs } from "../component/ChooseUs"
const LandingPage = () => {
    return <div>
        <Home />
        <Plan />
        <About />
        <Client />
        <ChooseUs />
        <Serviceplan />
        <Coaching />
        <Footer />
    </div>
}

export default LandingPage