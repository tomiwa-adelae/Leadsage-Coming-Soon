import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { MobileNavbar } from "../MobileNavbar";

const Header = () => {
	return (
		<header className="container py-4 flex items-center justify-between gap-4">
			<Link href={"/"}>
				<Image
					src={"/assets/images/logo.png"}
					alt={"LeadSage Logo"}
					width={1000}
					height={1000}
					className="w-40 lg:w-52 object-cover"
				/>
			</Link>
			<div className="flex-1 md:flex items-center justify-end gap-6">
				<nav className="hidden md:flex items-center justify-end gap-6">
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
				<Button className="hidden md:flex" asChild size={"md"}>
					<Link href="#waitlist">Join</Link>
				</Button>
				<div className="md:hidden flex items-center justify-end gap-2 md:gap-4">
					<Button asChild size={"md"}>
						<Link href="#waitlist">Join</Link>
					</Button>
					{/* <MobileNavbar /> */}
				</div>
			</div>
		</header>
	);
};

export default Header;
