import Image from "next/image";

interface SmallCardInfoProps {
  text: string;
  iconSrc?: string;
  alt: string;
}

export default function SmallCardInfo({
  text,
  iconSrc,
  alt,
}: SmallCardInfoProps) {
  return (
    <div className="w-full max-w-[400px] h-auto mx-auto flex gap-[10px] items-center pl-[15px] py-[15px] text-secondary-color border-[var(--objects-border)] border-[1px] border-solid rounded-[8px] bg-[var(--objects-background)] hover:bg-[var(--objects-background-hover)] cursor-pointer text-sm md:text-[15px] transform  transition-all duration-300 ease-in-out">
      {iconSrc && <Image src={iconSrc} alt={alt} width={18} height={18} />}
      {text}
    </div>
  );
}
