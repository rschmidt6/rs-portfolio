import { Github, Linkedin, FileText, MapPin } from "lucide-react";
import TypingText from "./layout/TypingText";
import EmailButton from "./ui/EmailButton";
import Project from "./sections/Project";

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
            <h1 className="text-4xl sm:text-5xl font-[700] text-stone-100 pb-2">
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
          ˆ{/* Tech Stack */}
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
                "REST",
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
          <div className=" flex flex-row gap-8 items-start pb-12">
            {/* Profile Image */}
            <div>
              <img
                src="portrait.jpg"
                alt="ryan"
                className="w-32 h-48 rounded-md object-cover"
              />
            </div>

            {/* Links */}
            <div>
              <div className="flex flex-col space-y-3 pt-7">
                <a
                  href="https://github.com/rschmidt6"
                  className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rdschmidt88/"
                  className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                {/* <a
                  href="mailto:rdschmidt88@gmail.com"
                  className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a> */}
                <EmailButton />
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
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
                      • Engineered internal file sharing system using cloud
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
          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-stone-100">Projects</h2>
            <div className="space-y-6">
              <Project
                title="Ghibli Generator"
                webLink="https://ghibli-generator.vercel.app/"
                githubLink="https://github.com/rschmidt6/ghibli-generator"
                technologies={[
                  "React",
                  "Vite",
                  "Tailwind",
                  "Framer Motion",
                  "React Query",
                ]}
                description="A web app that generates random Studio Ghibli content
                  including films, characters, locations and vehicles. Built
                  with React, Vite and the Ghibli API, featuring smooth
                  animations and responsive design. I really just wanted to make
                  a nice Ghibli theme and practice design."
              />
              <Project
                title="Ascii Writing Tracker"
                webLink="https://ascii-writing-tracker.vercel.app/"
                githubLink="https://github.com/rschmidt6/ascii-writing-tracker"
                technologies={["React", "Vite", "Tailwind"]}
                description="I will admit not the most complex app, but I wanted to quickly
                  make a really simple way to track my daily writing goal of 500
                  words and then auto-date and format it and export as as a .txt
                  for easy organization. I thought the ascii styling would be a
                  fun way to make it more interesting and have a unique design,
                  and I love the way it looks. Not responsive, desktop only."
              />
            </div>
          </section>
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-stone-100">About</h2>
            <div className="space-y-4">
              <p className="text-stone-400 leading-relaxed font-[600]">
                Frontend developer with over 7 years of experience building web
                applications, with a current focus on React and data
                visualization.
              </p>
              <p className="text-stone-400 leading-relaxed font-[600]">
                New to Seattle, and enjoying the beautiful PNW. In my free time,
                I like to rock climb, drink coffee, and peruse the local vintage
                and antique shops.
              </p>
              <p className="text-stone-400 leading-relaxed font-[600]">
                Would love to connect about any opportunities, feel free to
                reach out directly over email or Linkedin!
              </p>
            </div>
          </section>
          <section className="pb-20 text-stone-600 text-sm font-[200]">
            <p>This site built with React, Tailwind, Framer Motion</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
