const testimonials = [
  {
    name: "Carl Caterpillar",
    role: "Growth at Cocoon & Co.",
    quote: "Using this product felt like it transformed me completely.",
    color: "bg-green-500",
    initials: "CC",
  },
  {
    name: "Wanda Wingleton",
    role: "Lepidopterist at Butterflai",
    quote: "Your expectations will fly sky high. I felt like I was soaring.",
    color: "bg-rose-400",
    initials: "WW",
  },
  {
    name: "Wanda Wingleton",
    role: "Lepidopterist at Butterflai",
    quote: "Your expectations will fly sky high. I felt like I was soaring.",
    color: "bg-rose-400",
    initials: "WW",
  },
  {
    name: "Carl Caterpillar",
    role: "Growth at Cocoon & Co.",
    quote: "Using this product felt like it transformed me completely.",
    color: "bg-green-500",
    initials: "CC",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="flex flex-col items-start px-4 sm:px-8 lg:px-[120px] py-12 lg:py-20 w-full">
      <div className="flex flex-col gap-2 lg:gap-3 pb-8 lg:pb-12 w-full">
        <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight lg:leading-[40px]">
          Testimonials
        </h2>
        <p className="text-base lg:text-xl font-medium text-black/55 leading-7">
          A little line about what&apos;s being said and who&apos;s saying it.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-5 lg:p-6 rounded-xl border border-[#e5e5e5] bg-white"
          >
            <div className="flex items-center gap-3">
              <div className={`size-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-semibold shrink-0`}>
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0a0a0a]">{t.name}</p>
                <p className="text-xs text-[#737373]">{t.role}</p>
              </div>
            </div>
            <p className="text-sm text-[#0a0a0a] leading-5">{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
