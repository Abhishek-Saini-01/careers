import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Id } from "../../../convex/_generated/dataModel";

interface MoreCareersTypes {
    careers: {
        categoryName: string;
        _id: Id<"careers">;
        _creationTime: number;
        subTitle1?: string | undefined;
        description1?: string | undefined;
        subTitle2?: string | undefined;
        description2?: string | undefined;
        subTitle3?: string | undefined;
        description3?: string | undefined;
        categoryId: Id<"categories">;
        coverImage: string;
        introImage?: string | undefined;
        introduction: string;
        title: string;
    }[]
}

const MoreCareers = ({ careers }: MoreCareersTypes) => {
    return (
        <section className="py-24 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
                    {/* Left Content */}
                    <div className="w-full flex justify-between flex-col lg:w-2/5">
                        <div className="block lg:text-left text-center">
                            <h2 className="text-4xl font-bold text-white leading-[3.25rem] mb-5">
                                Our latest <span className="text-indigo-600">Careers</span>
                            </h2>
                            <p className="text-gray-400 mb-10 max-lg:max-w-xl max-lg:mx-auto">
                                Welcome to our careers section, where knowledge meets inspiration. Explore insightful details,
                                expert tips, and the latest trends in our field.
                            </p>

                        </div>
                        {/* Slider Controls */}
                        <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
                            <button
                                id="slider-button-left"
                                className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-11! h-11! transition-all duration-500 rounded-full hover:bg-indigo-600"
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
                                className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
                            >
                                <svg
                                    className="h-6 w-6 text-indigo-600 group-hover:text-white"
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

                    {/* Right Content */}
                    <div className="w-full lg:w-3/5">
                        {/* Slider Wrapper */}
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={28}
                            loop={true}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            modules={[Navigation, Pagination]}
                            // pagination={{ clickable: true }}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 20 },
                                568: { slidesPerView: 2, spaceBetween: 28 },
                                768: { slidesPerView: 2, spaceBetween: 28 },
                                1024: { slidesPerView: 2, spaceBetween: 32 },
                            }}
                        >
                            {/* Slide Items */}
                            {careers.map((career, index) => (
                                <SwiperSlide key={index} className="group">
                                    <div className="flex items-center h-56 mb-9">
                                        <img
                                            src={career.coverImage}
                                            alt={`Blog ${index + 1}`}
                                            className="rounded-2xl  object-cover object-center w-full h-full transition-all duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-xl text-white font-medium leading-8 mb-4 group-hover:text-indigo-600">
                                        {career.title}
                                    </h3>
                                    <p className="text-gray-400 leading-6 transition-all duration-500 mb-8">
                                        {career.introduction}
                                    </p>
                                    <Link
                                        href={`/careers/${career._id}`}
                                        className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold"
                                    >
                                        Read more

                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoreCareers;
