"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
	name: z.string().min(2, {
		message: "Name is required.",
	}),
	email: z.string().email().min(2, {
		message: "Email is required.",
	}),
	phoneNumber: z
		.string()
		.regex(/^(\+?\d{10,15})$/, { message: "Enter a valid phone number." })
		.refine(isValidPhoneNumber, {
			message: "Invalid phone number",
		}),
	identity: z
		.string()
		.min(2, { message: "Please select what you would want to join as" }),
});

export function WaitlistForm() {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			phoneNumber: "",
			identity: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {}

	return (
		<div className="max-w-2xl mx-auto">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Your full name"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type={"email"}
										placeholder="Your full name"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phoneNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<PhoneInput
										placeholder="Enter phone number"
										value={field.value}
										onChange={(phone) => {
											field.onChange(phone);
										}}
										defaultCountry="NG"
										className="flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-base sm:text-sm"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="identity"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Identity</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Who are you?" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="Landlord">
											Landlord
										</SelectItem>
										<SelectItem value="Tenant">
											Tenant
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						disabled={form.formState.isSubmitting}
						type="submit"
						className="w-full mt-4"
						size={"lg"}
					>
						{form.formState.isSubmitting
							? "Joining..."
							: "Join waitlist"}
					</Button>
				</form>
			</Form>
		</div>
	);
}
