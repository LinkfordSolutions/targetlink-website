import { Header } from "@/sections/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/sections/Footer";

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="bg-white box-border caret-transparent min-h-[1000px]">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};
