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
import { usePathname, useRouter } from "next/navigation";

export function MobileNavbar() {
	const pathname = usePathname();

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
							className="w-28 h-28"
						/>
					</Link>
				</SheetClose>
				<nav className="flex flex-col gap-4 mt-4 container">
					{navLinks.map(({ label, slug }, index) => {
						const isActive =
							pathname === slug ||
							pathname.startsWith(`${slug}/`);

						return (
							<SheetClose asChild key={index}>
								<Link
									href={slug}
									className={`group flex items-center justify-start gap-2 group/sidebar py-2
									text-white hover:text-gray-200
                                    `}
									onClick={() => {}}
								>
									<span className="text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 uppercase font-medium">
										{label}
									</span>
								</Link>
							</SheetClose>
						);
					})}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
