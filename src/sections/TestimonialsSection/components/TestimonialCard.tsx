export type TestimonialCardProps = {
  avatar: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="relative text-slate-900 bg-white shadow-[0_4px_20px_rgba(0,102,255,0.08)] box-border caret-transparent h-full border border-gray-100 overflow-hidden rounded-xl hover:shadow-[0_8px_32px_rgba(123,97,255,0.15)] transition-all duration-300">
      <div className="box-border caret-transparent p-8">
        <div className="box-border caret-transparent flex gap-x-1 mb-4">
          {Array.from({ length: props.rating }).map((_, index) => (
            <img
              key={index}
              src="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-16.svg"
              alt="Star"
              className="text-yellow-400 box-border caret-transparent h-5 w-5"
            />
          ))}
        </div>
        <p className="text-gray-500 text-base box-border caret-transparent leading-6 mb-6">
          "{props.text}"
        </p>
        <div className="items-center box-border caret-transparent flex gap-x-4 gap-y-4">
          <img
            src={props.avatar}
            alt={props.name}
            className="box-border caret-transparent h-12 rounded-full w-12"
          />
          <div className="box-border caret-transparent">
            <div className="text-zinc-950 text-base font-semibold box-border caret-transparent leading-6">
              {props.name}
            </div>
            <div className="text-gray-500 text-sm box-border caret-transparent leading-5">
              {props.role}, {props.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
