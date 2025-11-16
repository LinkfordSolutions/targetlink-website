export const DesktopNav = () => {
  return (
    <nav
      aria-label="Main"
      className="relative items-center box-border caret-transparent hidden basis-[0%] grow justify-center max-w-max min-h-0 min-w-0 z-10 md:flex md:min-h-[auto] md:min-w-[auto]"
    >
      <div className="relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <ul className="items-center box-border caret-transparent gap-x-8 flex basis-[0%] grow justify-center list-none gap-y-8 pl-0">
          <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            <a className="text-brand-dark box-border caret-transparent hover:text-brand-primary transition-colors duration-300">
              Продукты
            </a>
          </li>
          <li className="box-border caret-transparent min-h-0 min-w-0 ml-1 md:min-h-[auto] md:min-w-[auto]">
            <a className="text-blue-950 box-border caret-transparent hover:text-fuchsia-500">
              Решения
            </a>
          </li>
          <li className="box-border caret-transparent min-h-0 min-w-0 ml-1 md:min-h-[auto] md:min-w-[auto]">
            <a className="text-blue-950 box-border caret-transparent hover:text-fuchsia-500">
              AI
            </a>
          </li>
          <li className="box-border caret-transparent min-h-0 min-w-0 ml-1 md:min-h-[auto] md:min-w-[auto]">
            <a className="text-blue-950 box-border caret-transparent hover:text-fuchsia-500">
              Сотрудничество
            </a>
          </li>
          <li className="box-border caret-transparent min-h-0 min-w-0 ml-1 md:min-h-[auto] md:min-w-[auto]">
            <a className="text-blue-950 box-border caret-transparent hover:text-fuchsia-500">
              Кейсы
            </a>
          </li>
          <li className="box-border caret-transparent min-h-0 min-w-0 ml-1 md:min-h-[auto] md:min-w-[auto]">
            <a className="text-blue-950 box-border caret-transparent hover:text-fuchsia-500">
              Контакты
            </a>
          </li>
        </ul>
      </div>
      <div className="absolute box-border caret-transparent flex justify-center left-0 top-full"></div>
    </nav>
  );
};
