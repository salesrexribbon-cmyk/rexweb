"use client";
import React, {useState, useRef} from "react";

import {motion, useMotionValue, AnimatePresence} from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Globe, MessageCircle } from "lucide-react";

interface iNavItem {
	heading: string;
	href: string;
	subheading?: string;
	imgSrc?: string;
}

interface iNavLinkProps extends iNavItem {
	setIsActive: (isActive: boolean) => void;
	index: number;
}

interface iCurvedNavbarProps {
	setIsActive: (isActive: boolean) => void;
	navItems: iNavItem[];
}

interface iHeaderProps {
	navItems?: iNavItem[];
	footer?: React.ReactNode;
}

const MENU_SLIDE_ANIMATION = {
	initial: {x: "calc(100% + 100px)"},
	enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1] as const}},
	exit: {
		x: "calc(100% + 100px)",
		transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1] as const},
	},
};

const defaultNavItems: iNavItem[] = [
	{
		heading: "Home",
		href: "/",
		subheading: "Welcome to Rex International",
		imgSrc: "https://images.unsplash.com/photo-1741454570867-4a10f31fc5e3?q=100&w=2832&fm=webp&auto=format&fit=crop",
	},
	{
		heading: "Store",
		href: "/store",
		subheading: "View our hardware catalog",
		imgSrc: "https://images.unsplash.com/photo-1755456068400-fbcdce2f795a?q=100&w=2832&fm=webp&auto=format&fit=crop",
	},
	{
		heading: "Services",
		href: "/services",
		subheading: "Expert maintenance solutions",
		imgSrc: "https://images.unsplash.com/photo-1755456068249-13d384440902?q=100&w=2832&fm=webp&auto=format&fit=crop",
	},
	{
		heading: "About",
		href: "/about",
		subheading: "30+ years of industry excellence",
		imgSrc: "https://images.unsplash.com/photo-1741454570904-a22d9d6ea511?q=100&w=2832&fm=webp&auto=format&fit=crop",
	},
	{
		heading: "Blogs",
		href: "/blogs",
		subheading: "Technical insights and news",
		imgSrc: "https://images.unsplash.com/photo-1741454570904-a22d9d6ea511?q=100&w=2832&fm=webp&auto=format&fit=crop",
	},
	{
		heading: "Contact",
		href: "/contact",
		subheading: "Get in touch with us",
		imgSrc: "https://images.unsplash.com/photo-1741454570904-a22d9d6ea511?q=100&w=2832&fm=webp&auto=format&fit=crop",
	},
];

const CustomFooter: React.FC = () => {
	return (
		<div className="flex w-full text-sm justify-between text-black px-6 md:px-12 py-5">
			<a href="mailto:rexribbon@gmail.com" target="_blank" rel="noopener noreferrer">
				<Mail size={24} />
			</a>
			<a href="tel:+919323906493" target="_blank" rel="noopener noreferrer">
				<Phone size={24} />
			</a>
			<a href="https://wa.me/919323906493" target="_blank" rel="noopener noreferrer">
				<MessageCircle size={24} />
			</a>
			<a href="/" target="_blank" rel="noopener noreferrer">
				<Globe size={24} />
			</a>
		</div>
	);
};

