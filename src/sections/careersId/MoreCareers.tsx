"use client"
import Image from 'next/image';
import React from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Id } from '../../../convex/_generated/dataModel';

// Import Swiper styles (adjust path if needed)
interface Blog {

    _id: Id<"careers">; // Unique identifier for the career
    title: string; // Title of the career
    introduction: string; // Brief introduction to the career
    subTitle1?: string; // Optional subtitle 1
    description1?: string; // Optional description 1
    subTitle2?: string; // Optional subtitle 2
    description2?: string; // Optional description 2
    subTitle3?: string; // Optional subtitle 3
    description3?: string; // Optional description 3
    coverImage?: string; // Optional storage ID for the cover image
    introImage?: string; // Optional storage ID for the intro image
    categoryId: Id<"categories">; // Reference to the category ID
    categoryName: string;
    coverImageUrl: string | null;
    introImageUrl: string | null;
}

interface Props {
    careers: Blog[];
}

const MoreCareers: React.FC<Props> = ({ careers }) => {
    React.useEffect(() => {
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 28,
            centeredSlides: false,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    centeredSlides: false,
                },
                568: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                    centeredSlides: false,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                },
            },
        });

        return () => {
            swiper.destroy(); // Destroy Swiper instance on unmount to prevent memory leaks
        };
    }, []);

    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
                    <div className="w-full flex justify-between flex-col lg:w-2/5">
                        <div className="block lg:text-left text-center">
                            <h2 className="text-4xl font-bold text-white leading-[3.25rem] mb-5">
                                Our latest <span className="text-blue-600">Careers</span>
                            </h2>
                            <p className="text-white/80 mb-10 max-lg:max-w-xl max-lg:mx-auto">
                                Welcome to our careers section, where knowledge meets inspiration. Explore insightful details,
                                expert tips, and the latest trends in our field.
                            </p>
                            {/* <a
                                href="javascript:;"
                                className="cursor-pointer hidden md:flex border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto  justify-center text-white font-semibold transition-all duration-300 hover:text-neutral-900 hover:bg-gray-100"
                            >
                                View All
                            </a> */}
                        </div>
                        {/* Slider controls */}
                        <div className="hidden md:flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
                            <button
                                id="slider-button-left"
                                className="swiper-button-prev group  flex justify-center items-center border border-solid border-blue-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-blue-600"
                                data-carousel-prev
                            >
                                <svg
                                    className="h-6 w-6 text-blue-600 group-hover:text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button
                                id="slider-button-right"
                                className="swiper-button-next group flex justify-center items-center border border-solid border-blue-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-blue-600"
                                data-carousel-next
                            >
                                <svg
                                    className="h-6 w-6 text-blue-600 group-hover:text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/5">
                        {/* Slider wrapper */}
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                {careers?.map((career, index) => (
                                    <div key={index} className="swiper-slide w-full max-lg:max-w-xl lg:w-1/2 group">
                                        <div className="flex items-center mb-9">
                                            {(career.coverImageUrl || career.introImageUrl) ? (
                                                <Image src={career.introImageUrl || career.coverImageUrl || "https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"} alt="blogs tailwind section" className="rounded-2xl w-full object-cover" fill />
                                            ) : (
                                                <Image src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="blogs tailwind section" className="rounded-2xl w-full object-cover" fill />
                                            )}
                                        </div>
                                        <h3 className="text-xl text-white font-medium leading-8 mb-4 ">
                                            {career.title}
                                        </h3>
                                        <p className="text-white/60 leading-6 transition-all duration-500 mb-8">{career.introduction}</p>
                                        {/* <a href={career.} className="cursor-pointer hover:underline underline-offset-2 flex items-center gap-2 text-lg text-blue-600 font-semibold">
                                            Read more
                                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                                                    stroke="#4338CA"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex md:hidden items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
                        <button
                            id="slider-button-left"
                            className="swiper-button-prev group  flex justify-center items-center border border-solid border-blue-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-blue-600"
                            data-carousel-prev
                        >
                            <svg
                                className="h-6 w-6 text-blue-600 group-hover:text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            id="slider-button-right"
                            className="swiper-button-next group flex justify-center items-center border border-solid border-blue-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-blue-600"
                            data-carousel-next
                        >
                            <svg
                                className="h-6 w-6 text-blue-600 group-hover:text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoreCareers;
