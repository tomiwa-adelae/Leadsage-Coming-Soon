export const why = [
	{
		icon: "/assets/icons/house.svg",
		name: "House",
		title: "Smart Listings",
		description:
			"Easily discover properties tailored to your preferences — verified listings, real-time availability, and rich property details.",
	},
	{
		icon: "/assets/icons/hands.svg",
		name: "Verification",
		title: "Trusted Connections",
		description:
			"Every landlord and renter is verified. Say goodbye to scams and shady deals.",
	},
	{
		icon: "/assets/icons/chat.svg",
		name: "Money-bag",
		title: "Seamless Communication",
		description:
			"In-app messaging makes it easy for both parties to chat, ask questions, and close deals faster.",
	},
	{
		icon: "/assets/icons/dashboard.svg",
		name: "Dashboard",
		title: "Powerful Dashboards",
		description:
			"Whether you're listing or renting, manage everything with ease: from bookings to payments and beyond.",
	},
];

export const how = [
	{
		image: "/assets/images/join.png",
		title: "Sign Up & Get Verified",
		description:
			"Create an account in minutes and verify your profile. Trust and safety come first.",
		number: "01",
	},
	{
		image: "/assets/images/list.png",
		title: "List or Book",
		description:
			"Landlords can list properties in a few steps. Renters can search, browse, and book instantly.",
		number: "02",
	},
	{
		image: "/assets/images/chat.webp",
		title: "Chat & Finalize",
		description:
			"Use the platform’s messaging system to talk, schedule viewings, or close deals.",
		number: "03",
	},
	{
		image: "/assets/images/dashboard.webp",
		title: "Manage Everything Easily",
		description:
			"Track bookings, payments, and updates from your personalized dashboard.",
		number: "04",
	},
];

export const twitterURL = "https://x.com/leadsageafrica";
export const instagramURL = "https://instagram.com/leadsageafrica";
export const linkedinURL = "https://twitter.com/";

export const websiteURL = "https://leadsageafrica.com";
export const email = "info@leadsageafrica.com";
export const israelNumber = "+234 806 483 9141";
export const tomiwaNumber = "+234 802 783 6001";
export const waitlistWebsiteURL = "https://leadsageafrica.com";

export const navLinks = [
	{
		slug: "#",
		label: "Home",
	},
	{
		slug: "#about",
		label: "About",
	},
	{
		slug: "#how",
		label: "How",
	},
	{
		slug: "#why",
		label: "Why",
	},
	{
		slug: "#faqs",
		label: "Faqs",
	},
	{
		slug: "#contact",
		label: "Contact",
		icon: "",
	},
];

export const faqs = [
	{
		question: "How does LeadSage Africa work?",
		answer: "LeadSage Africa connects tenants with verified property listings and helps landlords manage their rentals. Simply search for properties, filter by location and price, and contact the property owner or agent directly.",
	},
	{
		question: "Are all property listings verified?",
		answer: "Yes, we prioritize transparency by verifying listings to ensure they are legitimate and accurately represented. Properties with a verification badge have been reviewed for authenticity.",
	},
	{
		question: "Can I list my property on LeadSage Africa?",
		answer: "Absolutely! If you're a landlord or agent, you can create an account and list your property with details, images, and pricing. Our platform also provides tools to track inquiries and manage rent collection.",
	},
	{
		question: "Does LeadSage Africa offer flexible payment plans?",
		answer: "Yes, some properties offer flexible payment options, including monthly, quarterly, and annual payment plans. You can use filters to find listings that match your preferred payment structure.",
	},
	{
		question: "Is it free to browse properties?",
		answer: "Yes! Browsing properties on LeadSage Africa is completely free. You only pay when you decide to rent or buy a property through the platform.",
	},
	{
		question: "How can I contact customer support?",
		answer: "You can reach our support team via live chat, email, or phone. We’re available 24/7 to assist with any inquiries, disputes, or technical issues.",
	},
];

export const contactDetails = [
	{
		icon: "/assets/icons/location.svg",
		title: "Head Office Address",
		details: [
			{
				detail: "51A, Agboola Ajumobi, Magodo GRA, Phase 1, Shangisha, Lagos State, Nigeria.",
			},
		],
		name: "location",
	},
	{
		icon: "/assets/icons/email.svg",
		title: "Email addresses",
		details: [{ detail: email }],
		name: "email",
	},
	{
		icon: "/assets/icons/phone.svg",
		title: "Phone Numbers",
		details: [{ detail: israelNumber }, { detail: tomiwaNumber }],
		name: "phone",
	},
];

export const socialLinks = [
	{
		name: "X",
		icon: "/assets/icons/twitter.svg",
		slug: twitterURL,
	},
	{
		name: "Instagram",
		icon: "/assets/icons/instagram.svg",
		slug: instagramURL,
	},
	{
		name: "Linkedin",
		icon: "/assets/icons/linkedin.svg",
		slug: linkedinURL,
	},
];

export const footerDetails = [
	{
		title: "Company",
		links: [
			{
				slug: "#about",
				label: "About",
			},
			{
				slug: "#why",
				label: "Why",
			},
			{
				slug: "#how",
				label: "How",
			},
			{
				slug: "#waitlist",
				label: "Join Waitlist",
			},
			{
				slug: "#faqs",
				label: "FAQS",
			},
			{
				slug: "#contact",
				label: "Contact",
			},
		],
	},
	{
		title: "Affiliate",
		links: [
			{
				slug: "",
				label: "Affiliate",
			},
			{
				slug: "/terms-and-conditions",
				label: "Terms and Conditions",
			},
			{
				slug: "/privacy-policy",
				label: "Privacy Policy",
			},
		],
	},
	{
		title: "Contact",
		links: [
			{
				slug: `mailto:${email}`,
				label: email,
			},
			{
				slug: `tel:${israelNumber}`,
				label: israelNumber,
			},
			{
				slug: `tel:${tomiwaNumber}`,
				label: tomiwaNumber,
			},
		],
	},
];

export const identities = ["Landlord", "Renter", "Agent"];
