import { Document, Schema, model, models } from "mongoose";

// Define a TypeScript interface for type safety
export interface Waitlist extends Document {
	email: string;
	name: string;
	identity: string;
	phoneNumber?: string;
}

// Define the Mongoose Schema
const WaitlistSchema = new Schema<Waitlist>(
	{
		email: { type: String, required: true, unique: true },
		name: { type: String, required: true },
		identity: { type: String, required: true },
		phoneNumber: { type: String },
	},
	{ timestamps: true }
);

// Define and export the User model
const Waitlist = models.Waitlist || model<Waitlist>("Waitlist", WaitlistSchema);

export default Waitlist;
