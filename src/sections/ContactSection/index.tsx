import { ContactForm } from "@/sections/ContactSection/components/ContactForm";

export const ContactSection = () => {
  return (
    <section className="bg-white box-border caret-transparent border-gray-200 px-6 py-16 border-t border-solid md:px-8 md:py-20">
      <div className="box-border caret-transparent max-w-screen-xl w-full mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};
