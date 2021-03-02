import technologies from 'data/technologies';
import TechnologyLogo from '../Icons/TechnologyLogo';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <a
            href={project.data.live_project_link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="gtm-tracked-link"
            id={`${project.slugs[0]}-img`}
          >
            <picture>
              <img
                loading="lazy"
                width={1280}
                height={960}
                src={project.data.project_showcase_image.url}
                alt={project.data.project_showcase_image.alt}
              />
            </picture>
          </a>
        </figure>
      </div>
      <div className="card-content has-text-justified">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48 small-logo">
              <img
                src={project.data.project_logo.url}
                alt={project.data.project_logo.alt}
                loading="lazy"
                width={48}
                height={48}
              />
            </figure>
          </div>
          <div className="media-content">
            <h3 className="title is-5">{project.data.project_title[0].text}</h3>
            <h4 className="subtitle is-6">{project.data.project_subtitle[0].text}</h4>
          </div>
        </div>
        <div className="content">
          <p>{project.data.project_description}</p>
        </div>
        <div className="my-card-footer">
          <h4 className="subtitle is-6 has-text-centered">
            <strong>Technologies Used</strong>
          </h4>
          <div className="technologies-used">
            <ul>
              {project.data.technologies_used.split(', ').map((tech) => {
                const technologieUsed = technologies[tech];

                return (
                  <li key={`${project.id}-${tech}`}>
                    <TechnologyLogo
                      height={40}
                      width={40}
                      imgSrc={technologieUsed.imgSrc}
                      technologyName={technologieUsed.name}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="field is-grouped">
            <p className="control">
              <a
                className="button is-primary is-rounded gtm-tracked-link"
                href={project.data.live_project_link.url}
                target="_blank"
                rel="noopener noreferrer"
                id={`${project.slugs[0]}-btn`}
              >
                <span>Live Project</span>
              </a>
            </p>
            {project.data.code_link.url && (
              <p className="control">
                <a
                  className="button is-outlined is-rounded gtm-tracked-link"
                  href={project.data.code_link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`${project.slugs[0]}-gh`}
                >
                  <span>Code</span>
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
