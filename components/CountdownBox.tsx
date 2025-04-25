import React from "react";

const CountdownBox = ({ value, label }: { value: string; label: string }) => {
	return (
		<div>
			<div className="h-full w-full bg-clip-padding backdrop-filter bg-opacity-30 text-5xl md:text-6xl lg:text-7xl flex items-center justify-center font-semibold bg-primary/30 backdrop-blur-xs shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-8 rounded-2xl">
				{value}
			</div>
			<p className="text-sm md:text-base mt-2 uppercase lg:text-lg font-medium text-center">
				{label}
			</p>
		</div>
	);
};

export default CountdownBox;
