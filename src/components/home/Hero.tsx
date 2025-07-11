"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";

import { ButtonLink } from "../common/ButtonLink";
import SectionWrapper from "../common/SectionWrapper";

gsap.registerPlugin(useGSAP, SplitText);

export default function Hero() {
  const helloRef = useRef(null!);
  const titleRef = useRef(null!);
  const subtitleRef = useRef(null!);
  const descRef = useRef(null!);
  const contactWrapperRef = useRef<HTMLDivElement>(null!);
  const cvWrapperRef = useRef<HTMLDivElement>(null!);
  const arrowRef = useRef(null!);

  useGSAP(() => {
    const splitHello = new SplitText(helloRef.current, { type: "lines" });
    const splitTitle = new SplitText(titleRef.current, { type: "lines" });
    const splitSubtitle = new SplitText(subtitleRef.current, { type: "lines" });
    const splitDesc = new SplitText(descRef.current, { type: "lines" });

    const allLines = [
      ...splitHello.lines,
      ...splitTitle.lines,
      ...splitSubtitle.lines,
      ...splitDesc.lines,
    ];

    gsap.from(allLines, {
      delay: 0.5,
      y: 50,
      autoAlpha: 0,
      stagger: 0.2,
      ease: "power2.out",
      duration: 1,
    });

    gsap.from([contactWrapperRef.current, cvWrapperRef.current], {
      y: 20,
      autoAlpha: 0,
      stagger: 0.15,
      delay: 1.7,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(arrowRef.current, {
      y: 15,
      autoAlpha: 0,
      duration: 1.3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      splitTitle.revert();
      splitSubtitle.revert();
      splitDesc.revert();
    };
  }, []);

  return (
    <SectionWrapper>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-[10px] md:gap-[20px]">
        <div className="w-full h-auto flex flex-col justify-center items-center gap-[20px]">
          <h2
            ref={helloRef}
            className="text-base lg:text-lg text-center font-medium text-secondary-color"
          >
            Hola, soy
          </h2>
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center"
          >
            Agustín Astudillo
          </h1>
          <h3
            ref={subtitleRef}
            className="leading-[22px] text-center text-balance text-xl md:text-2xl lg:text-3xl font-semibold text-secondary-color"
          >
            Desarrollador web & Estudiante de Ing. en Sistemas
          </h3>
          <p
            ref={descRef}
            className="max-w-[450px] md:max-w-[600px] lg:max-w-[680px] md:text-balance text-[#9aa0a6] mx-auto leading-[18px] md:leading-[20px] lg:leading-[24px] text-base lg:text-lg text-center"
          >
            Más de 2 años de experiencia desarrollando webs, priorizando la
            experiencia e interfaz de usuario.
          </p>
        </div>
        <div className="w-max h-auto flex justify-center items-center gap-[15px] md:gap-[30px] mt-[30px]">
          <div ref={contactWrapperRef}>
            <ButtonLink text="Contáctame" iconSrc="/mail_icon.svg" />
          </div>
          <div ref={cvWrapperRef}>
            <ButtonLink text="Ver mi CV" iconSrc="/download_icon.svg" />
          </div>
        </div>
        <div
          ref={arrowRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <Image
            src="/arrowHero_icon.svg"
            alt="Logo download CV"
            width={20}
            height={20}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
