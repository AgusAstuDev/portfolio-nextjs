import TitleWithUnderline from "../common/TitleWithUnderline";
import SectionWrapper from "../common/SectionWrapper";

import Image from "next/image";

export default function AboutMe() {
  return (
    <SectionWrapper>
      <TitleWithUnderline
        titleText="Sobre mí"
        subtitleText="Conoce más sobre mí y mi trayectoria profesional."
      />
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-start gap-[20px]">
        <div className="w-full h-auto flex flex-col justify-center items-center">
          <div className="relative w-full max-w-[250px] h-auto sm:w-80 rounded-full overflow-hidden border-[2px] border-[var(--objects-border)]">
            <Image
              src={"/images/foto_perfil_1.jpg"}
              alt="Image profile"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full h-[200px] flex flex-col gap-[20px] my-[20px]">
          <div>
            <h3 className="leading-[26px] text-balance text-xl md:text-2xl lg:text-3xl font-semibold text-secondary-color">
              Desarrollador web & Estudiante de Ing. en Sistemas
            </h3>
          </div>
          <div>{/* SECCION DESCRIPCION */}</div>
          <div>{/* SECCION CARDS INFO  */}</div>
        </div>
      </div>
    </SectionWrapper>
  );
}
