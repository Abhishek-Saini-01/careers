"use client"

import CursorYouImage from "@/assets/images/cursor-you.svg"
import DesignExample1 from "@/assets/images/design-example-1.png"
import DesignExample2 from "@/assets/images/design-example-2.png"
import Button from "@/components/Button"
import Pointer from "@/components/Pointer"
import { motion, useAnimate } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: "easeInOut" }],
    ])

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
    ])
    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5, ease: "easeInOut" }],
    ])
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
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            src={DesignExample1}
            alt="exapmle"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer
            name="Abhishek"
          />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          drag
          className="absolute -right-64 -top-16 hidden lg:block"
        >
          <Image
            src={DesignExample2}
            alt="exapmle"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 100, x: 275 }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer
            name="Adarsh"
            color="red"
          />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed rounde raised
          </div>
        </div>
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6"
        >Impactful design, created effortlessly</h1>
        <p className="text-center text-xl text-white/50 mt-8 mx-auto max-w-2xl">Design tools shouldn&apos;t slow you down. Layers comibes powerful fetures with an intitvw interence that keeps you in your creative flow.</p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 mx-auto max-w-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent focus:outline-none focus:bg-transparent px-4 md:flex-1 w-full md:w-auto"
          />
          <Button
            variant="primary"
            type="submit"
            className="whitespace-nowrap"
            size="sm"
          >sign up</Button>
        </form>
      </div>
    </section>
  )
}

export default Hero