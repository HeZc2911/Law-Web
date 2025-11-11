import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-black" >

            <nav
                className="hidden md:block md:fixed md:left-0 md:top-0 md:h-screen md:w-[50vh] md:bg-black md:text-white md:text-lg md:flex md:flex-col
                            md:items-center md:justify-center md:gap-8"
            >
                <img src="/Logo.png" alt="logo" className="w-24 h-24" />
                <a className="hover:text-[gold] transition duration-300" href="home">Inicio</a>
                <a className="hover:text-[gold] transition duration-300" href="services">Servicios</a>
                <a className="hover:text-[gold] transition duration-300" href="about">Sobre mí</a>
                <a className="hover:text-[gold] transition duration-300" href="contact">Contacto</a>
            </nav>

            <button
                className="md:hidden text-white p-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                ☰
            </button>
            {isMenuOpen && (
            <nav
                className="absolute top-16 left-0 w-full bg-black justify-center gap-4 text-white flex flex-col md:hidden"
            >
                <a className="hover:text-[gold] transition duration-300" href="home">Inicio</a>
                <a className="hover:text-[gold] transition duration-300" href="services">Servicios</a>
                <a className="hover:text-[gold] transition duration-300" href="about">Sobre mí</a>
                <a className="hover:text-[gold] transition duration-300" href="contact">Contacto</a>
            </nav>
            )}
        </header>
    )
}
