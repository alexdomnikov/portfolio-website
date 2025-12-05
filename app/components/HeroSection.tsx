'use client';

import Image from 'next/image';
import { HiOutlineDocumentText, HiOutlineCollection, HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HeroSection() {
	return (
		<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-6 sm:pb-8">
			<div className="flex flex-col items-center text-center">
				<div className="mb-5 sm:mb-6">
					<Image
						src="/portrait.jpg"
						alt="Profile Picture"
						width={240}
						height={240}
						className="rounded-full mx-auto border-[3px] border-gray-600/80 shadow-xl"
					/>
				</div>
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight mb-5 sm:mb-6">
					Alexander Domnikov Jr.
				</h1>
				<div className="mb-5 sm:mb-6">
					<p className="inline-flex items-center rounded-full bg-gray-800/70 border border-gray-700 px-4 py-1.5 text-xs sm:text-sm text-gray-200 tracking-wide uppercase">
						<span className="h-2 w-2 rounded-full bg-emerald-400 mr-2" />
						Full-Stack Engineer ∣ MSCS Candidate, Georgia Tech
					</p>
				</div>
				<div className="max-w-3xl px-2 sm:px-4 mb-6 sm:mb-8">
					<p className="text-sm sm:text-base text-gray-300 leading-relaxed">
						Drawing on my investment analysis background, I combine strategic thinking with strong engineering skills to design and build robust software.
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-6 sm:gap-8">
					<a
						href="/Domnikov_Alex.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 text-gray-300 transition-colors duration-200"
						aria-label="View resume"
					>
						<span className="flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
							<HiOutlineDocumentText className="w-9 h-9 sm:w-11 sm:h-11" />
						</span>
						<span className="absolute text-xs sm:text-sm font-medium text-gray-200 opacity-0 transform scale-90 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-125">
							Resume
						</span>
					</a>
					<a
						href="#projects"
						className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 text-gray-300 transition-colors duration-200"
						aria-label="View portfolio"
					>
						<span className="flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
							<HiOutlineCollection className="w-9 h-9 sm:w-11 sm:h-11" />
						</span>
						<span className="absolute text-xs sm:text-sm font-medium text-gray-200 opacity-0 transform scale-90 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-125">
							Portfolio
						</span>
					</a>
					<a
						href="mailto:me@alexdomnikov.com"
						className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 text-gray-300 transition-colors duration-200"
						aria-label="Send email"
					>
						<span className="flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
							<HiOutlineMail className="w-9 h-9 sm:w-11 sm:h-11" />
						</span>
						<span className="absolute text-xs sm:text-sm font-medium text-gray-200 opacity-0 transform scale-90 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-125">
							Email
						</span>
					</a>
					<a
						href="https://www.github.com/alexdomnikov"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 text-gray-300 transition-colors duration-200 hover:text-white"
						aria-label="GitHub profile"
					>
						<span className="flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
							<FaGithub className="w-9 h-9 sm:w-11 sm:h-11" />
						</span>
						<span className="absolute text-xs sm:text-sm font-medium text-gray-200 opacity-0 transform scale-90 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-125">
							GitHub
						</span>
					</a>
					<a
						href="https://www.linkedin.com/in/alex-domnikov"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 text-gray-300 transition-colors duration-200 hover:text-blue-400"
						aria-label="LinkedIn profile"
					>
						<span className="flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
							<FaLinkedin className="w-9 h-9 sm:w-11 sm:h-11" />
						</span>
						<span className="absolute text-xs sm:text-sm font-medium text-gray-200 opacity-0 transform scale-90 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-125">
							LinkedIn
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
