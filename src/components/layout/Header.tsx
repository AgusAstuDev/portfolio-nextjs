import Image from "next/image";

export default function Header() {
  const menuItems = [
    { text: "Inicio", href: "#inicio" },
    { text: "Sobre mí", href: "#sobre-mi" },
    { text: "Experiencia", href: "#experiencia" },
    { text: "Habilidades", href: "#habilidades" },
    { text: "Contacto", href: "#contacto" },
    { text: "Resúmen", href: "#resumen" },
  ];

  const socialItems = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tuperfil",
      src: "/linkedIn_icon.svg",
    },
    {
      name: "GitHub",
      href: "https://github.com/tuperfil",
      src: "/gitHub_icon.svg",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/tuperfil",
      src: "/instagram_icon.svg",
    },
  ];

  return (
    <header className="w-full h-[54px] bg-[var(--objects-background)] border-b-[2px] border-[var(--objects-border)] border-solid">
      <div className="w-full max-w-[1440px] mx-auto h-full flex items-center justify-between px-4">
        <div className="flex-shrink-0">
          <a href="#" className="font-inter font-bold text-xl">
            AgusAstuDev
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          {menuItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="px-3 py-2 rounded-md text-sm transition-colors relative font-semibold"
            >
              {item.text}
            </a>
          ))}

          <div className="hidden md:flex items-center gap-[15px]">
            {socialItems.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.src}
                  alt={`${social.name} icon`}
                  width={18}
                  height={18}
                />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
