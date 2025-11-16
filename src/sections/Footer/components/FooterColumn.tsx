export type FooterColumnProps = {
  title: string;
  titleSize?: string;
  description?: string;
  items?: Array<{
    text: string;
    href?: string;
    icon?: string;
    isButton?: boolean;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  const titleClassName =
    props.titleSize === "large"
      ? "text-2xl font-bold box-border caret-transparent leading-8 mb-4 font-sora"
      : "text-lg font-semibold box-border caret-transparent leading-7 mb-4 font-sora";

  return (
    <div className="box-border caret-transparent">
      <h3 className={titleClassName}>{props.title}</h3>
      {props.description && (
        <p className="text-gray-500 text-sm box-border caret-transparent leading-5">
          {props.description}
        </p>
      )}
      {props.items && props.items.length > 0 && (
        <ul className="box-border caret-transparent list-none pl-0">
          {props.items.map((item, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? "box-border caret-transparent"
                  : "box-border caret-transparent mt-2"
              }
            >
              {item.isButton ? (
                <button className="text-gray-500 text-sm bg-transparent caret-transparent leading-5 text-center p-0 hover:text-brand-primary transition-colors duration-300">
                  {item.text}
                </button>
              ) : item.href ? (
                <a
                  href={item.href}
                  className="text-gray-500 text-sm items-center box-border caret-transparent gap-x-2 flex leading-5 gap-y-2 hover:text-brand-primary transition-colors duration-300"
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt="Icon"
                      className="box-border caret-transparent h-4 w-4"
                    />
                  )}
                  <span className="box-border caret-transparent block">
                    {item.text}
                  </span>
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
