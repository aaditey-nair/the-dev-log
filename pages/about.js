import styles from "../styles/about.module.css";
import Image from "next/image";

function About() {
  return (
    <>
      <p className="mb-4">
        Welcome stranger, to my beautiful mess of a blog. <br />
        I'm Aadi, a teen full-stack developer based out in India. I create short
        articles that capture the{" "}
        <span className={styles.highlight}>
          journey of software development
        </span>
        .
      </p>
      <div className="relative h-96 w-96 my-4">
        <Image
          className="text-left"
          src="/../public/images/aadi-picture.png"
          alt="picture of aaditey nair"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h3>
        <span className="text-primary font-black font-mono">Name:</span> Aaditey
        Nair
      </h3>
      <h3>
        <span className="text-primary font-black font-mono">
          Pronunciation:
        </span>{" "}
        AA-DE-THAY NA-YER
      </h3>
      <h3>
        <span className="text-primary font-black font-mono">
          Preferred pronouns:
        </span>{" "}
        He/Him
      </h3>
      <div className={styles.container}>
        <h3>What is this blog?</h3>
        <p>
          The name says it all:{" "}
          <span className={styles.highlight}>The Dev Log</span>. Its a log of my
          projects, learnings and mistakes. You get to see the process of
          building complex and simple projects from start to finish in small
          easy to understand chunks. No behind-the-scenes preparations. The
          actual experience of{" "}
          <span className={styles.highlight}>software development</span>.
        </p>
      </div>
      <div className={styles.container}>
        <h3>Who is this blog for?</h3>
        <p>
          This blog is for developers who are seeking inspiration for their own
          projects. I also occasional cover a feature release or a tool.
          Basically everything a developer would do every now and then. I will
          also check out new concepts or ideas made for developers.
        </p>
      </div>
      <div className={styles.container}>
        <h3>Who the heck am I?</h3>
        <p>
          I am a writer, student, child and developer. I began my coding journey
          in the summer of 2020 with web development. I then progressed to
          Python and I plan on learning C++ soon. I am interested in AI/ML and
          scripting. Outside of programming, I like to play badminton, read
          books, eat food and make coffee.
        </p>
      </div>
      <div className={styles.container}>
        <h3>How did I make this blog?</h3>
        <p>
          I guess some of you viewers will be interested in how I created 'The
          Dev Log'. The main tech stack is
        </p>
        <br />
        Frontend
        <ul>
          <li>React(UI Library)</li>
          <li>Tailwind CSS(Styling)</li>
        </ul>
        Backend
        <ul>
          <li>Node.js(Runtime)</li>
          <li>MySQL(Database)</li>
          <li>PlanetScale(Database Platform)</li>
          <li>Prisma(ORM)</li>
        </ul>
        <p>
          The main component was Next.js, a React framework developed by Vercel.
          It uses React in the frontend and Node as the backend. I used
          PlanetScale as my database platform and MySQL comes with it. I
          obviously also needed an ORM and for that I picked Prisma.
        </p>
      </div>
    </>
  );
}

export default About;
