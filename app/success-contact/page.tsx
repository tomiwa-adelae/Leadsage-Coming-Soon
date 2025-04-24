import Showcase from "@/components/Showcase";
import { ColourfulText } from "@/components/ui/colourful-text";
import { redirect } from "next/navigation";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { email } from "@/constants";
import { getContactDetails } from "@/lib/actions/contact.actions";
export const metadata: Metadata = {
	title: "Message Received | Leadsage Africa",
	description:
		"Thank you for reaching out! Our team will get back to you soon. Stay tuned for updates on Leadsage Africa",
};

interface SearchParamsProps {
	searchParams?: any;
}

const page = async ({ searchParams }: SearchParamsProps) => {
	const query = await searchParams;

	if (!query?.id) {
		return <p className="text-center text-red-500">Invalid waitlist ID</p>;
	}

	const res = await getContactDetails(query?.id);

	if (res.status === 400) redirect("/not-found");

	return (
		<div>
			<Showcase
				headline={
					<>
						Message <ColourfulText text="Received!" />
					</>
				}
				description={
					<>
						Thank you for reaching out to us! Your message has been
						successfully submitted, and our team will get back to
						you as soon as possible. If your inquiry is urgent, feel
						free to contact us directly at{" "}
						<a className="hover:underline" href={`mailto:${email}`}>
							{email}
						</a>
						.
					</>
				}
				details={
					<div>
						<Button size={"lg"} asChild>
							<Link href="/">Return to homepage</Link>
						</Button>
					</div>
				}
			/>
		</div>
	);
};

export default page;
