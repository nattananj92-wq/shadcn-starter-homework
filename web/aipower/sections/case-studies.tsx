const studies = [
  {
    company: "Cocoon & Co.",
    title: "How Cocoon reduced design handoff time by 60%",
    tag: "Design Systems",
  },
  {
    company: "Butterflai",
    title: "Butterflai ships 3× faster with AI-generated components",
    tag: "Productivity",
  },
  {
    company: "Rayfield",
    title: "Rayfield scaled to 200 screens without a designer",
    tag: "Scale",
  },
];

export default function CaseStudies() {
  return (
    <section className="flex flex-col items-start px-4 sm:px-8 lg:px-[120px] py-12 lg:py-20 w-full">
      <div className="flex flex-col gap-3 pb-10 lg:pb-14 w-full">
        <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
          Case Studies
        </h2>
        <p className="text-base lg:text-xl font-medium text-black/55 leading-7">
          See how teams use AI-Power Design Knit to move faster.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {studies.map((s) => (
          <div key={s.title} className="flex flex-col gap-4 p-6 rounded-2xl border border-[#e5e5e5] bg-white hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-[#737373] uppercase tracking-wide">
              {s.tag}
            </span>
            <p className="text-sm font-medium text-[#737373]">{s.company}</p>
            <p className="text-base font-semibold text-[#0a0a0a] leading-6">{s.title}</p>
            <a href="#" className="text-sm font-medium text-[#171717] hover:underline mt-auto">
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
