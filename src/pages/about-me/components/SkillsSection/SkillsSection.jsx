import React from 'react';
import { skills } from '../../../../data/skills';  
import SkillCard from '../Cards/Cards';
import './SkillsSection.scss';

export default function SkillsSection() {
  const handleCardClick = () => {
    console.log('Card clicked!');
  };

  return (
    <div className="skills-section">
      <h5>{skills[0].subtitle}</h5>
      <div className="skills-cards">
        {skills[0].sections.map((section, index) => (
          <SkillCard
            key={index}
            skill={section} 
            onClick={handleCardClick} 
          />
        ))}
      </div>
    </div>
  );
}
