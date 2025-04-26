import Image from "next/image";

const About = () => {
	return (
		<div id="about" className="bg-white text-black py-16 container">
			<div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
				<div className="flex items-center justify-between w-full">
					<Image
						src={"/assets/images/about.png"}
						alt={"2 images of a building"}
						width={1000}
						height={1000}
						className="size-full aspect-auto"
					/>
				</div>
				<div className="flex flex-col items-start justify-center md:order-2">
					<h2 className="font-semibold uppercase text-3xl md:text-4xl">
						About Leadsage Africa
					</h2>
					<p className="text-base text-muted-foreground mt-1.5">
						LeadSage Africa is transforming the housing and service
						industry by offering a seamless and transparent platform
						for property rentals, real estate transactions, and home
						maintenance. Whether you're a tenant looking for a home,
						a landlord seeking trustworthy tenants, a realtor
						showcasing verified properties, or a homeowner needing
						reliable artisans, we have you covered.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
