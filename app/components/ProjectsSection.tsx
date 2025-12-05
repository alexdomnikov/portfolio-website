import Image from 'next/image';

const projects = [
  {
    title: "Ephemeral Notes Feature for URL Shortener",
    image: "/Ephemeral_Notes.png",
    description:
      "Stateless self-destructing messaging feature built on a forked open-source URL shortener. Compresses text into URL hashes and leverages existing Redis TTL for 30-minute expiration. Built with TypeScript, Qwik, and NestJS.",
    link: "https://github.com/alexdomnikov/reduced.to",
  },
  {
    title: "Full-Stack Stock Price Tracker & Visualization App",
    image: "/SPT_Dashboard.png",
    description:
      "Full-stack application allowing users to save stocks to a watchlist and see interactive price charts. Built with Python, Flask, SQLite, SQLAlchemy, Bootstrap, Jinja2, and Plotly.",
    link: "https://github.com/alexdomnikov/Stock-Price-Checker",
  },
];

export default function ProjectsSection() {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-8 sm:py-10">
      {projects.map((project) => (
        <div
          key={project.title}
          className="w-full sm:w-[48%] lg:w-[30%] max-w-sm bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="aspect-video bg-gray-700 relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
