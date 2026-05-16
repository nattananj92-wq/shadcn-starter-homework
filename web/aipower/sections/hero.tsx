import Image from "next/image";
import { imgBackground } from "@/web/aipower/assets";
import DashboardPreview from "./dashboard-preview";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center w-full overflow-hidden pt-16 sm:pt-20 lg:pt-[120px] gap-10 lg:gap-16 min-h-[500px] lg:h-[777px]">
      <Image
        src={imgBackground}
        alt=""
        fill
        className="object-cover pointer-events-none"
        unoptimized
        priority
      />

      <div className="relative z-10 flex flex-col gap-6 lg:gap-10 items-center w-full px-4 sm:px-8">
        <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold text-white text-center leading-tight lg:leading-[60px]">
          AI-Power Design knit
        </h1>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <button className="flex items-center justify-center h-11 lg:h-12 px-5 rounded-lg bg-[#171717] shadow-[0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#2a2a2a] transition-colors cursor-pointer text-sm lg:text-base font-medium text-[#fafafa] whitespace-nowrap">
            Start Your Projects
          </button>
          <button className="flex items-center justify-center h-11 lg:h-12 px-5 rounded-lg border border-[#e5e5e5] shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:bg-white/10 transition-colors cursor-pointer text-sm lg:text-base font-medium text-[#fafafa] whitespace-nowrap">
            View Design Knits
          </button>
        </div>
      </div>

      <DashboardPreview />
    </section>
  );
}
