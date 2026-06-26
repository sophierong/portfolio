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
      "
    >
      <h1 className="text-xl font-semibold">{title}</h1>
      <ul className="text-zinc-700 dark:text-zinc-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
