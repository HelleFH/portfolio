import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SkillSlide {
  ID: number;
  title: string;
  description: string;
  icon: string;
}

const skillData: SkillSlide[] = [
  {
    ID: 1,
    title: "AI Enthusiast",
    description: "I work for an AI-based app and love experimenting with .NET AI packages.",
    icon: "🤖",
  },
  {
    ID: 2,
    title: "Design Lover",
    description: "I  really enjoy working with all creative tools, but Canva is my favorite. ",
    icon: "🎨",
  },
  {
    ID: 3,
    title: "MongoDB Fan",
    description: "My favorite database is MongoDB, mainly because it's perfect for the kind of small-scale apps I build.",
    icon: "🍃",
  },
  {
    ID: 4,
    title: "CSS Enthusiast",
    description: "I see the point in Bootstrap and Tailwind, but I really enjoy writing my own CSS. Still, Tailwind wins for me!",
    icon: "💅",
  },
  {
    ID: 5,
    title: "Project Manager",
    description: "I’ve taken a project management course from Microsoft and feel at home in structured development processes.",
    icon: "📋",
  },
  {
  ID: 6,
  title: "Green Tech Enthusiast",
  description: "I did my degree in Biology and Chemistry because I’m deeply interested in green technology and sustainable innovation.",
  icon: "🌱",
},
{
  ID: 7,
  title: "Sustainability Thinker",
  description: "I’m very knowledgeable about sustainability and natural cycles, and I’m always thinking about how to add a green twist to projects.",
  icon: "♻️",
},

];

const SkillCarousel: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-full bg-[rgba(var(--darkgreen),0.2)] text-black rounded-2xl shadow-lg max-w-full mx-auto px-2 py-8 md:p-8">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-4">A Few Things About Me...</h1>
      <span className="block w-16 h-1 bg-[rgba(var(--cyan))] rounded-full mx-auto mb-8"></span>

      {/* Slider */}
      <Slider {...settings}>
        {skillData.map((skill) => (
          <div key={skill.ID} className="px-2">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-2">
              {/* Icon */}
              <div className="text-6xl mt-2">{skill.icon}</div>

              {/* Skill Title */}
              <h4 className="text-[rgba(var(--dark-green))] font-bold text-lg">{skill.title}</h4>

              {/* Skill Description */}
              <p className="text-black/80 md:max-w-[800px] leading-relaxed text-lg italic">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Slick Dots Customization */}
      <style>{`
        .slick-dots {
          position: relative;
            padding-bottom:1rem;
        }
        .slick-dots li button:before {
          color: white;
          font-size: 0.75rem;
          opacity: 0.6;
        }
        .slick-dots li.slick-active button:before {
          color: #22c55e;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default SkillCarousel;
