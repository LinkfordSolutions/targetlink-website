import { Logo } from "@/sections/Header/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { CTAButton } from "@/components/CTAButton";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const HeaderContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full mx-auto px-8 py-4 md:max-w-screen-xl">
      <div className="items-center box-border caret-transparent flex justify-between">
        <Logo />
        <DesktopNav />
        <CTAButton />
        <MobileMenuButton />
      </div>
    </div>
  );
};
