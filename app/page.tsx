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

      <section id="projects" className="mt-10 mb-10">
        <h1 className="section-header relative text-4xl font-semibold text-center text-zinc-800 dark:text-zinc-200">
          Projects
        </h1>

        <div className="flex flex-row flex-wrap justify-center items-start gap-[2vw] font-sans mt-10 mb-10">
          <ProjectCard
            projectName="picChef"
            description="A full-stack recipe identification app powered by Gemini image recognition."
            link="https://github.com/sophie900/picChef"
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

      <section id="skills" className="mt-10 mb-10 w-full">
        <h1 className="section-header relative text-4xl font-semibold text-center text-zinc-800 dark:text-zinc-200">
          Skills
        </h1>

        <SkillsSection />
      </section>

      <section id="contact" className="mt-10 mb-10 text-center">
        <h1 className="section-header relative text-4xl font-semibold  text-zinc-800 dark:text-zinc-200">
          Let&apos;s get in touch!
        </h1>
        <p className="paragraph pt-8">
          Email:{" "}
          <Link href="mailto:sophie.rong@gmail.com" className="hyperlink">
            sophie.rong@gmail.com
          </Link>
        </p>

        <p className="paragraph">
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/sophie-rong"
            target="_blank"
            className="hyperlink"
          >
            sophie-rong
          </Link>
        </p>

        <p className="paragraph">
          GitHub:{" "}
          <Link
            href="https://www.github.com/sophie900"
            target="_blank"
            className="hyperlink"
          >
            sophie900
          </Link>
        </p>

        <p className="paragraph">
          Instagram:{" "}
          <Link
            href="https://www.instagram.com/sr_the_artist"
            target="_blank"
            className="hyperlink"
          >
            sr_the_artist
          </Link>
        </p>
      </section>
    </>
  );
}
