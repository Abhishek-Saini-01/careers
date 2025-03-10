import CareerDetail from "@/sections/careersId/CareerDetail"
import Hero from "@/sections/careersId/Hero"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MoreCareers from "@/sections/careersId/MoreCareers"
import { Separator } from "@/components/ui/separator"

// interface CareerIdProps {
//     params: {
//         careerId: string
//     }
// }

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

const CareerIdPage = () => {

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