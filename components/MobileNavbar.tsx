"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export function MobileNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleLinkClick = (slug: string) => {
		const element = document.querySelector(slug);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });

			// Close the sheet AFTER scroll (mobile browsers need a longer wait)
			setTimeout(() => {
				setIsOpen(false);
			}, 400); // 400ms is safer for mobile smooth scroll
		}
	};
	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="hover:bg-transparent"
					size={"icon"}
				>
					<Image
						src={"/assets/icons/menu.svg"}
						alt={"Menu Icon"}
						width={1000}
						height={1000}
						className="w-[40px] invert h-[40px] md:w-[40px] md:h-[40px] "
					/>
				</Button>
			</SheetTrigger>
			<SheetContent className="h-screen" side={"left"}>
				<p onClick={() => setIsOpen(false)}>
					<Image
						src={"/assets/images/logo.png"}
						alt={"Leadsage Logo"}
						width={1000}
						height={1000}
						className="w-28 h-28"
					/>
				</p>
				<nav className="flex flex-col gap-4 mt-4 container">
					{navLinks.map(({ label, slug }, index) => (
						<button
							key={index}
							onClick={() => handleLinkClick(slug)}
							className="group flex items-center justify-start gap-2 py-2 text-white hover:text-gray-200 text-left"
						>
							<span className="text-sm uppercase font-medium group-hover:translate-x-1 transition duration-150">
								{label}
							</span>
						</button>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
