import { CardContainer, CardBody, CardItem } from "./3d-card";
import { ProjectTag } from "./project-tag";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
  projectName,
  description,
  link,
  imagePath,
  tags,
}: {
  projectName: string;
  description: string;
  link: string;
  imagePath: string;
  tags: Array<string>;
}) => {
  return (
    <CardContainer>
      <CardBody
        className="
        relative group/card hover:shadow-2xl hover:shadow-indigo-600/20
        transition-all ease-in-out duration-300
        w-[84vw] md:w-[36vw] lg:w-[32vw] h-auto rounded-xl p-6 border
        hover:cursor-pointer"
      >
        <Link href={link} target="_blank">
          <CardItem className="w-full">
            <Image
              src={imagePath}
              height={900}
              width={1440}
              className="w-full object-cover rounded-lg"
              alt={projectName + " thumbnail"}
            />
          </CardItem>

          <CardItem className="header-2 mt-6">{projectName}</CardItem>

          <CardItem as="p" className="description max-w-sm mt-1">
            {description}
          </CardItem>

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((item, idx) => {
              return <ProjectTag text={item} key={item + idx} />;
            })}
          </div>
        </Link>
      </CardBody>
    </CardContainer>
  );
};
