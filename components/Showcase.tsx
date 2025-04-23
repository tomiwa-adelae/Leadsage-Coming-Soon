import React from "react";
import LottieAnimation from "./LottieAnimation";
import Header from "./ui/Header";

const Showcase = ({
	headline,
	description,
	details,
}: {
	headline: React.ReactNode;
	description: string | React.ReactNode;
	details: React.ReactNode;
}) => {
	return (
		<div
			style={{ backgroundImage: `url(/assets/images/showcase-img.jpg)` }}
			className="min-h-[70vh] text-white"
		>
			<Header />
			<div className="pt-16 md:pt-0 flex items-center justify-center">
				<div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
					<div className="flex flex-col items-start w-full justify-center">
						<h1 className="font-bold uppercase text-5xl md:text-5xl lg:text-6xl">
							{headline}
						</h1>
						<p className="text-base lg:text-lg text-gray-200 mt-4 mb-6">
							{description}
						</p>
						{details}
					</div>
					<div className="flex items-center justify-center">
						<LottieAnimation />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
