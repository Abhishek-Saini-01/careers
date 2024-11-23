import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Key = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...otherprops } = props;
    return (
        <div className={twMerge("size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-neutral-950 font-medium", className)} {...otherprops}>
            {children}
        </div>
    )
}

export default Key