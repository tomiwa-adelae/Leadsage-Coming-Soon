import Showcase from "@/components/Showcase";
import { ColourfulText } from "@/components/ui/colourful-text";
import { getDetails } from "@/lib/actions/waitlist.actions";
import { redirect } from "next/navigation";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
	title: "Affiliates | LeadSage Africa",
	description:
		"Congratulations! Your spot at LeadSage Africa is secured. Get ready for an unforgettable experience for renting, buying an leasing properties",
};


const page = async () => {
		return (
		<div>
			<Showcase
				headline={
					<>
						Coming{" "}
						<ColourfulText text="Soon!" />
					</>
				}
				description={
					"Our affiliates program is coming very soon. Stay tuned to get the latest information concerning Leadsage Africa."
				}
				details={
					<div>
						<Button
							className="w-full md:w-auto"
							size={"lg"}
							asChild
						>
							<Link href="/">Return to homepage</Link>
						</Button>
					</div>
				}
			/>
			<Contact />
		</div>
	);
};

export default page;
