export type CaseStudyCardProps = {
  image: string;
  category: string;
  title: string;
  description: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
};

export const CaseStudyCard = (props: CaseStudyCardProps) => {
  return (
    <div className="relative text-slate-900 bg-white shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px,rgba(0,0,0,0.05)_0px_0px_0px_1px] box-border caret-transparent h-full border-gray-200 overflow-hidden rounded-[20px] border-2 border-solid hover:shadow-[rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.04)_0px_10px_10px_-5px,rgba(0,0,0,0.05)_0px_0px_0px_1px]">
      <div className="box-border caret-transparent overflow-hidden h-64">
        <img
          src={props.image}
          alt={props.title}
          className="box-border caret-transparent h-full object-cover w-full"
        />
      </div>
      <div className="box-border caret-transparent p-8">
        <div className="text-fuchsia-500 text-sm font-semibold box-border caret-transparent leading-5 mb-3">
          {props.category}
        </div>
        <h3 className="text-zinc-950 text-2xl font-bold box-border caret-transparent leading-8 mb-3 font-sora">
          {props.title}
        </h3>
        <p className="text-gray-500 text-base box-border caret-transparent leading-6 mb-6">
          {props.description}
        </p>
        <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(3,minmax(0px,1fr))] gap-y-8">
          {props.metrics.map((metric, index) => (
            <div key={index} className="box-border caret-transparent">
              <div className="text-zinc-950 text-3xl font-bold box-border caret-transparent leading-9 mb-1 font-sora">
                {metric.value}
              </div>
              <div className="text-gray-500 text-sm box-border caret-transparent leading-5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
