
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
            <Navbar />
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
            <Hero />
            <Introduction />
            <Features />
            <Integrations />
            <Faqs />
            <CallToAction />
            <Footer />
        </>
    )
}

export default Home;