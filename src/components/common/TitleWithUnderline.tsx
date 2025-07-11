interface TitleWithUnderlineProps {
  titleText: string;
  subtitleText?: string;
}

export default function TitleWithUnderline({
  titleText,
  subtitleText,
}: TitleWithUnderlineProps) {
  return (
    <div className="w-full h-auto text-center flex flex-col items-center justify-center mb-8">
      <h2 className="leading-[22px] text-center text-balance text-3xl font-semibold text-secondary-color mb-4">
        {titleText}
      </h2>
      <div className="w-[100px] h-[2px] bg-[var(--objects-border)] mx-auto mb-6"></div>
      <p className="text-[#9aa0a6] mx-auto leading-[18px] md:leading-[20px] lg:leading-[24px] text-base lg:text-lg text-center">
        {subtitleText}
      </p>
    </div>
  );
}
