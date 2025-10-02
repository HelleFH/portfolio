// Card.jsx
import React from 'react';
import './Cards.scss';

export default function Card({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img className="project-card__image" src={project.images[0]} alt={project.name} />
      <strong className="project-card__title">{project.name}</strong>

      <ul className="project-card__technologies-list">
        {project.technologiesMore.map((tech, index) => (
          <li className='project-card__tech-item' key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

