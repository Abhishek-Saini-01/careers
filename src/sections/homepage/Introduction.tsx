"use client"
import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";


const Introduction = () => {
    const scrollTraget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTraget,
        offset: ['start end', 'end end']
    });

    const text = `Designed to guide and inspire, our platform leverages cutting-edge AI to provide personalized career recommendations, skill-building opportunities, and actionable insights tailored to your unique potential. Whether you're charting your first steps or redefining your path, we’re here to transform your ambitions into achievements. Unlock your dream career and make your mark on the world today!`;
    const words = text.split(' ');
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])
    useEffect(() => {
        wordIndex.on('change', (latest) => {
            setCurrentWord(latest)
        })
    }, [wordIndex])
    return (
        <section id="about" className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Introducing Careers</Tag>
                    </div>
                    <div className="text-3xl md:text-5xl lg:text-6xl text-center font-medium mt-10">
                        <span >Step into a future full of possibilities with Career Navigator.</span>{" "}
                        <span>
                            {words.map((word, i) => (
                                <span
                                    key={i}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        i < currentWord && "text-white"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="bg-gradient inline-flex text-transparent bg-clip-text ">That&apos;s why we built Careers.</span>
                    </div>
                </div>
                <div className="h-[110vh]" ref={scrollTraget} />
            </div>
        </section>
    )
}

export default Introduction
