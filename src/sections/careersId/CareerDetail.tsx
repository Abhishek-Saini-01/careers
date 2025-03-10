import Image from 'next/image'
import React from 'react'

const CareerDetail = () => {
    return (
        <section className="py-12 px-8">
            <div className="mx-auto max-w-screen-md">
                <h6 className="text-blue-600 text-lg">
                    #science #biology #ecology
                </h6>
                <p className="my-12 font-normal text-white/80">
                    Biology, often referred to as the &quot;science of life,&quot; is a
                    captivating and multifaceted field that delves into the intricate web
                    of living organisms and the systems that sustain them. From the
                    tiniest microorganisms to the towering giants of the animal kingdom,
                    biology offers a profound understanding of life&apos;s mechanisms,
                    evolution, and interconnectedness.
                </p>

                <h2 className="mt-8 mb-6 text-xl font-semibold text-white">
                    Exploring the Wonders of Biology
                </h2>

                <p className="my-10 font-normal text-white/80">
                    The Branches of Biology Biology encompasses a diverse array of
                    branches, each focusing on specific aspects of living organisms. Here
                    are a few key ones: a. Genetics: Genetics unravels the secrets of
                    heredity, studying how traits are passed from one generation to the
                    next and how variations occur. Recent advancements in genomics have
                    revolutionized medicine, enabling personalized treatments based on an
                    individual&apos;s genetic makeup. b. Ecology: Ecology delves into the
                    relationships between organisms and their environments. It plays a
                    pivotal role in understanding and addressing environmental challenges,
                    such as climate change and biodiversity loss.
                </p>
                <Image
                    width={768}
                    height={500}
                    src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
                    alt="post"
                    className="mb-4 h-[28rem] w-full rounded-xl object-cover"
                />
                <p className="font-normal text-white/80">
                    Photo by Jackson Sophat on{" "}
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 transition-colors hover:text-white/60"
                    >
                        Unsplash
                    </a>
                </p>

                <p className="my-12 font-normal text-white/80">
                    Thank you Anna for the invite thank you to the whole Vogue team And I
                    love you like Kanye loves Kanye.
                    <br />
                    <br />
                    The Arctic Ocean freezes every winter and much of the sea-ice then
                    thaws every summer, and that process will continue whatever happens
                    with climate change. Even if the Arctic continues to be one of the
                    fastest-warming regions of the world, it will always be plunged into
                    bitterly cold polar dark every winter. And year-by-year, for all kinds
                    of natural reasons, there&apos;s huge variety of the state of the ice.
                </p>

                <h2 className="mt-8 mb-6 text-white/80">
                    So what does the new record for the lowest level of winter ice
                    actually mean
                </h2>

                <p className="my-10 font-normal text-white/80">
                    For a start, it does not automatically follow that a record amount of
                    ice will melt this summer. More important for determining the size of
                    the annual thaw is the state of the weather as the midnight sun
                    approaches and temperatures rise. But over the more than 30 years of
                    satellite records, scientists have observed a clear pattern of
                    decline, decade-by-decade.
                    <br />
                    <br />
                    The Arctic Ocean freezes every winter and much of the sea-ice then
                    thaws every summer, and that process will continue whatever happens
                    with climate change. Even if the Arctic continues to be one of the
                    fastest-warming regions of the world, it will always be plunged into
                    bitterly cold polar dark every winter. And year-by-year, for all kinds
                    of natural reasons, there&apos;s huge variety of the state of the ice.
                    <br />
                    <br />
                    Society has put up so many boundaries, so many limitations on
                    what&apos;s right and wrong that it&apos;s almost impossible to get a
                    pure thought out.
                </p>

            </div>
        </section>
    )
}

export default CareerDetail