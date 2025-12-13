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
	metadataBase: new URL('https://alexdomnikov.com'),
	title: 'Alexander Domnikov Jr. - Software Engineer',
	description:
		'Welcome to my portfolio website! I am a systems-focused engineer who is passionate about crafting elegant, AI-powered solutions to real-world business challenges.',
	keywords: [
		'Software Developer',
		'Software Engineer',
		'Web Developer',
		'Coder',
		'Clean Code',
		'Simple Design',
		'CPlusPlus',
		'C++',
		'Python',
		'Java',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Flask',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Web Dev',
		'Frontend Development',
		'Backend Development',
		'Fullstack Development',
		'Alex Domnikov',
		'Alex Domnikov Jr',
		'Alex Domnikov Jr.',
		'Alexander Domnikov',
		'Alexander Domnikov Jr',
		'Alexander Domnikov Jr.',
	],
	authors: [{ name: 'Alexander Domnikov Jr.' }],
	creator: 'Alexander Domnikov Jr.',
	openGraph: {
		title: 'Alexander Domnikov Jr. - Software Developer Portfolio',
		description: 'Passionate systems-focused developer creating effective AI/ML-powered solutions. Explore my projects and development approach.',
		url: 'https://alexdomnikov.com',
		siteName: 'Alexander Domnikov Jr. - Software Developer Portfolio',
		images: [
			{
				url: '/portrait.jpg',
				width: 1200,
				height: 630,
				alt: 'Alexander Domnikov Jr. - Software Developer Portfolio',
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

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
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
