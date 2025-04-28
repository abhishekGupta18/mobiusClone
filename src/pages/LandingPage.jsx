
import { About } from "../component/About"
import { Client } from "../component/Client"
import { Coaching } from "../component/Coaching"
import { Home } from "../component/Home"
import { Plan } from "../component/Plan"
import { Serviceplan } from "../component/ServicePlan"
const LandingPage = () => {
    return <div>
        <Home />
        <Plan />
        <About />
        <Client />
        <Serviceplan />
        <Coaching />
    </div>
}

export default LandingPage