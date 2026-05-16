const logos = ["Vercel", "Linear", "Loom", "Raycast", "Arc", "Figma"];

export default function LogoStrip() {
  return (
    <section className="flex flex-col items-center gap-6 px-4 sm:px-8 lg:px-16 py-10 lg:py-14 w-full border-y border-[#e5e5e5]">
      <p className="text-sm font-medium text-[#737373] text-center">
        Trusted by teams at leading companies
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
        {logos.map((name) => (
          <span key={name} className="text-base font-semibold text-[#a3a3a3]">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
