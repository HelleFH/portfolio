import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Hobby {
  ID: number;
  title: string;
  description: string;
  icon: string;
}

const hobbyData: Hobby[] = [
  {
    ID: 1,
    title: "Animal Lover",
    description: "I'm an animal lover and have 3 cats and a dog. I would love to live on a farm.",
    icon: "🐾",
  },
  {
    ID: 2,
    title: "Avid Reader",
    description: "I've always been a big reader, especially of classics, and secretly suspect that I might be one of the world's leading Jane Austen experts.",
    icon: "📚",
  },
  {
    ID: 3,
    title: "Active Lifestyle",
    description: "I live a very active lifestyle: I do yoga pretty much daily, cycle everywhere, play with my children, and walk my dog.",
    icon: "🚴‍♀️",
  },
  {
    ID: 4,
    title: "Dual Citizenship",
    description: "I was born in the US and have dual citizenship, so I spent a lot of my time as a freelancer there and go whenever I can.",
    icon: "🌍",
  },
  {
    ID: 5,
    title: "Outdoors Enthusiast",
    description: "I'm very outdoorsy- my perfect holiday is camping in the Big Horns and Yellowstone.",
    icon: "🏕️",
  },
];

const HobbyCarousel: React.FC = () => {
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
    <div className="w-full bg-[rgba(var(--darkgreen),0.2)] text-black rounded-2xl shadow-lg max-w-full mx-auto p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold font-[cup-cakes] text-center mb-4">My Hobbies include...</h1>
      <span className="block w-16 h-1 bg-[rgba(var(--cyan))] rounded-full mx-auto mb-8"></span>

      {/* Slider */}
      <Slider {...settings}>
        {hobbyData.map((hobby) => (
          <div key={hobby.ID} className="px-2">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-2">
              {/* Icon */}
              <div className="text-6xl">{hobby.icon}</div>

              {/* Hobby Title */}
              <h4 className="text-[rgba(var(--dark-green))] font-bold text-lg">{hobby.title}</h4>

              {/* Hobby Description */}
              <p className="text-black/80 md:max-w-[800px] leading-relaxed text-lg italic">
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Slick Dots Customization */}
      <style>{`
        .slick-dots {
          position: relative;
          margin-top: 2rem;
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

export default HobbyCarousel;
