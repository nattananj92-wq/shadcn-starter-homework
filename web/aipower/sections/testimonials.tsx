const testimonials = [
  {
    name: "Carl Caterpillar",
    role: "Growth at Cocoon & Co.",
    quote: "Using this product felt like it transformed me completely.",
    initials: "CC",
    color: "bg-amber-400",
  },
  {
    name: "Wanda Wingleton",
    role: "Lepidopterist at Butterflai",
    quote: "Your expectations will fly sky high. I felt like I was soaring.",
    initials: "WW",
    color: "bg-rose-400",
  },
  {
    name: "Wanda Wingleton",
    role: "Lepidopterist at Butterflai",
    quote: "Your expectations will fly sky high. I felt like I was soaring.",
    initials: "WW",
    color: "bg-rose-400",
  },
  {
    name: "Carl Caterpillar",
    role: "Growth at Cocoon & Co.",
    quote: "Using this product felt like it transformed me completely.",
    initials: "CC",
    color: "bg-amber-400",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full pb-[120px] pt-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-4 items-start w-full">
        <h2 className="text-4xl font-bold text-[#020617] leading-[40px]">Testimonials</h2>
        <p className="text-xl font-medium text-[#737373] leading-7">
          A little line about what&apos;s being said and who&apos;s saying it.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 items-start w-full">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col gap-6 flex-1 min-w-[320px] p-8 bg-white border border-[#e5e5e5] rounded-2xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            <div className="flex items-center gap-4 w-full">
              <div className={`flex items-center justify-center size-12 rounded-lg shrink-0 ${t.color}`}>
                <span className="text-sm font-bold text-white">{t.initials}</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-[#020617] leading-6">{t.name}</p>
                <p className="text-base font-medium text-[#737373] leading-6">{t.role}</p>
              </div>
            </div>
            <p className="text-lg font-medium text-black leading-7">{t.quote}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
