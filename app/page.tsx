import Hero from "@/components/hero-banner";
import SkillsSection from "@/components/skills-section";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { ProjectCard } from "@/components/ui/project-card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <BackgroundGradientAnimation containerClassName="h-screen" />
      <Hero />

      <section id="projects" className="padded-content mt-10 mb-10">
        <h1 className="section-header relative text-4xl font-semibold text-center">
          Projects
        </h1>

        <div className="flex flex-row flex-wrap justify-center items-start gap-[2vw] font-sans mt-10 mb-10">
          <ProjectCard
            projectName="picChef"
            description="A full-stack recipe identification app powered by Gemini image recognition."
            link="https://github.com/sophierong/picChef"
            imagePath="/picChef.png"
            tags={[
              "React",
              "FastAPI",
              "Supabase",
              "Gemini API",
              "BeautifulSoup",
            ]}
          />

          <ProjectCard
            projectName="Portfolio Website"
            description="My personal coding & art portfolio. You're looking at it right now :)"
            link="/"
            imagePath="/Portfolio_light.png"
            tags={[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Shadcn",
              "Aceternity UI",
            ]}
          />

          <ProjectCard
            projectName="Direct Messaging Chat"
            description="A direct messaging system between users. Stores all messages on user's local file system."
            link="https://sophierong.com" // TODO: replace link
            imagePath="/DM_Chat.png"
            tags={["Python", "tkinter", "pathlib"]}
          />

          <ProjectCard
            projectName="Irvindle"
            description="A UCI-themed Wordle spinoff game. Integrates real GPA data & made in a team of 4."
            link="https://irvindle.pages.dev"
            imagePath="/Irvindle.png"
            tags={["HTML", "CSS", "JavaScript", "Anteater API"]}
          />
        </div>
      </section>

      <section id="skills" className="padded-content mt-10 mb-10 w-full">
        <h1 className="section-header relative text-4xl font-semibold text-center ">
          Skills
        </h1>

        <SkillsSection />
      </section>

      <section
        id="contact"
        className="padded-content mt-10 text-center w-full bg-olive-700 dark:bg-olive-950/50 py-20"
      >
        <h1 className="font-serif font-normal text-4xl  text-zinc-100 dark:text-zinc-300 mb-4">
          Let&apos;s get in touch!
        </h1>
        <p className="font-serif text-lg italic text-zinc-300 dark:text-zinc-400 mb-8">
          Have any ideas you want to share? Feel free to shoot me a DM!
        </p>
        <span className="flex flex-row gap-8 justify-center items-center">
          <Link href="mailto:sophie.rong@gmail.com" className="footer-link">
            Email
          </Link>

          <Link
            href="https://www.linkedin.com/in/sophie-rong"
            target="_blank"
            className="footer-link"
          >
            LinkedIn
          </Link>

          <Link
            href="https://www.github.com/sophierong"
            target="_blank"
            className="footer-link"
          >
            GitHub
          </Link>
        </span>
      </section>
    </>
  );
}
