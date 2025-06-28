import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-[20px] gap-[10px] md:gap-[15px]">
      <h2 className="text-sm md:text-base lg:text-lg text-center font-medium text-secondary-color">
        Hola, soy
      </h2>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        Agustín Astudillo
      </h1>
      <h3 className=" leading-[22px] text-center text-balance text-xl md:text-2xl lg:text-3xl font-semibold text-secondary-color">
        Desarrollador web & Estudiante de Ing. en Sistemas
      </h3>
      <p className="max-w-[450px] md:max-w-[550px] lg:max-w-[680px] mt-1 md:mt-2 lg:mt-4 text-gray-400 mx-auto leading-[18px] md:leading-[20px] lg:leading-[24px] text-sm md:text-base lg:text-lg text-center">
        Con más de 2 años de experiencia desarrollando webs, con múltiples
        tecnologías priorizando la experiencia e interfaz de usuario.
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
