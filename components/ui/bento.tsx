export const Bento = ({
  title,
  items,
}: {
  title: string;
  items: Array<string>;
}) => {
  return (
    <div
      className="
        border rounded-2xl p-8 break-words
        w-full md:w-80
        grid grid-cols-[4fr_5fr] gap-4
        md:grid-cols-1 md:gap-2
      "
    >
      <h1 className="header-3">{title}</h1>
      <ul className="paragraph">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
