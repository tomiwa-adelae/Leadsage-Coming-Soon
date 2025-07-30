"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import * as RPNInput from "react-phone-number-input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	CountrySelect,
	FlagComponent,
	PhoneInput,
} from "@/components/PhoneNumberInput";
import { Input } from "@/components/ui/input";
import "react-phone-number-input/style.css";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { register } from "@/lib/actions/waitlist.actions";
import { useRouter } from "next/navigation";
import { identities } from "@/constants";
import { useState } from "react";

const FormSchema = z.object({
	name: z.string().min(2, {
		message: "Name is required.",
	}),
	email: z.string().email().min(2, {
		message: "Email is required.",
	}),
	phoneNumber: z.string().regex(/^(\+?\d{10,15})$/, {
		message: "Enter a valid phone number.",
	}),
});

export function WaitlistForm() {
	const router = useRouter();
	const { toast } = useToast();

	const [identity, setIdentity] = useState("");

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			phoneNumber: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		try {
			const details = {
				name: data.name,
				email: data.email,
				identity: identity,
				phoneNumber: data.phoneNumber,
			};
			const res = await register(details);

			if (res?.status == 400)
				return toast({
					title: "Error!",
					description: res?.message,
					variant: "destructive",
				});

			toast({
				title: "Success!",
				description: res?.message,
			});
			router.push(`/success?id=${res?.user?._id}`);
		} catch (error) {
			toast({
				title: "Error!",
				description: "An error occurred!",
				variant: "destructive",
			});
		}
	}

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
										placeholder="Your email"
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
								<FormLabel>Phone number</FormLabel>
								<FormControl>
									<RPNInput.default
										className="flex rounded-md shadow-xs"
										international
										flagComponent={FlagComponent}
										countrySelectComponent={CountrySelect}
										inputComponent={PhoneInput}
										placeholder="8012345679"
										value={field.value}
										onChange={(value) =>
											field.onChange(value)
										}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div>
						<FormLabel>Tell us who you are</FormLabel>
						<div className="flex flex-wrap items-center justify-between gap-4 mt-4">
							{identities.map((id, index) => (
								<Button
									key={index}
									type="button"
									variant={
										identity === id
											? "default"
											: "secondary"
									}
									onClick={() => setIdentity(id)}
									size={"md"}
									className="cursor-pointer"
								>
									{id}
								</Button>
							))}
						</div>
					</div>
					{/* <FormField
						control={form.control}
						name="identity"
						render={({ field }) => (
							<FormItem className="space-y-3">
								<FormLabel>Tell us who you are</FormLabel>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className="flex flex-wrap space-x-1"
									>
										{identities.map((identity, index) => (
											<FormItem
												key={index}
												className="flex items-center space-x-3 space-y-0"
											>
												<FormControl>
													<RadioGroupItem
														value={identity}
													/>
												</FormControl>
												<FormLabel className="font-normal text-base">
													{identity}
												</FormLabel>
											</FormItem>
										))}
									</RadioGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/> */}
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
