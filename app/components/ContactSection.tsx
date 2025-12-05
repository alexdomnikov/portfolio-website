'use client';

import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
	return (
		<section className="pt-6 pb-16 sm:pt-8 sm:pb-16 px-4 border-t border-gray-800 bg-gray-800">
			<div className="max-w-2xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4">
					<h2 className="text-2xl font-semibold text-white">Let&apos;s chat!</h2>

					{/* Location */}
					<div className="flex items-center justify-center gap-2 text-gray-300">
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span>Los Angeles, CA</span>
					</div>

					{/* Contact Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<a
							href="mailto:me@alexdomnikov.com"
							className="px-6 py-2 border border-gray-600 text-gray-300 font-medium rounded hover:bg-gray-300 hover:text-gray-900 transition-colors inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							Email Me
						</a>
						<a
							href="https://www.linkedin.com/in/alex-domnikov"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-2 border border-gray-600 text-gray-300 font-medium rounded hover:bg-gray-300 hover:text-gray-900 transition-colors inline-flex items-center justify-center gap-2"
						>
							<FaLinkedin className="w-5 h-5" />
							LinkedIn
						</a>
					</div>

					<p className="text-gray-300">&copy; 2025 All rights reserved.</p>
				</motion.div>
			</div>
			<div className="mt-4 flex justify-end">
				<a
					href="#"
					className="inline-flex items-center justify-center px-4 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded hover:bg-gray-300 hover:text-gray-900 transition-colors"
				>
					Back to top
				</a>
			</div>
		</section>
	);
}
