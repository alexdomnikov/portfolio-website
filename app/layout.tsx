import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Alex Domnikov - Software Engineer',
	description:
		'Welcome to my portfolio website! I am a systems-focused engineer who is passionate about crafting elegant, AI-powered solutions to real-world business challenges.',
	keywords: [
		'Software Developer',
		'Software Engineer',
		'Web Developer',
		'Coder',
		'Clean Code',
		'Simple Design',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Web Dev',
		'Frontend Development',
		'Backend Development',
		'Fullstack Development',
		'Alex Domnikov',
	],
	authors: [{ name: 'Alex Domnikov' }],
	creator: 'Alex Domnikov',
	openGraph: {
		title: 'Alex Domnikov - Software Developer Portfolio',
		description: 'Passionate systems-focused developer creating effective AI-powered solutions. Explore my projects and development approach.',
		url: 'https://alexdomnikov.com',
		siteName: 'Alex Domnikov - Software Engineer Portfolio',
		images: [
			{
				url: '/portrait.jpg',
				width: 1200,
				height: 630,
				alt: 'Alex Domnikov - Software Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
