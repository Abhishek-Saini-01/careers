"use client"

// import { useQuery } from "convex/react";
// import { api } from '../../../../convex/_generated/api';
import Hero from "@/sections/careers/Hero";
import CareerCard from "@/components/CareerCard";

const CareersPage = () => {
    // const tasks = useQuery(api.tasks.get);
    return (
        <div>
            {/* {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)} */}

            <Hero />
            <CareerCard />

        </div>
    )
}

export default CareersPage