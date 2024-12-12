import { Github, Linkedin, Mail, FileText } from "lucide-react";
import GradientImage from "./layout/GradientImage";

const Portfolio = () => {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Personal Info */}
        <div className="space-y-8">
          {/* Profile */}
          <div>
            <h1 className="text-5xl font-bold text-stone-100 mb-4">
              Your Name
            </h1>

            <h2 className="text-xl text-stone-300 mb-6">Frontend Developer</h2>
            <GradientImage
              src="portrait.jpg"
              alt="Description of image"
              className="w-40 h-64 rounded-lg" // Adjust size and styling as needed
            />
            <p className="text-stone-400 text-lg">
              With a deep passion for programming and a diverse portfolio of
              innovative and self-driven projects.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-lg font-semibold text-stone-200 mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-stone-800/50 backdrop-blur-sm rounded-full text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold text-stone-200 mb-4">
              Connect
            </h2>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors"
              >
                <FileText size={20} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-12">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-stone-100">About</h2>
            <p className="text-stone-400 text-lg leading-relaxed">
              Your introduction goes here. Write about your passion for
              development, what drives you, and what you're looking for in your
              next role.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed">
              Your introduction goes here. Write about your passion for
              development, what drives you, and what you're looking for in your
              next role.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed">
              Your introduction goes here. Write about your passion for
              development, what drives you, and what you're looking for in your
              next role.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed">
              Your introduction goes here. Write about your passion for
              development, what drives you, and what you're looking for in your
              next role.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed">
              Your introduction goes here. Write about your passion for
              development, what drives you, and what you're looking for in your
              next role.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed">
              Your introduction goes here. Write about your passion for
              development, what drives you, and what you're looking for in your
              next role.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed">
              Your introduction goes here. Write about your passion for
              development, what drives you, and what you're looking for in your
              next role.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed">
              Your introduction goes here. Write about your passion for
              development, what drives you, and what you're looking for in your
              next role.
            </p>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-stone-100">Projects</h2>
            <div className="space-y-6">
              <div className="bg-stone-900/50 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-stone-100">
                  Project Name
                </h3>
                <p className="text-stone-400 mt-2">
                  Brief project description that highlights the key features and
                  technologies used.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-stone-800/50 backdrop-blur-sm rounded text-sm text-stone-300">
                    React
                  </span>
                  <span className="px-2 py-1 bg-stone-800/50 backdrop-blur-sm rounded text-sm text-stone-300">
                    TypeScript
                  </span>
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href="#"
                    className="text-stone-300 hover:text-stone-100 flex items-center gap-1 transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href="#"
                    className="text-stone-300 hover:text-stone-100 transition-colors"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-stone-100">
              Experience
            </h2>
            <div className="space-y-6">
              <div className="bg-stone-900/50 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-stone-100">
                  Senior Frontend Developer
                </h3>
                <p className="text-stone-400 mt-1">
                  Company Name • 2020 - Present
                </p>
                <ul className="mt-4 space-y-2 text-stone-400">
                  <li>• Accomplishment or responsibility 1</li>
                  <li>• Accomplishment or responsibility 2</li>
                  <li>• Accomplishment or responsibility 3</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
