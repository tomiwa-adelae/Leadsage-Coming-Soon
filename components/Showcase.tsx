"use client";
import Lottie from "lottie-react";
import animationData from "@/public/assets/animations/house-animation.json";

const Showcase = ({
	headline,
	description,
	details,
}: {
	headline: React.ReactNode;
	description: string;
	details: React.ReactNode;
}) => {
	return (
		<div className="min-h-[70vh] bg-white pt-16 flex items-center justify-center">
			<div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
				<div className="flex flex-col items-start w-full justify-center">
					<h1
						className={`font-bold uppercase text-4xl md:text-5xl lg:text-6xl`}
					>
						{headline}
					</h1>
					<p className="text-base text-muted-foreground mt-4 mb-6">
						{description}
					</p>
					{details}
				</div>
				<div className="flex items-center justify-center">
					<Lottie animationData={animationData} />
				</div>
			</div>
		</div>
	);
};

export default Showcase;
