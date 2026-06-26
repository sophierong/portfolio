import { Bento } from "./ui/bento";

const SkillsSection = () => {
  return (
    <div className="items-center md:items-start justify-center flex flex-col md:flex-row gap-4 mt-10">
      <Bento
        title="Languages"
        items={["Python", "JavaScript/TypeScript", "SQL", "HTML/CSS"]}
      ></Bento>

      <Bento
        title="Libraries"
        items={["React", "Next.js", "Tailwind CSS", "pandas", "skikit-learn"]}
      ></Bento>

      <Bento
        title="Software"
        items={[
          "Git",
          "Figma",
          "Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro)",
        ]}
      ></Bento>
    </div>
  );
};

export default SkillsSection;
