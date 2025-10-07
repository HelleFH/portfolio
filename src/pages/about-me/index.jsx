import React from 'react';
import AboutMe from './components/about-me/AboutMe';
import SkillsSection from './components/SkillsSection/SkillsSection'
import Layout from '../../components/Layout/Layout.tsx';
import FindMatches from '../../components/ResumeCards/FindMatches.tsx';
import './index.scss'; 
import ExperienceReveal from '../ExperienceReveal/ExperienceReveal.tsx';

const AboutMePage = () => {
  return (
<div className='about-page'>   

   <Layout
    heroTitle="About Me"
          heroSubtitle="Helle Fruergaard | Web Developer"

       buttons={[
        { type: 'link', text: 'Projects', path: '/' },
      ]}
  >

        <AboutMe />
        <SkillsSection />
        <FindMatches />

    </Layout>
    </div>

  );
};

export default AboutMePage;
