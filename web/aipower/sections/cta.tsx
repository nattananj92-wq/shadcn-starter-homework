export default function Cta() {
  return (
    <section className="flex flex-col items-center gap-6 lg:gap-8 px-4 sm:px-8 lg:px-16 py-16 lg:py-24 w-full bg-[#171717]">
      <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Start building with AI today
        </h2>
        <p className="text-base lg:text-xl text-white/60 leading-7">
          Join thousands of teams shipping faster with AI-Power Design Knit.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <button className="flex items-center justify-center h-12 px-6 rounded-lg bg-white text-sm font-semibold text-[#171717] hover:bg-white/90 transition-colors cursor-pointer">
          Get started free
        </button>
        <button className="flex items-center justify-center h-12 px-6 rounded-lg border border-white/20 text-sm font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer">
          Talk to sales
        </button>
      </div>
    </section>
  );
}
