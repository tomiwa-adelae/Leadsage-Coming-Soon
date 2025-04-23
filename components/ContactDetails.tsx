import { contactDetails, socialLinks } from "@/constants";
import Image from "next/image";

const ContactDetails = () => {
	return (
		<div className="lg:col-span-2 grid gap-4">
			{contactDetails.map(({ icon, title, name, details }, index) => (
				<div
					key={index}
					className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-8 rounded-2xl"
				>
					<div className="flex items-center justify-start gap-4">
						<Image
							src={icon}
							alt={`${name} icon`}
							width={1000}
							height={1000}
							className="w-16 h-1w-16"
						/>
						<h4 className="uppercase font-medium text-base md:text-lg">
							{title}
						</h4>
					</div>
					<div>
						{details.map((detail, index) => (
							<a
								target="_blank"
								href={
									name === "email"
										? `mailto:${detail.detail}`
										: name === "phone"
										? `tel:${detail.detail}`
										: "#"
								}
								key={index}
								className="block hover:text-primary transition-all text-base text-muted-foreground mt-2"
							>
								{detail.detail}
							</a>
						))}
					</div>
				</div>
			))}
			<div className="flex gap-3 items-center justify-between mb-8 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-8 rounded-2xl">
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
						<p className="text-xs uppercase font-medium group-hover:text-primary transition-all">
							{name}
						</p>
					</a>
				))}
			</div>
		</div>
	);
};

export default ContactDetails;
