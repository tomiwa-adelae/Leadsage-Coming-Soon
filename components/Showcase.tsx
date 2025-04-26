import React from "react";
import Header from "./ui/Header";
import Image from "next/image";

const Showcase = ({
	headline,
	description,
	details,
}: {
	headline: React.ReactNode;
	description: string | React.ReactNode;
	details?: React.ReactNode;
}) => {
	return (
		<div
			style={{ backgroundImage: `url(/assets/images/showcase-img.jpg)` }}
			className="min-h-[70vh] text-white"
		>
			<Header />
			<div className="py-16 flex items-center justify-center">
				<div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
					<div className="flex flex-col items-center text-center md:text-left md:items-start w-full justify-center">
						<h1 className="font-bold uppercase text-4xl md:text-5xl">
							{headline}
						</h1>
						<p className="text-base lg:text-lg text-gray-200 mt-4 mb-6">
							{description}
						</p>
						{details}
					</div>

					<div className="grid grid-cols-2 grid-rows-2 gap-2">
						<div className="row-span-2">
							<Image
								src={"/assets/images/showcase-1.jpg"}
								alt={"Showcase image one"}
								width={1000}
								height={1000}
								className="object-cover size-full aspect-auto rounded-2xl"
							/>
						</div>
						<div className="row-span-2">
							<Image
								src={"/assets/images/showcase-2.jpg"}
								alt={"Showcase image twi"}
								width={1000}
								height={1000}
								className="object-cover size-full aspect-auto rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
