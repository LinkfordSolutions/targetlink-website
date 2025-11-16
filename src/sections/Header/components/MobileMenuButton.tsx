export const MobileMenuButton = () => {
  return (
    <button
      aria-label="Open menu"
      className="text-brand-dark text-sm font-medium items-center bg-transparent caret-transparent gap-x-2 flex h-10 justify-center leading-5 min-h-[auto] min-w-[auto] gap-y-2 text-center text-nowrap w-10 p-0 rounded-2xl md:hidden md:min-h-0 md:min-w-0 hover:text-brand-primary transition-colors duration-300"
    >
      <img
        src="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-1.svg"
        alt="Menu"
        className="box-border caret-transparent h-6 w-6"
      />
    </button>
  );
};
