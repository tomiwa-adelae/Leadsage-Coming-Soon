"use client";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "@/public/assets/animations/house-animation.json";
import { useRef } from "react";
import { LottieRefCurrentProps } from "lottie-react";

const LottieAnimation = () => {
	const animationRef = useRef<LottieRefCurrentProps>(null);
	return <Lottie lottieRef={animationRef} animationData={animationData} />;
};

export default LottieAnimation;
