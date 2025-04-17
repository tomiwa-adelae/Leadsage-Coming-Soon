import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShowcaseForm } from "./forms/ShowcaseForm";

const Waitlist = () => {
	return (
		<div className="bg-white py-16">
			<div className="container">
				<div>
					<h2 className="font-medium text-primary uppercase text-3xl md:text-4xl">
						Be the First to Experience the Future of Renting
					</h2>
					<p className="text-base text-muted-foreground mt-1.5">
						Join our waitlist to get early access and exclusive
						updates on the Leadsage launch.
					</p>
				</div>
				<div className="mt-8">
					<ShowcaseForm />
				</div>
			</div>
		</div>
	);
};

export default Waitlist;
