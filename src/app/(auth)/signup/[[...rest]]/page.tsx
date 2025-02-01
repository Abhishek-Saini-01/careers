import Logo from "@/assets/images/logo-careers.svg";
import Button from "@/components/Button";
import { SignIn, SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";


const SignUpPage = () => {
    return (
        <div>
            <div className="bg-sky-100 flex justify-center items-center h-screen">
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                <div className="h-full flex items-center justify-center w-full lg:w-1/2">
                    <SignUp />
                </div>
            </div>
        </div>
    )
}

export default SignUpPage