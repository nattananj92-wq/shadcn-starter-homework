"use client";

import { useState } from "react";

const faqs = [
  { q: "What is AI-Power Design Knit?",        a: "A component library powered by AI that helps you build beautiful UIs faster using shadcn/ui and Tailwind CSS." },
  { q: "Do I need to know how to code?",        a: "Basic knowledge of React and Tailwind CSS is recommended, but our AI tools guide you through the process." },
  { q: "Is there a free plan?",                 a: "Yes — the Starter plan is completely free with access to core components and up to 5 projects." },
  { q: "Can I use this with my existing repo?", a: "Absolutely. Install via the shadcn CLI and drop components into any Next.js, Vite, or Remix project." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-start px-4 sm:px-8 lg:px-[120px] py-12 lg:py-20 w-full">
      <div className="flex flex-col gap-3 pb-10 lg:pb-14 w-full">
        <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
          Frequently asked questions
        </h2>
      </div>
      <div className="flex flex-col divide-y divide-[#e5e5e5] w-full">
        {faqs.map((faq, i) => (
          <div key={i} className="py-5">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex items-center justify-between w-full text-left gap-4"
            >
              <span className="text-base font-semibold text-[#0a0a0a]">{faq.q}</span>
              <svg
                className={`size-4 text-[#737373] shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6l4 4 4-4" />
              </svg>
            </button>
            {open === i && (
              <p className="mt-3 text-sm text-[#737373] leading-6">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
