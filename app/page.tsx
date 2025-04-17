import Countdown from "@/components/Countdown";
import How from "@/components/How";
import Showcase from "@/components/Showcase";
import Waitlist from "@/components/Waitlist";
import Why from "@/components/Why";

const page = () => {
	return (
		<div>
			<Showcase />
			<Why />
			<How />
			<Waitlist />
			<Countdown />
		</div>
	);
};

export default page;
