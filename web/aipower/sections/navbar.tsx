import Image from "next/image";
import { imgLogo } from "@/web/aipower/assets";

const navLinks = ["Document", "Products", "Pricing"];

export default function Navbar() {
  return (
    <header className="w-full bg-[#fafafa] shrink-0">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4">
        <div className="relative size-10 shrink-0">
          <Image src={imgLogo} alt="Logo" fill className="object-contain" unoptimized />
        </div>
        <nav className="flex items-center gap-1">
          {navLinks.map((label) => (
            <a
              key={label}
              href="#"
              className="hidden sm:flex items-center justify-center h-10 px-3 lg:px-4 rounded-lg text-sm font-medium text-[#020617] hover:bg-black/5 transition-colors"
            >
              {label}
            </a>
          ))}
          <button className="sm:hidden flex items-center justify-center size-10 rounded-lg text-[#020617] hover:bg-black/5 transition-colors">
            <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" d="M3 6h14M3 10h14M3 14h14" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
