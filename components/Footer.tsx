import { footerDetails, socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-white">
			<div className="container border-t">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-16">
					<div className="col-span-2 md:col-span-1 lg:col-span-2">
						<Link href={"/"}>
							<Image
								src={"/assets/images/logo.png"}
								alt={"Leadsage Logo"}
								width={1000}
								height={1000}
								className="w-40 lg:w-52 object-cover invert"
							/>
						</Link>
						<p className="text-muted-foreground text-base mt-4">
							Digitalizing Africa's housing market. Connecting
							landlords with renters for a seamless property
							experience.
						</p>
						<div className="flex items-center justify-start gap-6 mt-8">
							{socialLinks.map(({ icon, name, slug }, index) => (
								<a
									href={slug}
									target="_blank"
									key={index}
									className="flex items-center justify-start gap-4 group"
								>
									<Image
										src={icon}
										alt={`${name} icon`}
										width={1000}
										height={1000}
										className="w-[20px] h-[20px]"
									/>
								</a>
							))}
						</div>
					</div>
					{footerDetails.map(({ title, links }, index) => (
						<div key={index} className="">
							<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
								{title}
							</h3>
							<ul className="mt-4 space-y-4">
								{links.map(({ slug, label }, idx) => (
									<li
										key={idx}
										className="text-base text-muted-foreground hover:text-primary"
									>
										<Link href={slug}>{label}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="bg-[#122D27] hover:text-secondary transition-all py-8 text-center text-white font-medium uppercase text-xs">
				<p className="container">
					&copy; {year} Leadsage Africa. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
