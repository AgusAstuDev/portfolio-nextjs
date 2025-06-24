import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-[20px] gap-[15px]">
      <h2 className="text-lg md:text-xl font-medium text-secondary-color">
        Hola, soy
      </h2>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        Astudillo Agustín
      </h1>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary-color">
        Desarrollador web & Estudiante de Ing. en Sistemas
      </h3>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg text-center">
        Con más de 2 años de experiencia desarrollando webs, con múltiples
        tecnologías y responsivas
      </p>
      <div className="w-max h-auto flex justify-center items-center gap-[30px] mt-[30px]">
        <a className="w-max h-auto flex gap-[10px] justify-center items-center px-[18px] py-[10px] text-secondary-color border-[var(--objects-border)] border-[1px] border-solid rounded-full bg-[var(--objects-background)]">
          <Image
            src="/mail_icon.svg"
            alt="Logo contact"
            width={20}
            height={20}
          />
          Contáctame
        </a>
        <a className="w-max h-auto flex gap-[10px] justify-center items-center px-[18px] py-[10px] text-secondary-color border-[var(--objects-border)] border-[1px] border-solid rounded-full bg-[var(--objects-background)]">
          <Image
            src="/download_icon.svg"
            alt="Logo download CV"
            width={20}
            height={20}
          />
          Ver mi CV
        </a>
      </div>
    </div>
  );
}
