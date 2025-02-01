import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/images/logo-careers.svg";

const AuthLoader = () => {
    return (
        <div className='h-full w-full overflow-hidden flex flex-col justify-center items-center' >
            <div className="animate-pulse duration-500 flex items-center gap-2 cursor-pointer">
                <Image
                    src={Logo}
                    alt="logo"
                    className="h-12 md:h-auto w-auto"
                />
                <p className="bg-gradient uppercase inline-flex text-transparent bg-clip-text text-5xl font-extrabold">Careers</p>
            </div>
        </div>
    )
}

export default AuthLoader