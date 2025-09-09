export default function SkillsSection() {
	const languages = ['C++', 'Python', 'Java', 'HTML', 'CSS', 'Javascript', 'SQL', 'GraphQL']
	const tools = ['React', 'Node.js', 'Next.js', 'TailwindCSS', 'PostgreSQL', 'Git'];

	return (
		<section className="bg-gray-800 py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mt-4 text-center">Languages</h2>
				<div className="flex flex-wrap justify-center gap-4">
					{languages.map((language) => (
						<div
							key={language}
							className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200"
						>
							{language}
						</div>
					))}
				</div>
			</div>

		<h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 text-center">Libraries, Frameworks, and Tools</h2>
				<div className="flex flex-wrap justify-center gap-4">
					{tools.map((tool) => (
						<div
							key={tool}
							className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200"
						>
							{tool}
						</div>
					))}
				</div>
		</section>
	);
}
