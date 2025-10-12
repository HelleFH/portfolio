import React from 'react';
import Layout from '../../components/Layout.tsx';
import HobbyCarousel from './components/carousel/carousel.tsx';
import Intro from './components/about-me/Intro.jsx';
import Contact from './components/Contact.tsx';
import Intro2 from './components/about-me/Intro2.jsx';

const AboutMePage = () => {
  return (
    <div className="about-page">
      <Layout
        heroTitle="About Me"
        heroSubtitle="Helle Fruergaard | Web Developer"
        heroIntro="React Developer building clean, responsive interfaces and smooth user experiences. 
        Merging a scientific mindset with creative coding."
        buttons={[{ type: 'link', text: 'Projects', path: '/' }]}
      >

        <section className="mx-auto max-w-6xl bg-[rgba(var(--white-color))] p-8">
          <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-12">
            <div className="flex flex-2  flex-col w-full md:w-2/3">
              <Intro />
            </div>
            <div className="flex flex-2 justify-start  align-center flex-col w-full md:w-2/3">
              <div className="flex md:flex-col-reverse items-center gap-8 flex-col md:gap-12">
                <Intro2 />
                <div className='w-full max-w-[400px]'>
                  <HobbyCarousel />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default AboutMePage;
