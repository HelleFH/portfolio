import React from 'react';
import Layout from '../../components/Layout/Layout.tsx';
import HobbyCarousel from './components/carousel/carousel.tsx';
import Intro from './components/Intro.tsx';
import Contact from './components/Contact.tsx';

const AboutMePage = () => {
  return (
    <div className="about-page">
      <Layout
        heroTitle="About Me"
        heroSubtitle="Helle Fruergaard | Web Developer"
        buttons={[{ type: 'link', text: 'Projects', path: '/' }]}
      >

        <section className="mx-auto max-w-6xl bg-[rgba(var(--white-color))] p-8">
          <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-12">
            <div className='max-w-[400px]'>
              <HobbyCarousel />
            </div>

            <div className="flex flex-2 justify-start align-start flex-col w-full md:w-2/3">

              <Intro />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default AboutMePage;
