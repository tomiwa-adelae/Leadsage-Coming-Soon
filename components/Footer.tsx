import Link from "next/link";
import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-[#122D27] py-8 text-center text-white font-medium uppercase text-xs">
			<div className="container">
				<Link href="/" className="hover:text-secondary transition-all">
					&copy; {year} Leadsage Africa. All rights reserved.
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
