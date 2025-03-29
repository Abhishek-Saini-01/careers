
const Hero = ({ title }: { title: string }) => {
    return (
        <section className="relative min-h-[50vh] w-full bg-[url('https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826')] bg-cover bg-no-repeat">
            <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
            <div className="grid min-h-[50vh] px-8">
                <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
                    <h1 className="text-5xl md:text-6xl py-10 text-white font-bold">
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Hero