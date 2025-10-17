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
              <MapPin size="18" /> <span>Seattle, WA / Austin, TX </span>
            </h2>
            <TypingText />
          </div>
          {/* Tech Stack */}
          <div className="pb-8">
            <h2 className="text-lg  text-stone-200 mb-2">Tech Stack</h2>
            <div className="flex flex-wrap font-bold gap-2 mb-2">
              {["Angular", "Typescript", "React"].map((tech) => (
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
                "REST APIs",
                "HTML/CSS",
                "RxJS",
                "Data Visualization",
                "Mapbox GL",
                "D3.js",
                "SQL",
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
                  Frontend Developer
                </h3>
                <p className="text-stone-400 mt-1">
                  General Motors • June 2017 - Sept 2024 (7 Years)
                </p>
                <p className="text-stone-400 mt-4">
                  Developed enterprise web applications and data visualization
                  tools serving 500+ engineers. Worked primarily with Angular
                  before transitioning to React, building mapping platforms and
                  analytics dashboards.
                </p>

                <ul className="mt-4 space-y-2 text-stone-400">
                  <li>
                    • Built mapping visualization platform using Angular and
                    Mapbox GL for geospatial data
                  </li>
                  <li>
                    • Created real-time analytics dashboard with React,
                    TypeScript, and D3.js
                  </li>
                  <li>
                    • Developed file-sharing application with AWS S3 integration
                    for internal workflows
                  </li>
                  <li>
                    • Collaborated with UX designers and product teams to
                    implement features
                  </li>
                </ul>
              </div>

              {/* Microsoft Position */}
              <div className="">
                <h3 className="text-xl font-semibold text-stone-100">
                  Frontend Developer
                </h3>
                <p className="text-stone-400 mt-1">
                  Microsoft (Via Quadrant Technologies) • March 2025 - July 2025
                </p>

                <ul className="mt-4 space-y-2 text-stone-400">
                  <li>
                    • Developed React components for Microsoft Purview data
                    governance platform
                  </li>
                  <li>
                    • Implemented complex UI logic for role-based data access
                    controls
                  </li>
                  <li>
                    • Collaborated with product teams on feature requirements
                  </li>
                </ul>
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
                    • Developed web applications and data tools in C#/.NET
                  </li>
                  <li>
                    • Conducted requirements gathering through stakeholder
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
                title="Used Car Depreciation Analysis"
                webLink="https://github.com/rschmidt6/Used-Car-Prices-Analysis"
                webLinkText="See Analysis Markdown"
                technologies={[
                  "Google Sheets",
                  "Pivot Tables",
                  "Statistical Analysis",
                  "Data Visualization",
                  "Business Intelligence",
                ]}
                description="Analysis of 50,000 car sales records to identify depreciation patterns across brands, fuel types, and engine sizes. Debunked the 'luxury holds value' myth by showing mass market brands actually retain value better percentage-wise. Built comprehensive pivot tables and calculated depreciation rates to provide actionable buying strategies for consumers and dealers."
              />
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
                Data Analyst transitioning from 7 years as a frontend developer.
                After a while building web applications, I realized I was most
                interested by the data-driven parts of my projects like
                analyzing user behavior, building out performance metrics, and
                creating visualizations. Now I'm applying those analytical
                skills to help businesses make better decisions.
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
