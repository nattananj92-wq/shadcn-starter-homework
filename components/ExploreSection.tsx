import Image from "next/image";
import {
  imgCardDark1,
  imgCardDark2,
  imgAlertDialog,
  imgAvatarGroup,
  imgDatePicker,
  imgDialog,
} from "./assets";

interface ComponentCardProps {
  bg: string;
  preview: string;
  title: string;
  count: string;
}

function ComponentCard({ bg, preview, title, count }: ComponentCardProps) {
  return (
    <div className="relative flex flex-col items-start py-8 lg:py-10 px-6 lg:px-8 rounded-3xl w-full overflow-hidden" style={{ minHeight: 320 }}>
      <Image src={bg} alt="" fill className="object-cover rounded-3xl" unoptimized />
      {/* preview card */}
      <div className="relative z-10 border border-[#e5e5e5] rounded-xl overflow-hidden isolate w-full">
        <div className="bg-[#f5f5f5] p-3">
          <div className="relative w-full overflow-hidden rounded-[6px]" style={{ aspectRatio: "259.5/145.97" }}>
            <Image src={preview} alt={title} fill className="object-cover" unoptimized />
          </div>
        </div>
        <div className="flex flex-col px-4 pt-3 pb-4">
          <p className="text-base lg:text-lg font-semibold text-white leading-7">{title}</p>
          <p className="text-sm lg:text-base font-medium text-white/80 leading-6">{count}</p>
        </div>
      </div>
    </div>
  );
}

const cards = [
  { bg: imgCardDark1, preview: imgAlertDialog,  title: "Alert Dialog",  count: "39 blocks" },
  { bg: imgCardDark2, preview: imgAvatarGroup,  title: "Avatar Group",  count: "9 blocks"  },
  { bg: imgCardDark2, preview: imgDatePicker,   title: "Date Picker",   count: "8 blocks"  },
  { bg: imgCardDark1, preview: imgDialog,       title: "Dialog",        count: "17 blocks" },
];

export default function ExploreSection() {
  return (
    <section className="flex flex-col items-start px-4 sm:px-8 lg:px-[120px] py-12 lg:py-20 w-full">
      {/* heading */}
      <div className="flex flex-col gap-3 lg:gap-4 pb-10 lg:pb-20 w-full">
        <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight lg:leading-[40px]">
          Explore the components
        </h2>
        <p className="text-base lg:text-xl font-medium text-black/55 leading-7">
          Call out a feature, benefit, or value of your site, then link to a
          page where people can learn more about it.
        </p>
      </div>

      {/* mobile/tablet: single column stack */}
      <div className="flex flex-col gap-6 w-full lg:hidden">
        {cards.map((c) => (
          <ComponentCard key={c.title} {...c} />
        ))}
      </div>

      {/* desktop: staggered 2-column */}
      <div className="hidden lg:flex justify-between gap-8 w-full px-6">
        {/* left column starts lower */}
        <div className="flex flex-col gap-8 w-[459px]" style={{ paddingTop: 36 }}>
          <ComponentCard {...cards[0]} />
          <ComponentCard {...cards[1]} />
        </div>
        {/* right column */}
        <div className="flex flex-col gap-8 w-[459px]">
          <ComponentCard {...cards[2]} />
          <ComponentCard {...cards[3]} />
        </div>
      </div>
    </section>
  );
}
