import Image from "next/image";
import { menuItems, socialItems } from "@/utils/data";

interface SubmenuMobileProps {
  isOpen: boolean;
}

export default function SubmenuMobile({ isOpen }: SubmenuMobileProps) {
  return (
    <div
      className={`absolute w-full h-screen bg-transparent backdrop-blur-sm ${
        isOpen ? "flex" : "hidden"
      } `}
    >
      <div className="flex w-full h-[300px] bg-background flex-col justify-center items-center gap-[20px] border-b-[1px] border-[var(--objects-border)]">
        <nav className="flex flex-col items-center gap-[5px]">
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
        <div className="flex items-center gap-[10px]">
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
      </div>
    </div>
  );
}
