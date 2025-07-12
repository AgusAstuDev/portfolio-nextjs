import TitleWithUnderline from "../common/TitleWithUnderline";
import SectionWrapper from "../common/SectionWrapper";
import SmallCardInfo from "../common/SmallCardInfo";

import Image from "next/image";

export default function AboutMe() {
  return (
    <SectionWrapper>
      <TitleWithUnderline
        titleText="Sobre mí"
        subtitleText="Conoce más sobre mí y mi trayectoria profesional."
      />
      <div className="w-full h-auto flex flex-col lg:flex-row-reverse justify-between items-start lg:items-center gap-[20px]">
        <div className="w-full h-auto flex flex-col justify-center items-center">
          <div className="relative w-full max-w-[250px] lg:max-w-[350px] h-auto sm:w-80 rounded-full overflow-hidden border-[2px] border-[var(--objects-border)]">
            <Image
              src={"/images/foto_perfil_1.jpg"}
              alt="Image profile"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-[20px] my-[20px]">
          <div>
            <h3 className="leading-[26px] text-balance text-xl md:text-2xl lg:text-3xl font-semibold text-secondary-color">
              Desarrollador web & Estudiante de Ing. en Sistemas
            </h3>
          </div>
          <div className="w-full h-auto flex flex-col gap-[10px]">
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              labore voluptates suscipit numquam amet accusamus! Voluptas
              provident eum cumque laboriosam pariatur, possimus temporibus
              quae, dolore explicabo ad tempore quod repellendus.
            </p>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              labore voluptates suscipit numquam amet accusamus! Voluptas
              provident eum cumque laboriosam pariatur, possimus temporibus
              quae, dolore explicabo ad tempore quod repellendus.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SmallCardInfo
              text="Mendoza, Argentina"
              iconSrc="/ubi_icon.svg"
              alt="Ubication Icon"
            />
            <SmallCardInfo
              text="+2 Años de experiecia"
              iconSrc="/job_icon.svg"
              alt="Experience Icon"
            />
            <SmallCardInfo
              text="Estudiante Ing. en Sistemas"
              iconSrc="/study_icon.svg"
              alt="Study Icon"
            />
            <SmallCardInfo
              text="Disponible para proyectos"
              iconSrc="/calendar_icon.svg"
              alt="Availability Icon"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
