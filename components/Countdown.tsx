"use client";

import { useEffect, useState } from "react";
import CountdownBox from "./CountdownBox";

const Countdown = () => {
	const launchDate = new Date("May 16, 2025, 11:00:00").getTime();

	const [days, setDays] = useState<any>(0);
	const [hours, setHours] = useState<any>(0);
	const [minutes, setMinutes] = useState<any>(0);
	const [seconds, setSeconds] = useState<any>(0);
	const [message, setMessage] = useState<any>(null);

	useEffect(() => {
		var updateTime = setInterval(() => {
			const now = new Date().getTime();

			const difference = launchDate - now;

			var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
			var newHours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var newMinutes = Math.floor(
				(difference % (1000 * 60 * 60)) / (1000 * 60)
			);
			var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

			setDays(newDays);
			setHours(newHours);
			setMinutes(newMinutes);
			setSeconds(newSeconds);

			if (newDays < 10) {
				setDays("0" + newDays);
			}

			if (newHours < 10) {
				setHours("0" + newHours);
			}

			if (newMinutes < 10) {
				setMinutes("0" + newMinutes);
			}

			if (newSeconds < 10) {
				setSeconds("0" + newSeconds);
			}

			if (difference <= 0) {
				clearInterval(updateTime);
				setMessage("It's world Innovation 3.0 day!!!");
				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);
			}
		});

		return () => {
			clearInterval(updateTime);
		};
	}, [launchDate]);

	return (
		<div className="container relative">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
			>
				<source
					src={
						"https://res.cloudinary.com/dh0rc6p1c/video/upload/v1744904609/leadsage/videos/3326783-hd_1920_1080_24fps_evwpz0.mp4"
					}
					type="video/mp4"
				/>
			</video>
			<div>
				<h2 className="font-medium text-primary uppercase text-3xl md:text-4xl">
					Launching Soon
				</h2>
				<p className="text-base text-muted-foreground mt-1.5">
					We're putting the final touches on something amazing.
					Leadsage is almost here. Stay ready!
				</p>
			</div>
			<div className="grid grid-cols-4 gap-4 mt-8">
				<CountdownBox value={"02"} label={"Days"} />
				<CountdownBox value={"02"} label={"Hours"} />
				<CountdownBox value={"02"} label={"Minutes"} />
				<CountdownBox value={"02"} label={"Seconds"} />
			</div>
			<div className="absolute inset-0 bg-blue/40" />
		</div>
	);
};

export default Countdown;
