import { how } from "@/constants";
import Image from "next/image";
import React from "react";

const How = () => {
	return (
		<div id={"how"} className="bg-[#204B41] text-white py-16">
			<div className="container">
				<div>
					<h2 className="font-semibold uppercase text-3xl md:text-4xl">
						How Leadsage Africa Works
					</h2>
					<p className="text-base text-gray-100 mt-1.5">
						Our platform makes finding and listing property simple
						and efficient.
					</p>
				</div>
				<div className="grid grid-col-1 md:grid-cols-2 mt-8 gap-x-8 gap-y-10">
					{how.map(({ image, title, description, number }, index) => (
						<div key={index} className="relative">
							<Image
								src={image}
								alt={`${title}'s picture`}
								width={1000}
								height={1000}
								className="w-auto h-auto object-cover rounded-2xl aspect-video"
							/>
							<div className="mt-4">
								<h4 className="uppercase font-medium text-lg">
									{title}
								</h4>
								<p className="text-base text-gray-200 mt-1">
									{description}
								</p>
							</div>
							<div className="bg-primary rounded-full h-10 w-10 inline-flex items-center justify-center absolute top-[-10px] left-[-5px]">
								<h5 className="text-xl font-semibold">
									{number}
								</h5>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default How;
