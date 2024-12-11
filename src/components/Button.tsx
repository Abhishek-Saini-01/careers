import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const classes = cva(
    "border h-12 rounded-full px-6 font-medium",
    {
        variants: {
            variant: {
                primary: "bg-gradient text-white border-[#4F46E5]",
                secondary: "border-white text-white bg-transparent",
            },
            size: {
                sm: "h-10"
            }
        },
    }
)

const Button = (props: {
    variant: "primary" | "secondary";
    size?: 'sm'
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { variant, size, className, ...othersPropss } = props;
    return (
        <button className={
            classes({
                variant,
                size,
                className
            })}
            {...othersPropss}
        />
    )
}

export default Button