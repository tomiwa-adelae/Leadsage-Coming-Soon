import ContactDetails from "./ContactDetails";
import ContactForm from "./forms/ContactForm";

const Contact = () => {
	return (
		<div id={"contact"} className="bg-white py-16">
			<div className="container">
				<div className="text-center">
					<h2 className="font-semibold uppercase text-3xl md:text-4xl">
						Contact Us
					</h2>
					<p className="text-base text-muted-foreground mt-1.5">
						Have questions about LeadSage Africa? We're here to
						help. Fill out the form below and our team will get back
						to you as soon as possible.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-8">
					<ContactDetails />
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default Contact;
