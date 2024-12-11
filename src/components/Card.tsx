import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

const Card = ({ title, description, image, className, imageClassName }: {
    title: string;
    description: string;
    className?: string;
    imageClassName?: string;
    image: StaticImageData
}) => {
    return (
        <div className={twMerge(
            "bg-neutral-900 border max-w-[440px] max-h-[592px]  border-white/10 p-6 rounded-lg",
            className
        )}>
            <div className=" flex flex-col items-center">
                <Image
                    src={image}
                    alt={title}
                    className={twMerge(
                        "pointer-events-none",
                        imageClassName
                    )}
                />
                <p className="text-white text-4xl font-bold uppercase">{title}</p>
                <p className="text-lg mt-2 text-center text-white/70">{description}</p>
            </div>
        </div>
    )
}

export default Card