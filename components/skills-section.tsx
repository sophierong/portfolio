import { Bento } from "./ui/bento";

const SkillsSection = () => {
  return (
    <div className="items-stretch justify-center flex flex-col md:flex-row gap-4 mt-10">
      <Bento
        title="Languages"
        items={["Python", "SQL", "JavaScript/TypeScript", "HTML/CSS", "Java"]}
      ></Bento>

      <Bento
        title="Libraries & Frameworks"
        items={["React", "Next.js", "FastAPI", "Express.js", "Tailwind CSS", "numpy", "pandas", "scikit-learn"]}
      ></Bento>

      <Bento
        title="Software"
        items={[
          "Git",
          "PostgreSQL",
          "MySQL",
          "Figma",
          "Adobe Creative Suite",
        ]}
      ></Bento>
    </div>
  );
};

export default SkillsSection;
