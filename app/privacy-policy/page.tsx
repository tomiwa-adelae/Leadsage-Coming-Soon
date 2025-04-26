import Showcase from "@/components/Showcase";
import { ColourfulText } from "@/components/ui/colourful-text";
import {
	email,
	israelNumber,
	tomiwaNumber,
	waitlistWebsiteURL,
} from "@/constants";
import React from "react";

const page = () => {
	return (
		<div>
			<Showcase
				headline={
					<>
						Privacy Policy for LeadSage{" "}
						<ColourfulText text="Africa" />
					</>
				}
				description={
					"All the stuff you don’t want to read, but probably should"
				}
			/>
			<div className="bg-white py-16">
				<div className="container max-w-5xl">
					<h2 className="font-semibold uppercase text-xl md:text-2xl">
						Last update: April 2025
					</h2>
					<p className="text-base text-muted-foreground mt-1.5">
						At LeadSage Africa, your privacy is important to us.
						This Privacy Policy explains how we collect, use,
						disclose, and safeguard your information when you visit
						or use our platform, including LeadSage Rentals and our
						Artisan services. By using our services, you agree to
						the practices outlined in this policy.
					</p>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							1. Information We Collect
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							We may collect and process the following types of
							information:
						</p>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>Full name</li>
							<li>Phone number</li>
							<li>Email address</li>
							<li>Residential or business address</li>
							<li>Identification documents (for verification)</li>
							<li>
								Payment information (processed securely via
								third-party providers)
							</li>
						</ul>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							2. How We Use Your Information
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							We use your information to:
						</p>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>
								Provide and improve our property rental and
								artisan services
							</li>
							<li>
								Facilitate communication between users (e.g.,
								landlords, tenants, artisans)
							</li>
							<li>Verify identity and eligibility</li>
							<li>
								Customize user experience and recommendations
							</li>
							<li>Process transactions and send invoices</li>
							<li>
								Communicate important updates and marketing
								offers (with your consent)
							</li>
							<li>Detect and prevent fraudulent activities</li>
							<li>
								Comply with legal and regulatory obligations
							</li>
						</ul>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							3. How We Share Your Information
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							We do not sell your personal information. However,
							we may share information with:
						</p>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>
								Trusted service providers and partners assisting
								us in operations
							</li>
							<li>
								Licensed realtors, property owners, and artisans
								(for service fulfillment)
							</li>
							<li>
								Law enforcement or regulatory agencies if
								required by law
							</li>
							<li>
								Prospective business partners or affiliates
								under confidentiality obligations
							</li>
						</ul>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							4. Cookies and Tracking Technologies
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							We use cookies and similar technologies to:
						</p>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>Improve functionality and user experience</li>
							<li>
								Analyze usage trends and website performance
							</li>
							<li>
								Remember your preferences for faster service
							</li>
							<li>
								Not engage in spam, unsolicited emails, or
								misleading advertising.
							</li>
						</ul>
						<p className="text-base text-muted-foreground mt-1.5">
							You can manage cookie preferences through your
							browser settings.
						</p>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							5. Data Security
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							We implement reasonable technical and organizational
							measures to protect your personal information from
							unauthorized access, loss, misuse, or disclosure.
							However, no online system is completely secure. You
							share information at your own risk.
						</p>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							6. Your Rights and Choices
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							You have the right to:
						</p>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>Access the personal data we hold about you</li>
							<li>
								Request correction or update of inaccurate data
							</li>
							<li>
								Request deletion of your data (subject to legal
								obligations)
							</li>
							<li>
								Withdraw consent for marketing communications
							</li>
						</ul>
						<p className="text-base text-muted-foreground mt-1.5">
							To exercise any of these rights, please contact us
							using the details below.
						</p>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							7. Third-Party Links
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							Our platform may contain links to third-party
							websites or services. We are not responsible for
							their privacy practices. We encourage you to read
							their privacy policies separately.
						</p>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							8. Children’s Privacy
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							Our services are not directed at individuals under
							18 years old. We do not knowingly collect personal
							information from children.
						</p>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							9. Changes to This Privacy Policy
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							We may update this Privacy Policy from time to time.
							Any changes will be posted here, and your continued
							use of the platform indicates your acceptance of the
							updated policy.
						</p>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							12. Contact Information
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							For questions regarding the affiliate program,
							please contact:
						</p>
						<p className="text-base font-semibold text-muted-foreground mt-2">
							LeadSage Africa Affiliate Support
						</p>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>
								<a
									className="hover:text-primary"
									href={`mailto:${email}`}
								>
									{email}
								</a>
							</li>
							<li>
								<a
									className="hover:text-primary"
									href={`tel:${israelNumber}`}
								>
									{israelNumber}
								</a>
								,{" "}
								<a
									className="hover:text-primary"
									href={`tel:${tomiwaNumber}`}
								>
									{tomiwaNumber}
								</a>
							</li>
							<li>
								<a
									className="hover:text-primary"
									href={waitlistWebsiteURL}
								>
									{waitlistWebsiteURL}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
