import AnimatedSection from "../../../../components/AnimatedSection";

const Intro = () => {
  return (
    <section className="flex flex-col gap-4">
      {/* Intro Heading */}
      <div className="flex flex-col gap-2 font-semibold">
        <p className="text-lg">
          Here’s a little bit about who I am and what I do
        </p>
      </div>

      {/* Current work */}
      <AnimatedSection>
        <p>
          I currently work with a company developing an AI-based app and bring
          years of experience in technical support, troubleshooting both
          software and hardware.{" "}
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline text-cyan-600 hover:underline whitespace-break-spaces"
          >
            You can check out my CV here
          </a>
          .
        </p>
      </AnimatedSection>

      {/* Content creation & creative background */}
      <AnimatedSection>
        <p>
          My background as a freelance copywriter and translator taught me to
          craft clear, engaging content and collaborate closely with clients on
          creative projects.{" "}
          <a
            href="https://your-design-media-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline text-cyan-600 hover:underline whitespace-break-spaces"
          >
            Click here to see some examples of my design/media work
          </a>
          .
        </p>
      </AnimatedSection>

      {/* Technical focus */}
      <AnimatedSection >
        <div className="flex flex-col gap-4">
        <p>
          I later trained in web development, gaining hands-on experience with
          HTML, CSS, JavaScript, and React.{" "}
          <a
            href="/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline text-cyan-600 hover:underline whitespace-break-spaces"
          >
            You can see some of my school and hobby projects here
          </a>
          . I enjoy combining technical and creative skills to build accessible,
          user-friendly web experiences.
        </p>

        <p>I live in Christianshavn, Copenhagen, with my family.</p>
        </div>
      </AnimatedSection>

      {/* Background summary */}
      <AnimatedSection>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 font-semibold">
            <p className="text-lg">My Background</p>
          </div>

          <p>
            While studying for a master’s degree at DTU (the Danish Technical
            University), I worked extensively with Python and GIS tools. That
            experience deepened my problem-solving mindset and confirmed my
            passion for frontend development.
          </p>

          <p>
            Today, I’m focused on growing as a full-stack developer, learning
            new technologies, and creating digital experiences that are both
            functional and enjoyable to use.
          </p>
        </div>
      </AnimatedSection>

    </section>
  );
};

export default Intro;
