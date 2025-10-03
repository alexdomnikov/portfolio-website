import { 
  SiCplusplus, SiPython, SiHtml5, SiCss3, SiJavascript,
  SiReact, SiNextdotjs, SiTailwindcss, SiFlask, SiGit, SiSqlite,
  SiBootstrap
} from 'react-icons/si';

import { AiOutlineJava, AiOutlineConsoleSql, AiFillFileExcel } from 'react-icons/ai';

export default function SkillsSection() {
  const languages = [
    { name: 'C++', icon: <SiCplusplus size={40} /> },
    { name: 'Python', icon: <SiPython size={40} /> },
    { name: 'Java', icon: <AiOutlineJava size={40} /> },
    { name: 'HTML', icon: <SiHtml5 size={40} /> },
    { name: 'CSS', icon: <SiCss3 size={40} /> },
    { name: 'Javascript', icon: <SiJavascript size={40} /> },
    { name: 'VBA', icon: <AiFillFileExcel size={40} /> },
    { name: 'SQL', icon: <AiOutlineConsoleSql size={40} /> },
  ];

  const tools = [
    { name: 'React', icon: <SiReact size={40} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss size={40} /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={40} /> },
    { name: 'Flask', icon: <SiFlask size={40} /> },
    { name: 'Git', icon: <SiGit size={40} /> },
  ];

  const technologies = [
	{ name: 'SQLite', icon: <SiSqlite size={40} /> },
  ];

  return (
    <section className="bg-gray-800 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 text-center">Languages</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-gray-700 p-4 sm:p-6 w-32 sm:w-40 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200 flex flex-col items-center gap-2"
            >
              {lang.icon}
              <span>{lang.name}</span>
            </div>
          ))}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 mt-4 sm:mt-6 text-center">Libraries, Frameworks, and Tools</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-gray-700 p-4 sm:p-6 w-32 sm:w-40 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200 flex flex-col items-center gap-2"
            >
              {tool.icon}
              <span>{tool.name}</span>
            </div>
          ))}
        </div>

		<h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 mt-4 sm:mt-6 text-center">Other Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-700 p-4 sm:p-6 w-32 sm:w-40 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200 flex flex-col items-center gap-2"
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
