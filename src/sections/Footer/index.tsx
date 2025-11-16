import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="relative bg-white box-border caret-transparent border-gray-200 px-8 py-16 scroll-mt-16 border-t border-solid">
      <div className="absolute bg-[url('https://c.animaapp.com/mhrniknngOuVcs/img/ai_5.png')] bg-cover box-border caret-transparent h-32 opacity-10 bg-[position:50%_top] bottom-0 inset-x-0"></div>
      <FooterContent />
    </footer>
  );
};