const NavLink: React.FC<iNavLinkProps> = ({
	heading,
	href,
	setIsActive,
	index,
}) => {
	const ref = useRef<HTMLAnchorElement | null>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const handleMouseMove = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => {
		const rect = ref.current!.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		x.set(mouseX / rect.width - 0.5);
		y.set(mouseY / rect.height - 0.5);
	};

	const handleClick = () => {
		return setIsActive(false);
	};

	const isExternalLink = false;
	const linkProps = isExternalLink
		? {target: "_blank", rel: "noopener noreferrer"}
		: {};

	return (
		<motion.div
			initial="initial"
			whileHover="whileHover"
			className="group relative border-b border-black/30 transition-colors duration-500 uppercase"
			{...linkProps}
		>
			<Link 
				ref={ref} 
				onMouseMove={handleMouseMove} 
				href={href}
				onClick={handleClick}
				className="flex items-center justify-between w-full py-3 md:py-6"
			>
				<div className="relative flex items-start w-full">
					<span className="text-black transition-colors duration-500 text-2xl md:text-4xl font-thin mr-2">
						{index}.
					</span>
					<div className="flex flex-row gap-2">
						<motion.span
							variants={{
								initial: {x: 0},
								whileHover: {x: -16},
							}}
							transition={{
								type: "spring",
								staggerChildren: 0.075,
								delayChildren: 0.25,
							}}
							className="relative z-10 block text-2xl md:text-4xl font-extralight text-black transition-colors duration-500"
						>
							{heading.split("").map((letter, i) => {
								return (
									<motion.span
										key={i}
										variants={{
											initial: {x: 0},
											whileHover: {x: 16},
										}}
										transition={{type: "spring"}}
										className="inline-block"
									>
										{letter}
									</motion.span>
								);
							})}
						</motion.span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

const Curve: React.FC = () => {
	const [pathHeight, setPathHeight] = useState(0);

	React.useEffect(() => {
		const updateHeight = () => {
			// On mobile, the menu is 80dvh (popup style). On desktop, it is 100dvh.
			const h = window.innerWidth < 768 ? window.innerHeight * 0.8 : window.innerHeight;
			setPathHeight(h);
		};
		updateHeight();
		window.addEventListener('resize', updateHeight);
		return () => window.removeEventListener('resize', updateHeight);
	}, []);

	const initialPath = `M100 0 L200 0 L200 ${pathHeight} L100 ${pathHeight} Q-100 ${pathHeight / 2} 100 0`;
	const targetPath = `M100 0 L200 0 L200 ${pathHeight} L100 ${pathHeight} Q100 ${pathHeight / 2} 100 0`;

	const curve = {
		initial: {d: initialPath},
		enter: {
			d: targetPath,
			transition: {duration: 1, ease: [0.76, 0, 0.24, 1] as const},
		},
		exit: {
			d: initialPath,
			transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1] as const},
		},
	};

	// Return an empty SVG on SSR to prevent hydration mismatch
	if (!pathHeight) {
		return <svg className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full" style={{fill: "#ffffff"}} />;
	}

	return (
		<svg
			className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full"
			style={{fill: "#ffffff"}}
		>
			<motion.path
				variants={curve}
				initial="initial"
				animate="enter"
				exit="exit"
			/>
		</svg>
	);
};

const CurvedNavbar: React.FC<
	iCurvedNavbarProps & {footer?: React.ReactNode}
> = ({setIsActive, navItems, footer}) => {
	return (
		<motion.div
			variants={MENU_SLIDE_ANIMATION}
			initial="initial"
			animate="enter"
			exit="exit"
			className="h-[80dvh] md:h-[100dvh] w-[75vw] sm:w-[400px] fixed right-0 top-0 z-40 bg-white shadow-2xl"
		>
			<div className="h-full pt-11 flex flex-col justify-between overflow-hidden">
				<div className="flex flex-col text-5xl gap-3 mt-0 px-6 md:px-12 flex-1 min-h-0">
					<div className="text-black border-b border-black/30 uppercase text-sm mb-0 shrink-0">
						<p>Navigation</p>
					</div>
					<section className="bg-transparent mt-0 overflow-y-auto flex-1 pb-4">
						<div className="mx-auto max-w-7xl">
							{navItems.map((item, index) => {
								return (
									<NavLink
										key={item.href}
										{...item}
										setIsActive={setIsActive}
										index={index + 1}
									/>
								);
							})}
						</div>
					</section>
				</div>
				<div className="shrink-0">
					{footer}
				</div>
			</div>
			<Curve />
		</motion.div>
	);
};

const Header: React.FC<iHeaderProps> = ({
	navItems = defaultNavItems,
	footer = <CustomFooter />,
}) => {
	const [isActive, setIsActive] = useState(false);
	const openAudioRef = useRef<HTMLAudioElement | null>(null);
	const closeAudioRef = useRef<HTMLAudioElement | null>(null);

	const handleClick = () => {
		if (isActive) {
			closeAudioRef.current?.play();
		} else {
			openAudioRef.current?.play();
		}
		setIsActive(!isActive);
	};

	return (
		<>
			<div className="relative">
				{/* I am adding a simple brand name on the left so the website doesn't lose its identity completely */}
				<Link href="/" className="fixed left-5 top-4 z-40 text-xl md:text-2xl font-bold text-brand-green font-outfit tracking-tight leading-none">
					Rex <br />
					International<span className="text-brand-maroon">.</span>
				</Link>

				<div
					onClick={handleClick}
					className="fixed -right-1 top-0 md:-right-1 m-5 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer bg-white shadow-md border border-brand-gray/20"
				>
					<div className="relative w-6 h-5 flex flex-col justify-between items-center">
						<span
							className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isActive ? "rotate-45 translate-y-2.5" : ""}`}
						></span>
						<span
							className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${isActive ? "opacity-0" : ""}`}
						></span>
						<span
							className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isActive ? "-rotate-45 -translate-y-2" : ""}`}
						></span>
					</div>
				</div>
			</div>

			<AnimatePresence mode="wait">
				{isActive && (
					<CurvedNavbar
						setIsActive={setIsActive}
						navItems={navItems}
						footer={footer}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
