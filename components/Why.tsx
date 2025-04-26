import { why } from "@/constants";
import Image from "next/image";
import React from "react";

const Why = () => {
	return (
		<div id={"why"} className="py-16">
			<div className="container">
				<div>
					<h2 className="font-semibold uppercase text-3xl md:text-4xl">
						Why Choose LeadSage Africa
					</h2>
					<p className="text-base text-muted-foreground mt-1.5">
						Built for both renters and landlords with simplicity,
						trust, and control at its core.
					</p>
				</div>
				<div className="grid grid-col-1 md:grid-cols-2 mt-8 gap-8">
					{why.map(({ title, name, icon, description }, index) => (
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
							<p className="text-base text-muted-foreground mt-2">
								{description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Why;
