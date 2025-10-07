import Image from 'next/image';

export default function ProjectsSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{['Full-Stack Stock Price Tracker & Visualization App', 
					  /*'Project 2', 'Project 3', 'Project 4'*/].map((project) => (
						<div key={project} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/SPT_Dashboard.png`} alt={`Project ${project}`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">Full-stack application allowing users to save stocks to a watchlist and see interactive price charts. Built with Python, Flask, SQLite, SQLAlchemy, Bootstrap, Jinja2, and Plotly</p>
								<div className="flex gap-2">
									<a href="https://github.com/alexdomnikov/Stock-Price-Checker" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
