import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...otherProps } = props;

    return (
        <div className={twMerge(
            "inline-flex border border-[#4F46E5] gap-2 bg-gradient text-transparent bg-clip-text px-3 py-1 rounded-full uppercase items-center",
            className
        )} {...otherProps}>
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    )
}

export default Tag