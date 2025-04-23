import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";
const FAQs = () => {
	return (
		<div
			id="faqs"
			className="bg-[#204B41] text-white py-20 overflow-hidden relative"
		>
			<div className="container">
				<div className="text-center">
					<h2 className="font-semibold uppercase text-3xl md:text-4xl">
						Frequently Asked Questions
					</h2>
					<p className="text-base text-gray-200 mt-2.5">
						Answers to common questions about Leadsage Africa
					</p>
				</div>
				<div className="mt-8">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map(({ question, answer }, index) => (
							<AccordionItem value={`${index}`} key={index}>
								<AccordionTrigger>{question}</AccordionTrigger>
								<AccordionContent>
									{answer} to the WAI-ARIA design pattern.
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default FAQs;
