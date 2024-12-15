import { Github, Linkedin, Mail, FileText, MapPin } from "lucide-react";
import TypingText from "./layout/TypingText";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center mt-8 lg:mt-24">
      {/* Left Column */}
      <div
        className="ww-full max-w-[380px] mx-8 lg:mx-0 sm:px-6 lg:px-0 
                  lg:fixed lg:left-[calc(50%-510px)]"
      >
        {/* Main Content */}
        <div className="space-y-8 lg:h-full lg:flex lg:flex-col">
          {/* Top section with name and intro */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-[700] text-stone-100 pb-1">
              Ryan Schmidt
            </h1>
            <h2 className="text-xl font-[400] lg:text-xl text-stone-400">
              Frontend Developer
            </h2>
            <h2 className="text-lg font-[200] lg:text-lg text-stone-400 pb-3 flex items-center gap-1">
              <MapPin size="18" /> <span>Seattle, WA </span>
            </h2>
            <TypingText />
          </div>

          {/* Tech Stack */}
          <div className="pb-8">
            <h2 className="text-lg  text-stone-200 mb-2">Tech Stack</h2>
            <div className="flex flex-wrap font-bold gap-2 mb-2">
              {["TypeScript", "React", "Angular"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-stone-700/40 backdrop-blur-sm rounded-md text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex text-sm flex-wrap gap-2 max-w-64">
              {[
                "Tailwind",
                "HTML",
                "CSS",
                "Node.js",
                "Webpack",
                "Mapbox",
                "React Query",
                "Context API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-stone-700/25 backdrop-blur-sm rounded-md text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom section with photo and links - using margin-top: auto to push to bottom */}
          <div className="lg:mt-auto flex flex-col sm:flex-row gap-8 items-start">
            {/* Profile Image */}
            <img
              src="portrait.jpg"
              alt="ryan"
              className="w-32 h-48 rounded-md object-cover"
            />

            {/* Links */}
            <div>
              <div className="flex flex-col space-y-3 pt-7">
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
        </div>
      </div>

      {/* Gap spacer - Only visible on desktop */}
      <div className="hidden lg:block w-[40px]" />

      {/* Right Column with scroll fade */}
      <div
        className="w-full max-w-[600px] mx-auto lg:mx-0 px-4 sm:px-6 lg:px-0
                  lg:ml-[420px]"
      >
        {/* Content */}
        <div className="max-w-xl lg:max-w-xl space-y-12">
          {/* Work Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-stone-100">
              Experience
            </h2>
            <div className="space-y-6">
              {/* GM Position */}
              <div className="">
                <h3 className="text-xl font-semibold text-stone-100">
                  Senior Front End Developer
                </h3>
                <p className="text-stone-400 mt-1">
                  General Motors • June 2017 - Sept 2024 (7 Years)
                </p>
                <p className="text-stone-400 mt-4">
                  Built and maintained enterprise web applications used by 500+
                  engineers daily. Specialized in geospatial visualization and
                  data processing systems.
                </p>

                <div className="mt-6">
                  <h4 className="text-stone-200 font-medium mb-2">
                    Technical Projects
                  </h4>
                  <ul className="space-y-2 text-stone-400">
                    <li>
                      • Created real-time analytics dashboard with React,
                      Mapbox, and D3.js
                    </li>
                    <li>
                      • Built mapping platform with React and Mapbox GL for
                      processing complex geospatial data
                    </li>
                    <li>
                      • Engineered internal file sharing system utilizing cloud
                      storage with AWS S3
                    </li>
                    <li>
                      • Developed reusable mapping components used across
                      multiple internal applications
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-stone-200 font-medium mb-2">
                    Architecture & Performance
                  </h4>
                  <ul className="space-y-2 text-stone-400">
                    <li>
                      • Integrated REST APIs connecting to 10+ backend services
                    </li>
                    <li>
                      • Led team migration from Angular to React architecture
                    </li>
                    <li>
                      • Utilized memoization to increase app
                      performance/efficiency
                    </li>
                    <li>
                      • Reduced application load times through React code
                      splitting and modern optimization techniques
                    </li>
                    <li>
                      • Built shared component library and custom hooks for
                      consistent state management
                    </li>
                    <li>
                      • Reduced bugs by implementing comprehensive React Testing
                      Library coverage
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-stone-200 font-medium mb-2">
                    Team Impact & Leadership
                  </h4>
                  <ul className="space-y-2 text-stone-400">
                    <li>
                      • Mentored junior developers in React best practices and
                      testing patterns
                    </li>
                    <li>
                      • Created shared state management patterns with Context
                      API to improve team collaboration
                    </li>
                    <li>
                      • Worked closely with UX designer to optimize user
                      workflow
                    </li>
                  </ul>
                </div>
              </div>

              {/* SWRI Position */}
              <div className="">
                <h3 className="text-xl font-semibold text-stone-100">
                  Data Analyst Intern
                </h3>
                <p className="text-stone-400 mt-1">
                  Southwest Research Institute • June 2016 - Sept 2016
                </p>
                <ul className="mt-4 space-y-2 text-stone-400">
                  <li>
                    • Implemented security improvements in C#/.NET applications
                  </li>
                  <li>
                    • Developed ASP.NET web forms with focus on UI/UX and
                    performance
                  </li>
                  <li>
                    • Conducted technical requirements gathering and stakeholder
                    interviews
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* About Section */}
          <section className="pb-20">
            <h2 className="text-2xl font-bold mb-4 text-stone-100">About</h2>
            <div className="space-y-4">
              <p className="text-stone-400 text-base lg:text-lg leading-relaxed">
                Frontend developer with over 7 years of experience building web
                applications, with a focus on React and data visualization.
              </p>
              <p className="text-stone-400 text-base lg:text-lg leading-relaxed">
                New to Seattle and enjoying the beautiful PNW. In my free time,
                I like to rock climb, hike, drink coffee, and peruse the local
                vintage and antique shops.
              </p>
            </div>
          </section>

          {/* Projects */}
          {/* <section>
            <h2 className="text-2xl font-bold mb-6 text-stone-100">Projects</h2>
            <div className="space-y-6">`
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
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
