import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ShowcaseForm() {
	return (
		<div className="pr-2 w-full py-2 pl-3 rounded-sm lg:rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
			<div className="relative">
				<Input
					className="border-none"
					type="email"
					placeholder="Email"
				/>
				<Button
					size={"lg"}
					className="w-full mt-2 lg:mt-0 lg:w-auto lg:absolute top-0 right-0"
					type="submit"
				>
					Subscribe
				</Button>
			</div>
		</div>
	);
}
