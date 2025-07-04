"use client";
import Image from "next/image";
import { useState } from "react";
import SubmenuMobile from "./SubmenuMobile";
import { menuItems, socialItems } from "@/utils/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`w-full h-[54px] fixed top-0 z-50 ${
        isMenuOpen
          ? "bg-background border-none"
          : "bg-[var(--objects-background)] backdrop-blur-xs"
      }  `}
    >
      <div className="w-full max-w-[1440px] mx-auto h-full flex items-center justify-center md:justify-between px-4 border-b-[2px] border-[var(--objects-border)] border-solid">
        <div className="flex-shrink-0">
          <a href="#" className="font-inter font-bold text-xl">
            AgusAstuDev
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-[10px]">
          {menuItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="px-2 py-2 rounded-md text-sm transition-colors relative font-semibold tracking-[0.6px] m-0"
            >
              {item.text}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-[10px]">
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
        <div className="md:hidden absolute left-0 translate-x-[15px] flex items-center">
          <button
            className="p-2 rounded-md bg-[var(--objects-background)] hover:bg-[var(--objects-hover)] transition-colors"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <Image
                src="/menuClose_icon.svg"
                alt="Menu icon"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/menuHamb_icon.svg"
                alt="Menu icon"
                width={20}
                height={20}
              />
            )}
          </button>
        </div>
      </div>
      <SubmenuMobile isOpen={isMenuOpen} />
    </header>
  );
}
