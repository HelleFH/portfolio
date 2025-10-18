import React from "react";
import EmbedCard from "./EmbedCard.tsx";
import Images from "../../../assets/images.tsx";
import AnimatedSection from "../../../components/AnimatedSection.jsx";
import { Embed } from "../../../types/embed.ts";


const embeds: Embed[] = [
  {
    id: 1,
    type: "image",
    title: "Canva Project: Landing Pages",
    src: Images.LandingPagesScreen, // responsive object
    link: "https://landing-pages-sentispec.my.canva.site/landing-pages-website/",
  },
    {
    id: 2,
    type: "video",
    title: "Canva Video",
    src: "https://www.canva.com/design/DAGoNPSR6_8/X4YFcHvhGZF_1u9Nar6qiw/watch?embed",
    link: "https://www.canva.com/design/DAGoNPSR6_8/X4YFcHvhGZF_1u9Nar6qiw/watch",
  },
  {
    id: 3,
    type: "video",
    title: "Canva Video",
    src: "https://www.canva.com/design/DAGoNanNO00/tyg_YnhUIp1aneQrBSzHZg/watch?embed",
    link: "https://www.canva.com/design/DAGoNanNO00/tyg_YnhUIp1aneQrBSzHZg/watch",
  },
  {
    id: 4,
    type: "video",
    title: "Canva Video",
    src: "https://www.canva.com/design/DAGoNp-uMc8/ix6Y0ZM14GGSpp1J0RKS7g/watch?embed",
    link: "https://www.canva.com/design/DAGoNp-uMc8/ix6Y0ZM14GGSpp1J0RKS7g/watch",
  },
  {
    id: 5,
    type: "figma",
    title: "Figma Site Design",
    src: "https://embed.figma.com/design/cZ7KGRLO5RHa1AKRYuvcGA/Spil-Site-Ny-Skabelon--Copy-?node-id=0-1&embed-host=share",
    link: "https://www.figma.com/design/cZ7KGRLO5RHa1AKRYuvcGA/Spil-Site-Ny-Skabelon--Copy-?node-id=0-1",
  },
  {
    id: 5,
    type: "figma",
    title: "Figma Site Design",
    src: "https://embed.figma.com/design/ymCGyHi3cFRa2J3KdYMULM/Film-Site---Parasite?embed-host=share",
    link: "https://embed.figma.com/design/ymCGyHi3cFRa2J3KdYMULM/Film-Site---Parasite",
  },
  {
    id: 6,
    type: "figma",
    title: "Figma Site Design",
    src: "https://embed.figma.com/design/I7wrHW1TWKoeWlB4goPSvU/Burgos-Burger-Joint?node-id=0-1&embed-host=share",
    link: "https://embed.figma.com/design/I7wrHW1TWKoeWlB4goPSvU/Burgos-Burger-Joint?node-id=0-1",
  },
];

const DesignEmbeds: React.FC = () => {
  return (
    <div className="bg-white mt-8 p-6 rounded-lg max-w-[1200px] mx-auto">
      {/* Intro Section */}


      {/* Embeds Grid */}
      <AnimatedSection>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {embeds.map((embed) => (
            <EmbedCard
              key={embed.id}
              type={embed.type}
              title={embed.title}
              src={embed.src}
              link={embed.link}
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default DesignEmbeds;
