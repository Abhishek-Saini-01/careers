
import { Footer, Navbar } from "@/sections";
import {
    CallToAction,
    Faqs,
    Features,
    Hero,
    Integrations,
    Introduction
} from "@/sections/homepage";

const Home = () => {
    return (
        <>
            <Hero />
            <Introduction />
            <Features />
            <Integrations />
            <Faqs />
            <CallToAction />
        </>
    )
}

export default Home;