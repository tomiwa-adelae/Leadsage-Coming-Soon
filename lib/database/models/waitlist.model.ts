import { Document, Schema, model, models } from "mongoose";

// Define a TypeScript interface for type safety
export interface Waitlist extends Document {
	email: string;
}

// Define the Mongoose Schema
const WaitlistSchema = new Schema<Waitlist>(
	{
		email: { type: String, required: true, unique: true },
	},
	{ timestamps: true }
);

// Define and export the User model
const Waitlist = models.Waitlist || model<Waitlist>("Waitlist", WaitlistSchema);

export default Waitlist;
