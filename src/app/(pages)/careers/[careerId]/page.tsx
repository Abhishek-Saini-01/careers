"use client"

import CareerDetail from "@/sections/careersId/CareerDetail";
import Hero from "@/sections/careersId/Hero";

import { Separator } from "@/components/ui/separator";
import MoreCareers from "@/sections/careersId/MoreCareers";
import { useQuery } from "convex/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";

interface CareerIdProps {
    params: {
        careerId: string
    }
}

const CareerIdPage = ({ params }: CareerIdProps) => {
    const careerId = params.careerId as Id<"careers">;
    const careers = useQuery(api.careers.getAllCareers);
    const career = useQuery(api.careers.getCareerById, { id: careerId });
    console.log({ career });


    if (!career) {
        return (
            <p className="text-white text-center">No Career details found...</p>
        )
    }
    return (
        <>
            <Hero title={career?.title} />
            <CareerDetail
                categoryName={career?.categoryName}
                coverImage={career?.coverImage}
                introImage={career?.introImage}
                introduction={career?.introduction}
                subTitle1={career?.subTitle1}
                description1={career?.description1}
                subTitle2={career?.subTitle2}
                description2={career?.description2}
                subTitle3={career?.subTitle3}
                description3={career?.description3}

            />
            <Separator className="container" />
            <MoreCareers
                careers={careers!}
            />
        </>
    )
}

export default CareerIdPage