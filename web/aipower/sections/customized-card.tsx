const plans = [
  { name: "Starter",    price: "Free",   features: ["5 projects", "Basic components", "Community support"] },
  { name: "Pro",        price: "$19/mo", features: ["Unlimited projects", "All components", "Priority support", "Custom tokens"] },
  { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "SSO", "SLA", "Dedicated CSM"] },
];

export default function CustomizedCard() {
  return (
    <section className="flex flex-col items-start px-4 sm:px-8 lg:px-[120px] py-12 lg:py-20 w-full bg-[#fafafa]">
      <div className="flex flex-col gap-3 pb-10 lg:pb-14 w-full">
        <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
          Simple, transparent pricing
        </h2>
        <p className="text-base lg:text-xl font-medium text-black/55 leading-7">
          Choose the plan that fits your team.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`flex flex-col gap-5 p-6 rounded-2xl border ${i === 1 ? "border-[#171717] bg-[#171717] text-white" : "border-[#e5e5e5] bg-white"}`}
          >
            <div>
              <p className={`text-sm font-semibold ${i === 1 ? "text-white/60" : "text-[#737373]"}`}>{plan.name}</p>
              <p className={`text-3xl font-bold mt-1 ${i === 1 ? "text-white" : "text-[#0a0a0a]"}`}>{plan.price}</p>
            </div>
            <ul className="flex flex-col gap-2">
              {plan.features.map((f) => (
                <li key={f} className={`flex items-center gap-2 text-sm ${i === 1 ? "text-white/80" : "text-[#0a0a0a]"}`}>
                  <span className="size-4 rounded-full bg-current opacity-20 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button className={`mt-auto h-10 rounded-lg text-sm font-medium transition-colors ${i === 1 ? "bg-white text-[#171717] hover:bg-white/90" : "bg-[#171717] text-white hover:bg-[#2a2a2a]"}`}>
              Get started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
