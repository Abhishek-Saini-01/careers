import Logo from "@/assets/images/logo-careers.svg";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];


const Footer = () => {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <Image
                            src={Logo}
                            alt="logo"
                            className="h-9 md:h-auto w-auto"
                        />
                        <p className="bg-gradient uppercase inline-flex text-transparent bg-clip-text text-4xl font-extrabold">Careers</p>
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/50 text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
