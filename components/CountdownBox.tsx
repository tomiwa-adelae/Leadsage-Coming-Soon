import React from "react";

const CountdownBox = ({ value, label }: { value: string; label: string }) => {
	return (
		<div>
			<div className="h-full w-full bg-green-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100 text-5xl font-semibold">
				{value}
			</div>
			<p className="text-base text-center">{label}</p>
		</div>
	);
};

export default CountdownBox;
