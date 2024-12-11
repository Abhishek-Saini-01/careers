import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";


const features = [
    "Real-Time Career Recommendations",
    "Personalized Career Pathways",
    "Empowering Career Growth",
    "Guiding Your Career Journey"
];


const Features = () => {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-3xl mx-auto">Empowering Your Journey to a <span className="bg-gradient text-transparent bg-clip-text">Fulfilling Career</span></h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Cutting-Edge Technologies Push the boundaries with the latest tech."
                        description="Real-Time Engagement Develop interactive, dynamic solutions."
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-6xl text-center bg-gradient from-purple-400 to-pink-400 text-transparent bg-clip-text font-extrabold">Tech Careers</p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Discover exponential career growth."
                        description="Interactive Learning Hands-on experiences for real-world readiness."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">Explore Diverse <span className="relative bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                <span>Career</span>
                                <video
                                    src="/gif-incredible.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
                                />
                            </span> Opportunities
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Express Your Talent Unleash creativity and innovation."
                        description="Interactive Design Prototype and refine user-based designs."
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-6xl text-center bg-gradient from-purple-400 to-pink-400 text-transparent bg-clip-text font-extrabold">Creative Fields</p>
                        </div>
                    </FeatureCard>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map(feature => (
                        <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group">
                            <span className="bg-[#4F46E5] text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">&#10038;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>


            </div>

        </section>
    )
}

export default Features