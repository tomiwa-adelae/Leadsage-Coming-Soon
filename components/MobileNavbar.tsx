"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export function MobileNavbar() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
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
			<SheetContent className="h-screen py-8 px-8" side={"left"}>
				<Link href={"/"} onClick={() => setOpen(false)}>
					<Image
						src={"/assets/images/logo.png"}
						alt={"LeadSage Logo"}
						width={1000}
						height={1000}
						className="w-40 lg:w-52 object-cover"
					/>
				</Link>
				<nav className="flex flex-col gap-4 mt-4 container">
					{navLinks.map(({ label, slug }, index) => (
						<Link
							onClick={() => setOpen(false)}
							href={slug}
							key={index}
							className="group flex items-center justify-start gap-2 py-2 text-white hover:text-gray-200 text-left"
						>
							<span className="text-sm uppercase font-medium group-hover:translate-x-1 transition duration-150">
								{label}
							</span>
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
