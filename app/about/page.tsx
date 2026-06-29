import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="padded-content mt-28 mb-16">
      <h1 className="section-header w-full text-center">About</h1>

      <div className="max-w-3xl mt-8 flex flex-col md:flex-row gap-8">
        <Image
          src="/profile.JPG"
          alt="Image of me at the beach"
          width={0}
          height={0}
          sizes="100vw"
          className="w-80 m-auto"
          loading="eager"
        />

        <div>
          <p className="paragraph mb-4">Thanks for stopping by!</p>

          <p className="paragraph mb-4">
            I&apos;m Sophie, a student at UC Irvine studying computer science.
            In my free time, I enjoy coding, art & design, music (playing and
            listening), table tennis, and writing.
          </p>

          <p className="paragraph mb-4">
            Previously, I{" "}
            <Link
              href="https://www.techknowhowkids.com/"
              target="_blank"
              className="hyperlink"
            >
              taught kids to build cool tech
            </Link>{" "}
            and designed promotional content for the{" "}
            <Link
              href="https://ucidesignathon.devpost.com/"
              target="_blank"
              className="hyperlink"
            >
              largest collegiate design hackathon in SoCal
            </Link>
            .
          </p>

          <p className="paragraph">
            Feel free to reach out; I would love to chat with you!
          </p>
        </div>
      </div>
    </div>
  );
}
