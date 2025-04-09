import Link from 'next/link'
import { Badge } from './ui/badge'

import { useQuery } from 'convex/react'
import Image from 'next/image'
import { api } from '../../convex/_generated/api'


const CareerCard = () => {
    const careers = useQuery(api.careers.getAllCareers);
    const truncateText = (text: string, wordLimit: number): string => {
        const words = text.split(" ");
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(" ") + "..."
            : text;
    };
    return (
        <section
            className="py-24 overflow-x-clip"
        >
            <div className="container relative">
                <div className='w-full'>
                    <h2 className="text-6xl font-medium text-center py-10 max-w-3xl mx-auto">Explore <span className="bg-gradient text-transparent bg-clip-text"> Career</span></h2>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {careers && careers.length > 0 ? careers.map((career, i) => (
                        <div key={i} className="cursor-pointer group relative flex flex-col my-6 bg-neutral-900 shadow-sm border border-white/70 rounded-lg  hover:shadow-lg transition-shadow duration-300">
                            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                                {(career.coverImage || career.introImage) ? (
                                    <Image priority className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                                        src={career.coverImage || career.introImage || ''} alt="investment-seed-round" fill />
                                ) : (
                                    <Image priority className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                                        src='https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826' alt="investment-seed-round" fill />
                                )}
                            </div>
                            <div className="p-4">
                                <Badge className='mb-2 bg-emerald-500'>{career.categoryName}</Badge>
                                <h6 className="mb-2  text-xl font-semibold">
                                    {career.title}
                                </h6>
                                <p className="text-white/70 leading-normal font-light">
                                    {truncateText(career.introduction, 25)}
                                </p>
                            </div>
                            <div className="px-4 pb-4 pt-0 mt-2">
                                <Link href={`/careers/${career._id}`} className="rounded-md bg-gradient text-white border-[#4F46E5] hover:opacity-90 py-2 px-4 border border-transparent text-center text-sm transition-all shadow-md" type="button">
                                    View Detail
                                </Link>
                            </div>
                        </div>
                    )) : (
                        <p className='w-full text-center'>No Career Found!</p>
                    )}
                </div>
                {/* <Pagination className='my-10'>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination> */}

            </div>
        </section>
    )
}

export default CareerCard