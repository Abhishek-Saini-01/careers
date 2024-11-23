
import { Footer, Navbar } from "@/sections";
import {
    CallToAction,
    Faqs,
    Features,
    Hero,
    Integrations,
    Introduction,
    LogoTicker
} from "@/sections/homepage";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Integrations />
            <Faqs />
            <CallToAction />
            <Footer />
        </>
    )
}
