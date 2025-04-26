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
						Affiliate Program Terms of{" "}
						<ColourfulText text="Services" />
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
						Welcome to the LeadSage Africa Affiliate Program. By
						signing up to become an affiliate, you agree to comply
						with and be bound by the following Terms and Conditions.
						Please read them carefully before participating.
					</p>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							1. Definitions
						</h4>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>
								<strong className="text-black">
									“Affiliate”
								</strong>{" "}
								refers to a person or entity who applies and is
								accepted into the LeadSage Africa Affiliate
								Program.
							</li>
							<li>
								<strong className="text-black">
									“Platform”
								</strong>{" "}
								refers to the LeadSage Africa website, mobile
								app, and associated services.
							</li>
							<li>
								<strong className="text-black">
									“Referral”
								</strong>{" "}
								refers to a new user or customer introduced to
								LeadSage Africa via the affiliate’s unique
								tracking link.
							</li>
							<li>
								<strong className="text-black">
									“Commission”
								</strong>{" "}
								refers to the payment earned by the affiliate
								for successful referrals.
							</li>
						</ul>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							2. Eligibility
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							To become an affiliate, you must:
						</p>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>Be at least 18 years old.</li>
							<li>
								Provide accurate and complete registration
								information.
							</li>
							<li>
								Operate a legitimate platform (e.g., blog,
								website, social media account, etc.).
							</li>
							<li>
								Comply with all applicable local and
								international laws.
							</li>
						</ul>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							3. Enrollment and Approval
						</h4>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>
								Your application to the affiliate program is
								subject to review and approval.
							</li>
							<li>
								We reserve the right to accept or reject any
								application at our sole discretion without
								providing reasons.
							</li>
						</ul>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							4. Affiliate Responsibilities
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							Affiliates agree to:
						</p>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>
								Promote LeadSage Africa services ethically and
								responsibly.
							</li>
							<li>
								Use only approved marketing materials provided
								by LeadSage Africa.
							</li>
							<li>
								Not make false, misleading, or exaggerated
								claims about our services.
							</li>
							<li>
								Not engage in spam, unsolicited emails, or
								misleading advertising.
							</li>
						</ul>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							5. Referral Tracking
						</h4>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>
								You will be provided with a unique affiliate
								link.
							</li>
							<li>
								Referrals must use your link to be properly
								tracked and credited.
							</li>
							<li>
								We are not responsible for any tracking failures
								due to cookie deletion, browser settings, or
								technical issues outside our control.
							</li>
						</ul>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							6. Commission and Payment
						</h4>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>
								Affiliates will earn commissions based on
								successful referrals that result in qualified
								actions (e.g., property rentals, artisan
								bookings, service subscriptions).
							</li>
							<li>
								Commission rates will be outlined in your
								affiliate dashboard or communicated via email.
							</li>
							<li>
								Payments will be made monthly [or Insert payment
								schedule], provided the minimum payout threshold
								is met.
							</li>
							<li>
								Affiliates are responsible for any tax
								liabilities resulting from commission earnings.
							</li>
						</ul>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							7. Prohibited Activities
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							You may not:
						</p>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>
								Bid on LeadSage Africa’s branded keywords for
								paid advertising.
							</li>
							<li>
								Bid on LeadSage Africa’s branded keywords for
								paid advertising.
							</li>
							<li>
								Misrepresent your relationship with LeadSage
								Africa.
							</li>
							<li>
								Engage in activities that harm the reputation of
								LeadSage Africa.
							</li>
						</ul>
						<p className="text-base text-muted-foreground mt-1.5">
							Violation of these rules may result in immediate
							termination and forfeiture of unpaid commissions.
						</p>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							8. Intellectual Property
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							Affiliates may use LeadSage Africa’s logos, banners,
							and marketing content solely for promoting our
							services. Unauthorized modification or misuse of
							brand assets is prohibited.
						</p>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							9. Termination
						</h4>
						<ul className="grid gap-4 mt-4 list-disc container text-base text-muted-foreground">
							<li>
								Either party may terminate participation in the
								affiliate program at any time with written
								notice.
							</li>
							<li>
								LeadSage Africa reserves the right to suspend or
								terminate any affiliate account for breach of
								these terms, fraudulent activity, or harmful
								behavior.
							</li>
						</ul>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							10. Limitation of Liability
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							LeadSage Africa shall not be liable for any
							indirect, incidental, or consequential damages
							arising from the affiliate relationship.
						</p>
					</div>
					<div className="mt-8">
						<h4 className="font-semibold uppercase text-lg md:text-xl">
							11. Changes to the Terms
						</h4>
						<p className="text-base text-muted-foreground mt-1.5">
							We may modify these Affiliate Terms and Conditions
							at any time. Changes will be effective immediately
							upon posting. Continued participation in the program
							constitutes acceptance of the updated terms.
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
