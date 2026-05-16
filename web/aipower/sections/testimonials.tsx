import Image from "next/image";

const testimonials = [
  {
    name: "Carl Caterpillar",
    role: "Growth at Cocoon & Co.",
    quote: "Using this product felt like it transformed me completely.",
    avatar: "/avatar1.svg",
  },
  {
    name: "Wanda Wingleton",
    role: "Lepidopterist at Butterflai",
    quote: "Your expectations will fly sky high. I felt like I was soaring.",
    avatar: "/avatar2.svg",
  },
  {
    name: "Wanda Wingleton",
    role: "Lepidopterist at Butterflai",
    quote: "Your expectations will fly sky high. I felt like I was soaring.",
    avatar: "/avatar2.svg",
  },
  {
    name: "Carl Caterpillar",
    role: "Growth at Cocoon & Co.",
    quote: "Using this product felt like it transformed me completely.",
    avatar: "/avatar1.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full pb-[120px] pt-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col gap-8">
        <div className="flex flex-col gap-4 items-start w-full">
          <h2 className="text-4xl font-bold text-[#020617] leading-[40px]">Testimonials</h2>
          <p className="text-xl font-medium text-[#737373] leading-7">
            A little line about what&apos;s being said and who&apos;s saying it.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 p-8 bg-white border border-[#e5e5e5] rounded-2xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="shrink-0 rounded-lg"
                />
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
