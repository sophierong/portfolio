import Link from "next/link";
import Image from "next/image";
import { UnrollImage } from "@/components/ui/unroll-image";
import { StaggerReveal } from "@/components/ui/stagger-reveal";

export default function About() {
  return (
    <div className="padded-content mt-24 mb-16">
      {/* <h1 className="big-header w-full text-left">About</h1> */}

      <div className="mt-16 flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
        {/* <Image
          src="/profile.JPG"
          alt="Image of me at the beach"
          width={0}
          height={0}
          sizes="100vw"
          className="w-80"
          loading="eager"
        /> */}
        <UnrollImage src="/profile.JPG" alt="Me at the beach" />

        <StaggerReveal className="md:w-100 lg:w-140 paragraph grid gap-4 justify-start items-baseline">
          <h2 className="header-2">Thanks for stopping by! 💛</h2>

          <p>
            I&apos;m Sophie, a student at UC Irvine studying{" "}
            <b>computer science</b> with a specialization in <b>information</b>.
            I am highly curious about the world and the role we play in it.
          </p>

          <p>
            Currently, I lead{" "}
            <Link
              href="https://wics.ics.uci.edu/outreach"
              target="_blank"
              className="hyperlink"
            >
              Community Outreach
            </Link>{" "}
            workshops for K-12 students through WICS, the premier women-centric
            computing organization at UCI.
          </p>

          <p>
            In my free time, you may catch me doodling in my notebook, listening
            to music, playing pickleball, or writing a life manifesto ଘ(੭ˊ꒳ˋ)੭✧
          </p>

          <p className="paragraph">
            Feel free to reach out; I would love to chat with you!
          </p>

          <h2 className="header-2 mt-8">Socials</h2>
          <ul>
            <li>Email: sophie [dot] rong [at] gmail [dot] com</li>
            <li>
              Github:{" "}
              <Link
                href="https://github.com/sophierong"
                target="_blank"
                className="hyperlink"
              >
                sophierong
              </Link>
            </li>

            <li>
              LinkedIn:{" "}
              <Link
                href="https://linkedin.com/in/sophie-rong"
                target="_blank"
                className="hyperlink"
              >
                sophie-rong
              </Link>
            </li>
          </ul>
        </StaggerReveal>

        {/* <div className="md:w-100 lg:w-140 paragraph grid gap-4 justify-start items-baseline"></div> */}
      </div>
    </div>
  );
}
