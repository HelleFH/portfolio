const Intro = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 font-semibold">
        <p className="text-lg">Here’s a little bit about who I am and what I do</p>
      </div>

      <p>
        Currently, I work with a company that has an AI-based app, and I have years of experience in technical support, troubleshooting both software and hardware.{" "}
        <a
          href="https://your-cv-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-break-spaces inline text-cyan-600 hover:underline"
        >
          You can check out my CV here
        </a>
        .
      </p>

      <p>
        I have years of experience as a freelance copywriter and translator and am very comfortable with content creation, both text and media.{" "}
        <a
          href="https://your-design-media-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-break-spaces inline text-cyan-600 hover:underline"
        >
          Click here to see some examples of my design/media work
        </a>
        .
      </p>

      <p>
        I studied web development, where I received thorough training in HTML, JavaScript, and CSS.{" "}
        <a
          href="https://your-webdev-work-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-break-spaces inline text-cyan-600 hover:underline"
        >
          You can see some of my school and hobby work here
        </a>
        . I have experience with various frameworks, but my main focus has been React. I’m comfortable working across the full stack and adapting to new technologies as needed.
      </p>

      <p>I live in Christianshavn in Copenhagen with my family.</p>
    </section>
  );
};

export default Intro;
