import Image from 'next/image';

interface CareerDetailsProps {
    categoryName: string;
    coverImageUrl?: string | null;
    introImageUrl: string | null;
    introduction: string;
    subTitle1: string | undefined;
    description1: string | undefined;
    subTitle2: string | undefined;
    description2: string | undefined;
    subTitle3: string | undefined;
    description3: string | undefined;
}

const CareerDetail = ({
    categoryName,
    coverImageUrl,
    introImageUrl,
    introduction,
    subTitle1,
    description1,
    subTitle2,
    description2,
    subTitle3,
    description3
}: CareerDetailsProps) => {
    return (
        <section className="py-12 px-8">
            <div className="mx-auto max-w-screen-md">
                <h6 className="text-blue-600 text-lg">
                    #{categoryName}
                </h6>
                <p className="my-12 font-normal text-white/80">
                    {introduction}
                </p>

                <h2 className="mt-8 mb-6 text-xl font-semibold text-white">
                    {subTitle1}
                </h2>

                <p className="my-10 font-normal text-white/80">
                    {description1}
                </p>
                {(coverImageUrl || introImageUrl) ? (
                    <Image
                        width={768}
                        height={500}
                        src={introImageUrl || coverImageUrl || "https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"}
                        alt="post"
                        priority
                        className="mb-4 h-[28rem] w-full rounded-xl object-cover"
                    />) : (<Image
                        width={768}
                        height={500}
                        src={introImageUrl || coverImageUrl || "https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"}
                        alt="post"
                        priority
                        className="mb-4 h-[28rem] w-full rounded-xl object-cover"
                    />)}

                {/* <p className="font-normal text-white/80">
                    Photo by Jackson Sophat on{" "}
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 transition-colors hover:text-white/60"
                    >
                        Unsplash
                    </a>
                </p> */}

                <h2 className="mt-8 mb-6 text-xl font-semibold text-white">
                    {subTitle2}
                </h2>

                <p className="my-10 font-normal text-white/80">
                    {description2}
                </p>

                <h2 className="mt-8 mb-6 text-white/80">
                    {subTitle3}
                </h2>

                <p className="my-10 font-normal text-white/80">
                    {description3}
                </p>

            </div>
        </section>
    )
}

export default CareerDetail