"use client";
import { type IntegrationsTypes } from "@/sections/homepage/Integrations";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
const IntegrationsColumn = ({
    integrations,
    classname,
    reverse
}: {
    integrations: IntegrationsTypes
    classname?: string
    reverse?: boolean
}) => {
    return (
        <motion.div
            initial={{
                y: reverse ? "-50%" : 0
            }}
            animate={{
                y: reverse ? 0 : "-50%"
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
            className={twMerge("flex flex-col gap-4 pb-4", classname)}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {
                        integrations.map((integration) => (
                            <div
                                key={integration.name}
                                className="bg-neutral-900 border-white/10 rounded-3xl p-6"
                            >
                                <div className="flex justify-center">
                                    <Image src={integration.icon} alt={integration.name} className="size-24 object-cover rounded-full" />
                                </div>
                                <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
                                <p className="text-center text-white/50 mt-2">{integration.description}</p>
                            </div>
                        ))
                    }
                </Fragment>
            ))}
        </motion.div>
    )
}

export default IntegrationsColumn