export const ContactForm = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
      <div className="box-border caret-transparent">
        <h2 className="text-4xl font-bold box-border caret-transparent leading-10 mb-4 font-sora md:text-5xl md:leading-[48px]">
          Готовы начать?
        </h2>
        <p className="text-gray-500 text-lg box-border caret-transparent leading-7 mb-8 md:text-xl">
          Свяжитесь с нами для обсуждения вашего проекта
        </p>
        <div className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6">
          <div className="items-center box-border caret-transparent flex gap-x-4 gap-y-4">
            <div className="text-white items-center bg-gradient-brand shadow-[0_8px_24px_rgba(0,102,255,0.25)] box-border caret-transparent flex h-12 justify-center shrink-0 w-12 rounded-2xl">
              <img
                src="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-17.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </div>
            <div className="box-border caret-transparent">
              <div className="text-zinc-950 text-base font-semibold box-border caret-transparent leading-6 mb-1">
                Telegram
              </div>
              <a
                href="https://t.me/targetlink_demo"
                className="text-gray-500 text-sm box-border caret-transparent leading-5 hover:text-brand-primary"
              >
                @targetlink_demo
              </a>
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex gap-x-4 gap-y-4">
            <div className="text-white items-center bg-gradient-brand shadow-[0_8px_24px_rgba(0,102,255,0.25)] box-border caret-transparent flex h-12 justify-center shrink-0 w-12 rounded-2xl">
              <img
                src="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-18.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </div>
            <div className="box-border caret-transparent">
              <div className="text-zinc-950 text-base font-semibold box-border caret-transparent leading-6 mb-1">
                Email
              </div>
              <a
                href="mailto:hello@targetlink.io"
                className="text-gray-500 text-sm box-border caret-transparent leading-5 hover:text-brand-primary"
              >
                hello@targetlink.io
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-slate-900 bg-white shadow-[0_4px_20px_rgba(0,102,255,0.08)] box-border caret-transparent border border-gray-100 overflow-hidden rounded-xl">
        <div className="box-border caret-transparent p-8">
          <form className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6">
            <div className="box-border caret-transparent">
              <label className="text-zinc-950 text-sm font-medium box-border caret-transparent block leading-5 mb-2">
                Имя
              </label>
              <input
                type="text"
                placeholder="Ваше имя"
                className="text-zinc-950 text-base bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent block h-12 leading-6 w-full px-4 py-2 rounded-2xl border-2 border-solid border-gray-200"
              />
            </div>
            <div className="box-border caret-transparent">
              <label className="text-zinc-950 text-sm font-medium box-border caret-transparent block leading-5 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="text-zinc-950 text-base bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent block h-12 leading-6 w-full px-4 py-2 rounded-2xl border-2 border-solid border-gray-200"
              />
            </div>
            <div className="box-border caret-transparent">
              <label className="text-zinc-950 text-sm font-medium box-border caret-transparent block leading-5 mb-2">
                Сообщение
              </label>
              <textarea
                placeholder="Расскажите о вашем проекте..."
                rows={4}
                className="text-zinc-950 text-base bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent block leading-6 w-full px-4 py-2 rounded-2xl border-2 border-solid border-gray-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white text-base font-bold items-center bg-gradient-brand shadow-[0_8px_24px_rgba(0,102,255,0.3)] box-border caret-transparent gap-x-2 flex h-12 justify-center leading-6 gap-y-2 text-center text-nowrap px-8 py-0 rounded-xl hover:shadow-[0_8px_32px_rgba(0,102,255,0.4)] transition-all duration-300"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
