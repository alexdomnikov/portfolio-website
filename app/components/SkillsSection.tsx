import { 
  SiPython, SiFastapi, SiFlask, SiPandas, SiScikitlearn,
  SiPostgresql, SiAmazonwebservices, SiGit,
  SiCplusplus, SiHtml5, SiCss3, SiJavascript,
  SiTailwindcss, SiBootstrap, SiReact, SiVite, SiPlotly, 
  SiSqlite, SiDocker
} from 'react-icons/si';

import { AiOutlineJava, AiOutlineConsoleSql } from 'react-icons/ai';

export default function SkillsSection() {
  const core_stack = [
    { name: 'Python', icon: <SiPython size={40} /> },
    { name: 'FastAPI', icon: <SiFastapi size={40} /> },
    { name: 'Flask', icon: <SiFlask size={40} /> },
    { name: 'Pandas', icon: <SiPandas size={40} /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn size={40} /> },
    { name: 'SQL', icon: <AiOutlineConsoleSql size={40} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} /> },
    { name: 'AWS', icon: <SiAmazonwebservices size={40} /> },
    { name: 'Git', icon: <SiGit size={40} /> },
  ];

  const additional_experience = [
    { name: 'C++', icon: <SiCplusplus size={40} /> },    
    { name: 'Java', icon: <AiOutlineJava size={40} /> },
    { name: 'HTML', icon: <SiHtml5 size={40} /> },
    { name: 'CSS', icon: <SiCss3 size={40} /> },
    { name: 'Javascript', icon: <SiJavascript size={40} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={40} /> },
    { name: 'React', icon: <SiReact size={40} /> },
    { name: 'Vite', icon: <SiVite size={40} /> },
    { name: 'Plotly', icon: <SiPlotly size={40}/> },
    { name: 'SQLite', icon: <SiSqlite size={40} /> },
    { name: 'Docker', icon: <SiDocker size={40} /> },
  ];

  return (
    <section className="bg-gray-800 pt-6 pb-6 sm:pt-8 sm:pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 text-center">Core Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {core_stack.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-700 p-4 sm:p-6 w-32 sm:w-40 rounded-lg shadow-sm text-center text-sm sm:text-base text-gray-200 flex flex-col items-center gap-2"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 mt-4 sm:mt-6 text-center">Additional Experience</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {additional_experience.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-700 p-4 sm:p-6 w-32 sm:w-40 rounded-lg shadow-sm text-center text-sm sm:text-base text-gray-200 flex flex-col items-center gap-2"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
