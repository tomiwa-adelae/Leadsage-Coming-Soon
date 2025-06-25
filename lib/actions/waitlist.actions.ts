"use server";

import Mailjet from "node-mailjet";
import { connectToDatabase } from "../database";
import Waitlist from "../database/models/waitlist.model";
import { emailTemplate, generateAdminWaitlistTemplate } from "@/templates";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

export const register = async (details: {
	name: string;
	email: string;
	identity: string;
}) => {
	try {
		await connectToDatabase();

		if (!details.email || !details.name || !details.identity)
			return {
				status: 400,
				message: "Oops! Please enter all fields.",
			};

		const userExist = await Waitlist.findOne({ email: details.email });

		if (userExist)
			return {
				status: 400,
				message: "Oops! You have already registered.",
			};

		const user = await Waitlist.create(details);

		if (!user)
			return {
				status: 400,
				message: "Oops! User with that email is not found.",
			};

		// **Send Confirmation Email to Student**
		await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: process.env.SENDER_EMAIL_ADDRESS!,
						Name: process.env.COMPANY_NAME!,
					},
					To: [
						{
							Email: user.email,
							Name: user.name,
						},
					],
					Subject: `You’re officially on the LeadSage Africa waitlist! `,
					TextPart: `You’re officially on the LeadSage Africa waitlist! `,
					HTMLPart: emailTemplate(user.name),
				},
			],
		});

		// **Send Confirmation Email to Student**
		await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: process.env.SENDER_EMAIL_ADDRESS!,
						Name: process.env.COMPANY_NAME!,
					},
					To: [
						{
							Email: process.env.ADMIN_EMAIL_ADDRESS!,
							Name: Israel Ibitoye,
						},
					],
					Subject: `New Waitlist Form Submission on the LeadSage Africa!`,
					TextPart: `New Waitlist Form Submission on the LeadSage Africa! `,
					HTMLPart: generateAdminWaitlistTemplate(user.name, user?.email, user?.identity),
				},
			],
		});

		return {
			status: 200,
			user: JSON.parse(JSON.stringify(user)),
			message: "You're officially on the waitlist!",
		};
	} catch (error: any) {
		return {
			status: error?.status || 400,
			message: error?.message || "Oops! User not found! Try again later.",
		};
	}
};

export const getDetails = async (id: any) => {
	try {
		await connectToDatabase();

		const user = await Waitlist.findById(id);

		if (!user)
			return {
				status: 400,
				message: "Your details are not found. Try again later.",
			};

		return JSON.parse(JSON.stringify(user));
	} catch (error: any) {
		return {
			status: error?.status || 400,
			message: error?.message || "Oops! User not found! Try again later.",
		};
	}
};
