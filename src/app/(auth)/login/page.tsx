import Logo from "@/assets/images/logo-careers.svg";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";


const LoginPage = () => {
    return (
        <div>
            <div className="bg-sky-100 flex justify-center items-center h-screen">
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                <div className="lg:p-32 md:p-48 sm:20 p-8 w-full relative lg:w-1/2">
                    <Link href="/" className="absolute top-2 right-5 flex items-center gap-1 text-gray-600 p-1 rounded-full border-2 border-gray-600 hover:bg-gradient hover:border-none hover:text-white transition duration-150 w-fit ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </Link>
                    <div className="flex items-center justify-center gap-2">
                        <Image
                            src={Logo}
                            alt="logo"
                            className="h-9 md:h-auto w-auto"
                        />
                        <p className="bg-gradient uppercase inline-flex text-transparent bg-clip-text text-4xl font-extrabold">Careers</p>
                    </div>
                    <h1 className="text-2xl font-semibold text-center my-4 mb-8 text-gray-950">Login</h1>
                    <form>
                        <div className="mb-4 bg-sky-100">
                            <label htmlFor="email" className="block text-gray-600">Emial</label>
                            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#4F46E5]" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-800">Password</label>
                            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#4F46E5]" />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-red-500" />
                            <label htmlFor="remember" className="text-green-900 ml-2">Remember Me</label>
                        </div>
                        <div className="mb-6 text-blue-500">
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div>
                        <Button
                            variant="primary"
                            className="w-full font-bold"
                        >Login</Button>
                    </form>
                    <div className="mt-6 text-center">
                        <div className="flex items-center gap-2 justify-center">
                            <p className="text-gray-600 text-base">Don&apos;t have an account?</p>
                            <Link href="/signup" className="hover:underline text-black">Sign up Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage