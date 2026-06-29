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
        border-1 border-zinc-300 dark:border-zinc-700 rounded-2xl p-8 break-words
        md:w-80 w-full
        grid grid-cols-[4fr_5fr] gap-4
        md:grid-cols-1 md:gap-2
      "
    >
      <h1 className="sub-header">{title}</h1>
      <ul className="paragraph">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
