import Image from "next/image";
import { imgBackground, imgAvatarImage, imgAvatarImage1, imgAvatarImage2 } from "./assets";

function FieldRow({ label, placeholder, flex, w }: {
  label: string; placeholder: string; flex?: boolean; w?: string;
}) {
  return (
    <div className={`flex flex-col gap-1 ${flex ? "flex-1 min-w-0" : (w ?? "")}`}>
      <span className="text-xs font-medium text-[#0a0a0a]">{label}</span>
      <div className="flex items-center h-8 px-2.5 rounded-md border border-[#e5e5e5] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
        <span className="text-[13px] text-[#737373] truncate">{placeholder}</span>
      </div>
    </div>
  );
}

function SelectRow({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-1 flex-1 min-w-0">
      <span className="text-xs font-medium text-[#0a0a0a]">{label}</span>
      <div className="flex items-center justify-between h-8 px-2.5 rounded-md border border-[#e5e5e5] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
        <span className="text-[13px] text-[#737373]">{placeholder}</span>
        <svg className="size-3 text-[#737373] shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5l3 3 3-3" />
        </svg>
      </div>
    </div>
  );
}

function PaymentCard() {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-[10px] border border-[#e5e5e5] bg-white shadow-sm w-[240px] shrink-0">
      <div>
        <p className="text-sm font-medium text-[#0a0a0a]">Payment Method</p>
        <p className="text-xs text-[#737373] mt-0.5">All transactions are secure and encrypted</p>
      </div>
      <div className="flex flex-col gap-3">
        <FieldRow label="Name on Card" placeholder="John Doe" />
        <div className="flex gap-2">
          <FieldRow label="Card Number" placeholder="1234 1234 1234..." flex />
          <FieldRow label="CVV" placeholder="123" w="w-16" />
        </div>
        <div className="flex gap-2">
          <SelectRow label="Month" placeholder="MM" />
          <SelectRow label="Year" placeholder="YYYY" />
        </div>
      </div>
    </div>
  );
}

function InviteCard() {
  return (
    <div className="flex flex-col gap-4 w-[240px] shrink-0">
      <div className="flex flex-col items-center gap-3 p-6 rounded-[10px] border border-dashed border-[#e5e5e5] bg-white">
        <div className="flex items-center">
          {[imgAvatarImage, imgAvatarImage1, imgAvatarImage2].map((src, i) => (
            <div key={i} className="relative size-10 rounded-full border-2 border-white shadow-sm" style={{ marginLeft: i > 0 ? -8 : 0 }}>
              <Image src={src} alt="" fill className="object-cover rounded-full" unoptimized />
            </div>
          ))}
        </div>
        <p className="text-sm font-medium text-[#0a0a0a] text-center">No Team Members</p>
        <p className="text-xs text-[#737373] text-center leading-4">
          Invite your team to<br />collaborate on this project.
        </p>
        <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-[#171717] text-xs font-medium text-[#fafafa] hover:bg-[#2a2a2a] transition-colors cursor-pointer">
          <svg className="size-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M7 2v10M2 7h10" />
          </svg>
          Invite Members
        </button>
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {[
          { label: "Syncing", cls: "bg-[#171717] text-[#fafafa]" },
          { label: "Updating", cls: "bg-[#f5f5f5] text-[#0a0a0a]" },
          { label: "Loading", cls: "border border-[#e5e5e5] text-[#0a0a0a]" },
        ].map(({ label, cls }) => (
          <span key={label} className={`flex items-center gap-1 h-[22px] px-2 rounded-full text-[11px] font-medium ${cls}`}>
            <svg className="size-2.5 opacity-60" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <circle cx="5" cy="5" r="3.5" strokeDasharray="10" strokeDashoffset="3" />
            </svg>
            {label}
          </span>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <button className="size-8 rounded-full border border-[#e5e5e5] bg-white flex items-center justify-center shrink-0">
          <svg className="size-3.5 text-[#0a0a0a]" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M7 2v10M2 7h10" />
          </svg>
        </button>
        <div className="flex-1 flex items-center h-8 rounded-full border border-[#e5e5e5] bg-white px-3">
          <span className="text-[13px] text-[#737373] truncate">Send a message...</span>
        </div>
      </div>
    </div>
  );
}

function SettingsCard() {
  return (
    <div className="flex flex-col gap-3 w-[240px] shrink-0">
      <div className="flex items-center h-8 rounded-full border border-[#e5e5e5] bg-white px-3">
        <span className="text-[13px] text-[#737373] flex-1 truncate">https://</span>
        <svg className="size-3.5 text-[#737373] shrink-0" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <polygon points="7,1.5 13.5,12 0.5,12" />
        </svg>
      </div>
      <div className="flex gap-3 items-center p-3 rounded-lg border border-[#e5e5e5] bg-white">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-[#0a0a0a]">Two-factor authentication</p>
          <p className="text-[11px] text-[#737373] mt-0.5 leading-4">Verify via email or phone number.</p>
        </div>
        <button className="shrink-0 h-7 px-2.5 rounded-md bg-[#171717] text-[11px] font-medium text-[#fafafa] hover:bg-[#2a2a2a] transition-colors cursor-pointer">
          Enable
        </button>
      </div>
      <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-[#e5e5e5] bg-white">
        <svg className="size-4 text-[#0a0a0a] shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 2l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.8l-3.8 2 .7-4.3-3.1-3 4.3-.6L8 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l1.5 1.5 3-3" />
        </svg>
        <p className="flex-1 text-xs font-medium text-[#0a0a0a] truncate">Your profile has been verified.</p>
        <svg className="size-3.5 text-[#737373] shrink-0" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l4 4-4 4" />
        </svg>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 border-t border-[#e5e5e5]" />
        <span className="text-[10px] text-[#737373] whitespace-nowrap">Appearance Settings</span>
        <div className="flex-1 border-t border-[#e5e5e5]" />
      </div>
      <div>
        <p className="text-xs font-medium text-[#0a0a0a] pb-2">Compute Environment</p>
        <p className="text-[11px] text-[#737373]">Select the compute environment for your cluster.</p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center w-full overflow-hidden pt-16 sm:pt-20 lg:pt-[120px] gap-10 lg:gap-16 min-h-[500px] lg:h-[777px]">
      {/* background */}
      <Image
        src={imgBackground}
        alt=""
        fill
        className="object-cover pointer-events-none"
        unoptimized
        priority
      />

      {/* headline + CTAs */}
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

      {/* glassmorphism UI preview — visible from md up */}
      <div className="relative z-10 w-full max-w-[1029px] mx-auto px-4 sm:px-6 lg:px-0 hidden md:block">
        <div className="relative overflow-hidden rounded-[20px] h-[380px] lg:h-[430px]">
          <div className="absolute inset-0 backdrop-blur-md bg-white/20 rounded-[20px]" />
          <div className="absolute left-6 lg:left-8 top-5 lg:top-6 flex gap-6 lg:gap-8 items-start">
            <PaymentCard />
            <InviteCard />
            <SettingsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
