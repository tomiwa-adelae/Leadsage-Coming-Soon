import Countdown from "@/components/Countdown";
import { ShowcaseForm } from "@/components/forms/ShowcaseForm";
import How from "@/components/How";
import Showcase from "@/components/Showcase";
import { ColourfulText } from "@/components/ui/colourful-text";
import { Separator } from "@/components/ui/separator";
import Waitlist from "@/components/Waitlist";
import Why from "@/components/Why";

const page = () => {
	return (
		<div>
			<Showcase
				headline={
					<>
						Leadsage is <ColourfulText text="coming soon..." />
					</>
				}
				description={
					"The smart way to rent, manage, and list apartments – built for both renters and landlords. Leadsage connects renters and landlords in a smart, secure, and seamless way. Whether you’re booking or listing, we make real estate simpler."
				}
				details={<ShowcaseForm />}
			/>
			<div className="container mb-16">
				<Separator />
			</div>
			<Why />
			<How />
			<Waitlist />
			<Countdown />
		</div>
	);
};

export default page;
