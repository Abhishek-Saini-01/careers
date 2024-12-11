"use client";
import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";


const faqs = [
    {
        question: "What is Careers?",
        answer: "Careers is an AI-powered platform designed to help users explore and choose the right career path. It provides personalized career recommendations based on your skills, interests, and goals.",
    },
    {
        question: "How does Careers work?",
        answer: " By creating a profile, you can input your skills, interests, and goals. Our AI engine then analyzes this data and suggests tailored career options, along with resources to help you succeed in those careers.",
    },
    {
        question: "Is Careers free to use?",
        answer: "Yes, Careers offers free access to many features. We also provide premium services for more in-depth recommendations and personalized learning paths.",
    },
    {
        question: "How accurate are the career recommendations?",
        answer: "The recommendations are powered by advanced AI algorithms and are based on real-time data about job market trends and skills demand. While no tool is perfect, our system strives to provide highly relevant career options.",
    },
    {
        question: "Can I update my career preferences?",
        answer: "Yes, you can update your preferences, interests, and skills anytime to receive new or updated career suggestions that better match your evolving goals.",
    },
    {
        question: "Is my data safe with Career Navigator?",
        answer: "Yes, we prioritize user privacy and data security. All personal information is securely stored, and we adhere to industry-standard encryption practices to protect your data.",
    },
];


const Faqs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <section id="faqs" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got <span className="bg-gradient text-transparent bg-clip-text">answers</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border-white/10 p-6"
                        >
                            <div
                                className="flex justify-between items-center"
                                onClick={() => setSelectedIndex(faqIndex)}
                            >
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge(
                                        "feather cursor-pointer feather-plus text-[#4F46E5] flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex && "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>

                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0
                                        }}
                                        animate={{
                                            height: 'auto',
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0
                                        }}
                                        className={twMerge("mt-6 overflow-hidden")}
                                    >
                                        <p className="text-white/50">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faqs