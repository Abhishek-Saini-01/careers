import Logo from "@/assets/images/logo-careers.svg";
import Button from "@/components/Button";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";


const LoginPage = () => {
    return (
        <div>
            <div className="bg-sky-100 flex justify-center items-center h-screen">
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                <div className="w-full h-full flex items-center justify-center relative lg:w-1/2">
                    <SignIn />
                </div>
            </div>
        </div>
    )
}

export default LoginPage