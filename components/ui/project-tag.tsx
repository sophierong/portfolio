import { CardItem } from "./3d-card";

export const ProjectTag = ({text} : {text: string}) => {
  return (
    <CardItem
      as="span"
      className="text-sm text-accent-text dark:text-accent-text-dark font-medium
        bg-accent-base dark:bg-accent-base-dark
        rounded px-2 py-1 whitespace-nowrap"
    >
        {text}
    </CardItem>
  )
}
