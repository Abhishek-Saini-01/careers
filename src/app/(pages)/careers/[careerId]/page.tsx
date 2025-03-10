import Button from "@/components/Button"
import { Card, CardContent } from "@/components/ui/card"
import CareerDetail from "@/sections/careersId/CareerDetail"
import Hero from "@/sections/careersId/Hero"
import { ChartBar, ChartBarIcon, PlayCircleIcon } from "lucide-react"
import Image from "next/image"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MoreCareers from "@/sections/careersId/MoreCareers"
import { Separator } from "@/components/ui/separator"
interface CareerIdProps {
    params: {
        careerId: string
    }
}



const SIMPLE_CONTENT = [
    {
        title: "Podcasts",
        icon: ChartBarIcon,
        subtitle: "An interview with Tesla founder.",
        name: "By Alexa Rossa",
    },
    {
        title: "Interviews",
        icon: PlayCircleIcon,
        subtitle: "Make $500k through small biz or raise it from family.",
        name: "By Jonathan Silvia",
    },
    {
        title: "Podcasts",
        icon: ChartBar,
        subtitle: "An interview with Tesla founder.",
        name: "By Alexa Rossa",
    },
];

const myBlogs = [
    {
        imgSrc: 'https://pagedone.io/asset/uploads/1696244059.png',
        title: 'Clever ways to invest in product to organize your portfolio',
        description: 'Discover smart investment strategies...',
        link: '/blog/clever-investments'
    },
    {
        imgSrc: 'https://pagedone.io/asset/uploads/1696244074.png',
        title: 'How to grow your profit through systematic investment with us',
        description: 'Unlock the power of systematic investment...',
        link: '/blog/grow-profit'
    },
    {
        imgSrc: 'https://pagedone.io/asset/uploads/1696244059.png',
        title: 'Clever ways to invest in product to organize your portfolio',
        description: 'Discover smart investment strategies...',
        link: '/blog/clever-investments'
    },
    {
        imgSrc: 'https://pagedone.io/asset/uploads/1696244074.png',
        title: 'How to grow your profit through systematic investment with us',
        description: 'Unlock the power of systematic investment...',
        link: '/blog/grow-profit'
    },
    {
        imgSrc: 'https://pagedone.io/asset/uploads/1696244059.png',
        title: 'Clever ways to invest in product to organize your portfolio',
        description: 'Discover smart investment strategies...',
        link: '/blog/clever-investments'
    },
    {
        imgSrc: 'https://pagedone.io/asset/uploads/1696244074.png',
        title: 'How to grow your profit through systematic investment with us',
        description: 'Unlock the power of systematic investment...',
        link: '/blog/grow-profit'
    },
    // ... more blogs
];

const CareerIdPage = ({ params }: CareerIdProps) => {

    return (
        <>
            <Hero />
            <CareerDetail />
            <Separator className="container" />
            <MoreCareers blogs={myBlogs} />
        </>
    )
}

export default CareerIdPage