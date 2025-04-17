"use client";
import { Inknut_Antiqua } from "next/font/google";
import { ColourfulText } from "./ui/colourful-text";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { ShowcaseForm } from "./forms/ShowcaseForm";
import animationData from "@/public/assets/animations/house-animation.json";

const inknut = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500"],
});

const Showcase = () => {
	return (
		<div className="min-h-[70vh] bg-white pt-16 flex items-center justify-center">
			<div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
				<div className="flex flex-col items-start w-full justify-center">
					<h1
						className={`font-bold uppercase text-4xl md:text-5xl lg:text-6xl`}
					>
						Leadsage is coming soon...
						{/* <ColourfulText text="Coming Soon" /> */}
					</h1>
					<p className="text-base text-muted-foreground mt-4 mb-6">
						The smart way to rent, manage, and list apartments –
						built for both renters and landlords. Leadsage connects
						renters and landlords in a smart, secure, and seamless
						way. Whether you’re booking or listing, we make real
						estate simpler.
					</p>
					<ShowcaseForm />
				</div>
				<div className="flex items-center justify-center">
					{/* <Lottie animationData={animationData} /> */}
				</div>
			</div>
		</div>
	);
};

export default Showcase;
