import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

const Header = () => {
	return (
		<header className="container py-4 flex items-center justify-between gap-4">
			<Link href={"/"}>
				<Image
					src={"/assets/images/logo.png"}
					alt={"Leadsage Logo"}
					width={1000}
					height={1000}
					className="w-28 h-28"
				/>
			</Link>
			<div className="flex-1 md:flex items-center justify-end gap-6">
				<nav className="flex items-center justify-end gap-6">
					{navLinks.map((link, index) => {
						return (
							<Link
								key={index}
								className={cn(
									"uppercase text-xs lg:text-sm font-medium text-white"
								)}
								href={link.slug}
							>
								{link.label}
							</Link>
						);
					})}
				</nav>
				<Button asChild size={"lg"}>
					<Link href="#waitlist">Join</Link>
				</Button>
			</div>
		</header>
	);
};

export default Header;
