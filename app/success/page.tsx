import Showcase from "@/components/Showcase";
import { ColourfulText } from "@/components/ui/colourful-text";
import { getDetails } from "@/lib/actions/waitlist.actions";
import { redirect } from "next/navigation";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const metadata: Metadata = {
	title: "Registration Successful | Innovation 4.0",
	description:
		"Congratulations! Your spot at Innovation 4.0 is secured. Get ready for an unforgettable experience in innovation, leadership, and business growth.",
	keywords:
		"registration complete, success page, event confirmation, innovation summit, john ogunjide, tomiwa, tomiwa adelae, innovation 3.0, innovation 4.0, innovation conference, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University",
};

interface SearchParamsProps {
	searchParams?: any;
}

const page = async ({ searchParams }: SearchParamsProps) => {
	const query = await searchParams;

	if (!query?.id) {
		return <p className="text-center text-red-500">Invalid waitlist ID</p>;
	}

	const res = await getDetails(query?.id);

	if (res.status === 400) redirect("/not-found");

	return (
		<div>
			<Showcase
				headline={
					<>
						You're officially on the{" "}
						<ColourfulText text="waitlist!" />
					</>
				}
				description={
					"Congratulations! Thanks for joining Leadsage. You're now part of the exclusive group that will get first access when we go live"
				}
				details={
					<div>
						<Button asChild>
							<Link href="/">Return to homepage</Link>
						</Button>
					</div>
				}
			/>
		</div>
	);
};

export default page;
