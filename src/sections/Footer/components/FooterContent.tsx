import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { LogoIcon } from "@/components/Logo/LogoIcon";

export const FooterContent = () => {
  return (
    <div className="relative box-border caret-transparent max-w-screen-xl w-full z-10 mx-auto">
      <div className="box-border caret-transparent gap-x-12 grid grid-cols-none gap-y-12 mb-12 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
        <div className="box-border caret-transparent">
          <div className="flex items-center gap-2 mb-4">
            <LogoIcon className="h-8 w-8" />
            <h3 className="text-2xl font-bold box-border caret-transparent leading-8 font-sora">
              TargetLink
            </h3>
          </div>
          <p className="text-gray-500 text-sm box-border caret-transparent leading-5">
            Создаем быстрые и умные цифровые решения. Ваши данные защищены в соответствии с GDPR.
          </p>
        </div>
        <FooterColumn
          title="Продукты"
          items={[
            { text: "Мини-приложения", isButton: true },
            { text: "Веб-сайты", isButton: true },
            { text: "Вертикальное ПО", isButton: true },
            { text: "AI & Автоматизация", isButton: true },
          ]}
        />
        <FooterColumn
          title="Компания"
          items={[
            { text: "О нас", isButton: true },
            { text: "Кейсы", isButton: true },
            { text: "Отрасли", isButton: true },
            { text: "Сотрудничество", isButton: true },
          ]}
        />
        <FooterColumn
          title="Контакты"
          items={[
            { text: "Telegram", href: "https://t.me/targetlink_demo" },
            {
              text: "hello@targetlink.io",
              href: "mailto://hello@targetlink.io",
              icon: "https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-25.svg",
            },
          ]}
        />
      </div>
      <div className="box-border caret-transparent text-center border-gray-200 pt-8 border-t border-solid">
        <p className="text-gray-500 text-sm box-border caret-transparent leading-5">
          Ваши данные защищены • GDPR-совместимо
        </p>
      </div>
    </div>
  );
};
