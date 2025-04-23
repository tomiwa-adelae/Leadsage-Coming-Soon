"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { register } from "@/lib/actions/waitlist.actions";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export function ShowcaseForm({ bg = "bg-white text-black" }: { bg?: string }) {
	const router = useRouter();
	const { toast } = useToast();
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async () => {
		setLoading(true);
		try {
			if (email) {
				const res = await register(email);
				setLoading(false);
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
			} else
				return toast({
					title: "Please enter your email address",
					variant: "destructive",
				});
		} catch (error) {
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div
			className={`pr-2 w-full py-2 pl-3 rounded-2xl lg:rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ${bg}`}
		>
			<div className="relative">
				<Input
					className={`${
						bg === "bg-white text-black" &&
						"placeholder:text-muted-foreground"
					} border-none bg-transparent`}
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Button
					disabled={!email && loading}
					size={"lg"}
					className="w-full mt-2 lg:mt-0 lg:w-auto lg:absolute top-0 right-0 cursor-pointer"
					type="button"
					onClick={handleSubmit}
				>
					{loading ? "Joining..." : "Join"}
				</Button>
			</div>
		</div>
	);
}
