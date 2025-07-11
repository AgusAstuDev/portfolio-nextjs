import { forwardRef } from "react";
import Image from "next/image";

type ButtonLinkProps = {
  href?: string;
  text: string;
  iconSrc?: string;
  alt?: string;
  onClick?: () => void;
};

// forwardRef permite que puedas pasar refs desde el componente padre
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ href = "#", text, iconSrc, alt = "", onClick }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        className="w-max h-auto flex gap-[10px] justify-center items-center px-[18px] py-[10px] text-secondary-color border-[var(--objects-border)] border-[1px] border-solid rounded-full bg-[var(--objects-background)] hover:bg-[var(--objects-background-hover)] cursor-pointer text-sm md:text-[15px] transform  transition-all duration-300 ease-in-out"
      >
        {iconSrc && <Image src={iconSrc} alt={alt} width={18} height={18} />}
        {text}
      </a>
    );
  }
);
