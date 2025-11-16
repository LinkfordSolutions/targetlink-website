import { IndustriesHeader } from "@/sections/IndustriesSection/components/IndustriesHeader";
import { IndustryCard } from "@/sections/IndustriesSection/components/IndustryCard";

export const IndustriesSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 box-border caret-transparent px-6 py-16 scroll-mt-16 md:px-8 md:py-20">
      <div className="box-border caret-transparent max-w-screen-xl w-full mx-auto">
        <IndustriesHeader />
        <div className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <IndustryCard
            icon="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-10.svg"
            title="Салоны красоты"
            description="Онлайн-запись, программы лояльности и автоматизация коммуникаций с клиентами"
          />
          <IndustryCard
            icon="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-11.svg"
            title="Рестораны и кафе"
            description="Системы бронирования, меню и заказов с интеграцией платежей"
          />
          <IndustryCard
            icon="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-12.svg"
            title="Фитнес-клубы"
            description="Управление абонементами, расписанием и клиентской базой"
          />
          <IndustryCard
            icon="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-13.svg"
            title="Медицинские центры"
            description="Запись к врачам, электронные карты и напоминания о приемах"
          />
          <IndustryCard
            icon="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-14.svg"
            title="Образование"
            description="Платформы для онлайн-обучения и управления учебным процессом"
          />
          <IndustryCard
            icon="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-15.svg"
            title="E-commerce"
            description="Интернет-магазины с AI-рекомендациями и автоматизацией продаж"
          />
        </div>
      </div>
    </section>
  );
};
