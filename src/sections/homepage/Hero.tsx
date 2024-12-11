"use client"

import CursorYouImage from "@/assets/images/cursor-you.svg"
import DoctorImage from "@/assets/images/doctor.png"
import EnginnerImage from "@/assets/images/enginner.png"
import Button from "@/components/Button"
import Card from "@/components/Card"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  // const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  // const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
    ]);

    // leftPointerAnimate([
    //   [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
    //   [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
    //   [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: "easeInOut" }],
    // ])

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
    ])
    //   rightPointerAnimate([
    //     [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
    //     [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
    //     [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5, ease: "easeInOut" }],
    //   ])
  }, [])


  return (
    <section
      className="py-24 overflow-x-clip"
      style={{
        cursor: `url(${CursorYouImage.src}), auto`
      }}
    >
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-60 top-16 hidden lg:block"
        >
          <Card
            image={DoctorImage}
            title="Doctor"
            description="Compassionate, skilled, dedicated, knowledgeable, empathetic."
            className="scale-75 py-3 px-6"
            imageClassName="w-[85%]"
          />
        </motion.div>
        {/* <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer
            name="Abhishek"
          />
        </motion.div> */}
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          drag
          className="absolute -right-72 -top-16 hidden lg:block"
        >
          <Card
            image={EnginnerImage}
            title="Engineer"
            description="Innovative, problem-solver, analytical, detail-oriented, collaborative."
          />
        </motion.div>
        {/* <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 100, x: 275 }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer
            name="Adarsh"
            color="red"
          />
        </motion.div> */}
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ Guiding You to a Future You Love
          </div>
        </div>
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6"
        >Navigate Your Career Path with Confidence</h1>
        <p className="text-center text-xl text-white/50 mt-8 mx-auto max-w-2xl">Discover the career that&apos;s right for you. Personalized guidance at your fingertips.</p>
        <div className="w-fit mt-8 mx-auto">
          <Button
            variant="primary"
            type="submit"
            className="whitespace-nowrap lg:w-56"
            size="sm"
          >Get Started</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero