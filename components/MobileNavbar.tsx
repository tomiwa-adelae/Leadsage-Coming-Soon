"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export function MobileNavbar() {
	return (
		<Sheet>
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
				<SheetClose asChild>
					<Link href={"/"}>
						<Image
							src={"/assets/images/logo.png"}
							alt={"Leadsage Logo"}
							width={1000}
							height={1000}
							className="w-40 lg:w-52 object-cover"
						/>
					</Link>
				</SheetClose>
				<nav className="flex flex-col gap-4 mt-4 container">
					{navLinks.map(({ label, slug }, index) => {
						return (
							<Link
								href={slug}
								key={index}
								onClick={(e) => {
									e.preventDefault(); // Prevent default anchor behavior
									const element =
										document.querySelector(slug);
									if (element) {
										element.scrollIntoView({
											behavior: "smooth",
										});
										setTimeout(() => {
											document
												.getElementById("sheet-close")
												?.click();
										}, 300); // Adjust delay if needed
									}
								}}
								className="group flex items-center justify-start gap-2 py-2 text-white hover:text-gray-200"
							>
								<span className="text-sm uppercase font-medium group-hover:translate-x-1 transition duration-150">
									{label}
								</span>
							</Link>
						);
					})}
				</nav>
			</SheetContent>
			<SheetClose asChild>
				<button id="sheet-close" className="hidden" />
			</SheetClose>
		</Sheet>
	);
}
