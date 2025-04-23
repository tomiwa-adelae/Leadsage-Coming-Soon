import About from "@/components/About";
import Contact from "@/components/Contact";
import Countdown from "@/components/Countdown";
import FAQs from "@/components/FAQs";
import { ShowcaseForm } from "@/components/forms/ShowcaseForm";
import How from "@/components/How";
import Showcase from "@/components/Showcase";
import Test from "@/components/Test";
import { Button } from "@/components/ui/button";
import { ColourfulText } from "@/components/ui/colourful-text";
import { Separator } from "@/components/ui/separator";
import Waitlist from "@/components/Waitlist";
import Why from "@/components/Why";
import { Mail } from "lucide-react";
import Link from "next/link";

const page = () => {
	return (
		<div>
			<Showcase
				headline={
					<>
						Digitizing Africa's Housing{" "}
						<ColourfulText text="Market" />
					</>
				}
				description={
					"Connect landlords with quality tenants and help renters find their perfect home. Join our waitlist to be among the first to experience the future of property management in Africa."
				}
				details={
					<Button size={"lg"} asChild>
						<Link href="#waitlist">
							<Mail /> Join waitlist now
						</Link>
					</Button>
				}
			/>
			{/* <div className="container mb-16">
				<Separator />
			</div> */}
			<About />
			<How />
			<Why />
			<Countdown />
			<Waitlist />
			{/* <Test /> */}
			<FAQs />
			<Contact />
		</div>
	);
};

export default page;
