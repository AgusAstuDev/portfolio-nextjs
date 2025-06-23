// src/data/headerData.ts
export const menuItems = [
  { text: "Sobre mí", href: "#sobre-mi" },
  { text: "Experiencia", href: "#experiencia" },
  { text: "Habilidades", href: "#habilidades" },
  { text: "Contacto", href: "#contacto" },
  { text: "Resúmen", href: "#resumen" },
] as const;

export const socialItems = [
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
] as const;
