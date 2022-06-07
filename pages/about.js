import React from "react";

function About() {
  return (
    <>
      <p>
        Welcome stranger, to my beautiful mess of a blog. <br />
        I'm Aadi, a teen full-stack developer based out in India. I create short
        articles that help increase productivity.
      </p>
      <br />
      My Image
      <br />
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
      <br />
      <div>
        <h3>What is this blog?</h3>
        <p>
          The name says it all: The Dev Log. Its a log of my projects, learnings
          and mistakes. You get to see the process of building complex and
          simple projects from start to finish in small easy to understand
          chunks. No behind-the-scenes preparations. The actual journey of
          software development.
        </p>
      </div>
      <div>
        <h3>Who is this blog for?</h3>
        <p>
          This blog is more the developers amoung us who get bored by the usual
          todo lists and password managers. The ones who focus on concepts more
          than syntax because anything you learn today *can* be obsolete
          tomorrow. The only thing that stays constant is you problem-solving
          skills. That is what software development is isn't it? Problem
          Solving. That's what we are hired to do.
        </p>
      </div>
      <div>
        <h3>Who the heck am I?</h3>
        <p>
          I am a writer, student, child and developer. I began my coding journey
          in the summer of 2020 with web development. I then progressed to
          Python and I plan on learning C++ soon. I am interested in AI/ML and
          scripting. Outisde of programming I like to play badminton, read
          books, eat food and make coffee.
        </p>
      </div>
      <div>
        <h3>How did I make this blog?</h3>
        <p>
          I guess some of you viewers will be interested in how I created 'The
          Dev Log'. The main tech stack is
        </p>
        Frontend
        <ul>
          <li>React</li>
          <li>Tailwind CSS</li>
        </ul>
        Backend
        <ul>
          <li>Node.js</li>
          <li>Firebase(BaaS)</li>
          <li>Vercel(PaaS)</li>
        </ul>
        Database
        <ul>
          <li>Firestore</li>
          <li>Firebase Cloud Storage</li>
        </ul>
        <p>
          The main component was Next.js, a React framework developed by Vercel.
          It used React in the frontend and Node as the backend. Instead of
          handling all the complicated things myself, I opted to using Firebase
          as my storage and BaaS.
        </p>
      </div>
    </>
  );
}

export default About;
