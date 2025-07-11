export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-auto px-[20px] py-[20px] max-w-[1440px] mx-auto">
      {children}
    </section>
  );
}
