import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-black" >
            <button
                className="md:hidden text-white p-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                ☰
            </button>
            <nav className="flex flex-col text-white">
                <img src="/Logo.png" alt="logo" className="w-16 h-16" />
                <a href="home">Inicio</a>
                <a href="services">Servicios</a>
                <a href="about">Sobre mí</a>
                <a href="contact">Contacto</a>
            </nav>

            
        </header>
    )
}
