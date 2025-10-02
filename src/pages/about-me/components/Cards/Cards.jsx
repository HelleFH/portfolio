import './Cards.scss';

export default function SkillCard({ skill, onClick }) {
  return (
    <div className="skill-card" onClick={onClick}>
      <img className="skill-card__image" src={skill.image.src} alt={skill.image.alt} />
      <strong className="skill-card__title">{skill.title}</strong>
      <div className="skill-card__description">{skill.description}</div>
      <h4 className="skill-card__list-title">{skill.listTitle}</h4>
      <ul className="skill-card__tech-list">
        {skill.technologies.map((tech, index) => (
          <li className="skill-card__tech-item" key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
