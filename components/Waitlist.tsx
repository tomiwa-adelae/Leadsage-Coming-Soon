import { WaitlistForm } from "./forms/WaitlistForm";

const Waitlist = () => {
	return (
		<div className="bg-white py-16" id="waitlist">
			<div className="container">
				<div className="text-center">
					<h2 className="font-semibold uppercase text-3xl md:text-4xl">
						Join Our Waitlist Today
					</h2>
					<p className="text-base text-muted-foreground mt-1.5">
						Be the first to experience the future of property
						management in Africa and receive exclusive benefits.
					</p>
				</div>
				<div className="mt-8">
					<WaitlistForm />
				</div>
			</div>
		</div>
	);
};

export default Waitlist;
