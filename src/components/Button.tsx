import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const classes = cva(
    "border h-12 rounded-full px-6 font-medium", 
    {
        variants: {
            variant: {
                primary: "bg-lime-400 text-neutral-950 border-lime-400",
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
    const { variant,size, className, ...othersPropss } = props;
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