import { Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  webLink: string;
  githubLink?: string;
  technologies: string[];
  webLinkText?: string;
}

function Project({
  title,
  description,
  webLink,
  githubLink,
  technologies,
  webLinkText = "Live Demo",
}: ProjectProps) {
  return (
    <div className="bg-stone-900/80 backdrop-blur-sm p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-stone-100">{title}</h3>
      <p className="text-stone-400 mt-2">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span className="px-2 py-1 bg-stone-800/50 backdrop-blur-sm rounded text-sm text-stone-300">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        {githubLink && (
          <a
            href={githubLink}
            className="text-stone-300 hover:text-stone-100 flex items-center gap-1 transition-colors"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        )}

        <a
          href={webLink}
          className="text-stone-300 hover:text-stone-100 transition-colors"
        >
          {webLinkText} →
        </a>
      </div>
    </div>
  );
}

export default Project;
