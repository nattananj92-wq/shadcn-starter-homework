import Image from "next/image";
import { imgLogo } from "@/web/aipower/assets";

const footerLinks = [
  { heading: "Platform",   links: ["Individuals", "Teams", "Admins", "Developers"] },
  { heading: "Features",   links: ["Core features", "Pro experience", "Integrations"] },
  { heading: "Learn more", links: ["Blog", "Case studies", "Customer stories", "Best practices"] },
  { heading: "Support",    links: ["Contact", "Support", "Legal"] },
];

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16 px-4 sm:px-8 lg:px-16 py-10 lg:py-14 w-full bg-[#1e293b]">
      <div className="flex flex-col gap-3 shrink-0">
        <div className="relative size-8">
          <Image src={imgLogo} alt="Logo" fill className="object-contain brightness-0 invert" unoptimized />
        </div>
        <p className="text-base font-bold text-white leading-6">
          AI-Power<br />Design knit.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-16 w-full lg:w-auto">
        {footerLinks.map((col) => (
          <div key={col.heading} className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white">{col.heading}</p>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
