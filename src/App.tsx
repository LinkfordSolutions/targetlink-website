import { AnimaBanner } from "@/components/AnimaBanner";
import { MainContent } from "@/components/MainContent";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { CustomCursor } from "@/components/CustomCursor";
import { CursorTrail } from "@/components/CursorTrail";

export const App = () => {
  return (
    <SmoothScroll>
      <ScrollProgressBar />
      <CustomCursor />
      <CursorTrail />
      <body className="text-zinc-950 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto scroll-smooth text-start indent-[0px] normal-case visible border-separate font-inter before:accent-auto before:bg-[radial-gradient(circle_at_10%_20%,rgba(187,51,255,0.15)_0%,rgba(0,0,0,0)_50%),radial-gradient(circle_at_90%_80%,rgba(0,255,255,0.15)_0%,rgba(0,0,0,0)_50%),radial-gradient(circle,rgba(255,51,187,0.1)_0%,rgba(0,0,0,0)_50%)] before:bg-[position:0%_0%,0%_0%,0%_0%] before:bg-size-[auto,auto,auto] before:box-border before:caret-transparent before:text-zinc-950 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-none before:fixed before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:border-separate before:left-0 before:top-0 before:font-inter">
        <AnimaBanner />
        <MainContent />
      </body>
    </SmoothScroll>
  );
};
