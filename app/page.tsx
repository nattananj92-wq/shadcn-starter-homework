import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold text-[#0a0a0a]">AI-Power Design Knit</h1>
      <Link
        href="/aipower"
        className="flex items-center justify-center h-10 px-5 rounded-lg bg-[#171717] text-sm font-medium text-[#fafafa] hover:bg-[#2a2a2a] transition-colors"
      >
        Go to AI Power →
      </Link>
    </div>
  );
}
