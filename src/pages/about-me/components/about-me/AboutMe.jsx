import SocialLinks from "../../../../components/SocialLinks/SocialLinks";

const AboutMe = () => {
  return (
    <section className="mx-auto max-w-6xl bg-[rgba(var(--white-color))] p-8">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-12">

        {/* Personal Info */}
        <div className="flex w-full flex-col gap-4 md:w-1/3">
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-2xl font-semibold">Contact Info</h4>
            <p>hellefruergaardh@gmail.com</p>
            <p>+45 29664077</p>
            <SocialLinks />
          </div>
        </div>

        {/* Bio Section */}
        <div className="flex w-full flex-col gap-4 md:w-2/3">
          <div className="flex flex-col gap-2 font-semibold">
            <p className="text-lg">Here’s a little bit about who I am and what I do</p>
          </div>

          <p>
            I’ve worked independently and collaborated on many different kinds of projects mainly with React. I’m comfortable with the full process of development.
          </p>

          <p>
            I studied web development at NEXT in Copenhagen, where I received thorough training in HTML, JavaScript, and CSS. I have experience with various frameworks, but my main focus has been React. I’m comfortable working across the full stack and adapting to new technologies as needed. Additionally, I hold a degree in Biology and Chemistry from the University of Southern Denmark, which has provided me with a strong background in sustainability, climate, and related fields.
          </p>

          <p>
            I have several years of experience in copywriting and translation/localization, where I’ve worked on adapting content for different languages and cultures.
          </p>

          <p>
            Currently, I work with a company that has an AI-based app, and I have years of experience in technical support, troubleshooting both software and hardware.
          </p>

          <p>
            Outside of work, I’m a very active person. I have two small kids, a dog and a cat, and I’m always curious and learning something new, whether it’s in tech or in life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
