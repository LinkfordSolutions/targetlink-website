export type IndustryCardProps = {
  icon: string;
  title: string;
  description: string;
};

export const IndustryCard = (props: IndustryCardProps) => {
  return (
    <div className="relative text-slate-900 bg-white shadow-[0_4px_20px_rgba(0,102,255,0.08)] box-border caret-transparent h-full border border-gray-100 overflow-hidden rounded-xl hover:shadow-[0_8px_32px_rgba(0,212,255,0.15)] hover:border-brand-secondary/30 transition-all duration-300 group">
      <div className="box-border caret-transparent p-6">
        <div className="text-white items-center bg-gradient-brand shadow-[0_8px_24px_rgba(0,102,255,0.25)] box-border caret-transparent flex h-14 justify-center w-14 mb-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
          <img
            src={props.icon}
            alt="Icon"
            className="box-border caret-transparent h-8 w-8"
          />
        </div>
        <h3 className="text-zinc-950 text-xl font-bold box-border caret-transparent leading-snug mb-2 font-sora group-hover:text-brand-primary transition-colors duration-300">
          {props.title}
        </h3>
        <p className="text-gray-500 text-base box-border caret-transparent leading-6">
          {props.description}
        </p>
      </div>
    </div>
  );
};
