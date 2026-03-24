import githubIcon from "../assets/github-cat.svg";
import externalLinkIcon from "../assets/external-link.svg";
import linkIcon from "../assets/link.svg";

export default function Project({ image, title, description, technologies = [], codeUrl, websiteUrl, demoUrl }) {
  return (
    <article className="project-card">
      {image && (
        <div className="project-card__image">
          <img src={image} alt={title} />
        </div>
      )}
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      {technologies.length > 0 && (
        <div className="project-card__tech">
          {technologies.map((tech) => (
            <span key={tech} className="project-card__tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
      {(websiteUrl || codeUrl || demoUrl) && (
        <div className="project-card__links">
          {websiteUrl && (
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
              <img src={externalLinkIcon} alt="" className="project-card__link-icon" aria-hidden />
              Website
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
              <img src={githubIcon} alt="" className="project-card__link-icon" aria-hidden />
              Code
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
              <img src={linkIcon} alt="" className="project-card__link-icon" aria-hidden />
              Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
