import React from 'react';
import Layout from '../../components/Layout.tsx';


import DesignEmbeds from './components/DesignEmbeds.tsx';

const DesignAndMedia = () => {
  return (
    <div className="about-page">
      <Layout
        heroTitle="Visual Work"
        heroSubtitle="Helle Fruergaard | Web Developer"
        heroIntro="I've worked on a range of creative projects and built several sites and apps from
          scratch, and I'm confident using Canva, Figma, Photoshop and other tools. Here
          are some examples of my visual work."
        buttons={[{ type: 'link', text: 'Projects', path: '/' }]}
      >

        <section className="mx-auto max-w-6xl bg-[rgba(var(--white-color))] p-8">
          <DesignEmbeds />
        </section>
      </Layout>
    </div>
  );
};

export default DesignAndMedia;
