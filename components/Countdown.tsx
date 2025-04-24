"use client";

import { useEffect, useState } from "react";
import CountdownBox from "./CountdownBox";
import { Button } from "./ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

const Countdown = () => {
	const launchDate = new Date("July 16, 2025, 11:00:00").getTime();

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
		<div className="min-h-[70vh] relative py-16">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
			>
				<source
					src={
						"https://res.cloudinary.com/dh0rc6p1c/video/upload/v1744907189/leadsage/videos/856661-hd_1920_1080_25fps_t2v6ti.mp4"
					}
					type="video/mp4"
				/>
			</video>
			<div className="grid container text-white z-50 text-center">
				<div className="z-50">
					<div>
						<h2 className="font-medium uppercase text-3xl md:text-4xl">
							Launching Soon
						</h2>
						<p className="text-base mt-1.5">
							We're putting the final touches on something
							amazing. Leadsage Africa is almost here. Stay ready!
						</p>
					</div>
					<div className="grid grid-cols-4 gap-4 md:gap-10 mt-8 mb-20">
						<CountdownBox value={days} label="Days" />
						<CountdownBox value={hours} label="Hours" />
						<CountdownBox value={minutes} label="Minutes" />
						<CountdownBox value={seconds} label="Seconds" />
					</div>
					<div className="mx-auto md:max-w-2xl">
						<Button size={"lg"} asChild>
							<Link href="#waitlist">
								<Mail /> Join waitlist now
							</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className="absolute inset-0 bg-black/40" />
		</div>
	);
};

export default Countdown;
