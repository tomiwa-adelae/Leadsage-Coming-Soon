import { Inknut_Antiqua } from "next/font/google";
import Link from "next/link";
import { Button } from "./button";

const inknut = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500"],
});

const Header = () => {
	return (
		<header className="container py-4 flex items-center justify-between gap-4">
			<h3
				className={`uppercase font-semibold text-2xl lg:text-3xl text-primary hover:text-primary/90 transition ease-out ${inknut.className}`}
			>
				<Link href={"/"}>Leadsage</Link>
			</h3>
			<Button asChild size={"lg"}>
				<Link href="#waitlist">Subscribe</Link>
			</Button>
		</header>
	);
};

export default Header;
