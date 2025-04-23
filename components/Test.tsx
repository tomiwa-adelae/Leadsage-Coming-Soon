"use client";
import {
	Mail,
	Home,
	Key,
	Users,
	Check,
	ArrowRight,
	ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Test() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (name && email) {
			setSubmitted(true);
		}
	};

	return (
		<div className="min-h-screen bg-white font-sans">
			{/* Navigation */}
			<nav className="bg-white shadow-sm">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex items-center">
							<div className="text-2xl font-bold text-green-600">
								Leadsage
							</div>
							<div className="ml-1 text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
								Africa
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<div className="relative bg-green-700">
				<div className="absolute inset-0">
					<img
						className="w-full h-full object-cover opacity-20"
						src="/api/placeholder/1200/400"
						alt="Modern housing in Africa"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600 mix-blend-multiply"></div>
				</div>
				<div className="relative max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
					<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
						Digitizing Africa's Housing Market
					</h1>
					<p className="mt-6 text-xl text-green-100 max-w-3xl">
						Connect landlords with quality tenants and help renters
						find their perfect home. Join our waitlist to be among
						the first to experience the future of property
						management in Africa.
					</p>

					{!submitted ? (
						<div className="mt-10 max-w-xl">
							<form onSubmit={handleSubmit} className="sm:flex">
								<div className="w-full">
									<label htmlFor="name" className="sr-only">
										Full name
									</label>
									<input
										id="name"
										type="text"
										placeholder="Your full name"
										required
										className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:border-transparent rounded-t-md"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</div>
								<div className="w-full mt-3 sm:mt-0 sm:ml-3">
									<label htmlFor="email" className="sr-only">
										Email address
									</label>
									<input
										id="email"
										type="email"
										placeholder="Your email address"
										required
										className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:border-transparent rounded-b-md sm:rounded-none"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
									<button
										type="submit"
										className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700"
									>
										Join Waitlist
										<ArrowRight className="ml-2 h-4 w-4" />
									</button>
								</div>
							</form>
							<p className="mt-3 text-sm text-green-200">
								We respect your privacy. Unsubscribe at any
								time.
							</p>
						</div>
					) : (
						<div className="mt-10 bg-white p-6 rounded-lg max-w-md">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mx-auto">
								<Check className="h-6 w-6 text-green-600" />
							</div>
							<h2 className="mt-3 text-lg font-medium text-gray-900 text-center">
								Thank you for joining our waitlist!
							</h2>
							<p className="mt-2 text-sm text-gray-500 text-center">
								We'll keep you updated on our launch and send
								you exclusive early access when we're ready.
							</p>
						</div>
					)}
				</div>
			</div>

			{/* Features Section */}
			<div className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Revolutionizing Housing in Africa
						</h2>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
							Leadsage Africa brings landlords and tenants
							together on a digital platform designed for the
							unique needs of the African market.
						</p>
					</div>

					<div className="mt-12">
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							<div className="pt-6">
								<div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
									<div className="-mt-6">
										<div>
											<span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
												<Home className="h-6 w-6 text-white" />
											</span>
										</div>
										<h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
											Find Quality Housing
										</h3>
										<p className="mt-5 text-base text-gray-500">
											Browse verified listings with
											detailed information and
											high-quality images to find your
											perfect home.
										</p>
									</div>
								</div>
							</div>

							<div className="pt-6">
								<div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
									<div className="-mt-6">
										<div>
											<span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
												<Key className="h-6 w-6 text-white" />
											</span>
										</div>
										<h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
											Easy Property Management
										</h3>
										<p className="mt-5 text-base text-gray-500">
											Landlords can list properties,
											screen tenants, and manage rentals
											all in one streamlined platform.
										</p>
									</div>
								</div>
							</div>

							<div className="pt-6">
								<div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
									<div className="-mt-6">
										<div>
											<span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
												<Users className="h-6 w-6 text-white" />
											</span>
										</div>
										<h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
											Trusted Community
										</h3>
										<p className="mt-5 text-base text-gray-500">
											Built on transparency and trust with
											verified users and secure
											transactions for peace of mind.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* How It Works */}
			<div className="py-16 bg-gray-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-extrabold text-gray-900">
							How Leadsage Africa Works
						</h2>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
							Our platform makes finding and listing property
							simple and efficient.
						</p>
					</div>

					<div className="mt-12">
						<div className="relative">
							<div
								className="absolute inset-0 flex items-center"
								aria-hidden="true"
							>
								<div className="w-full border-t border-gray-300"></div>
							</div>
							<div className="relative flex justify-center">
								<span className="px-3 bg-gray-50 text-lg font-medium text-gray-900">
									For Renters
								</span>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
							<div className="bg-white overflow-hidden shadow rounded-lg">
								<div className="px-4 py-5 sm:p-6">
									<div className="flex items-center">
										<div className="flex-shrink-0 bg-green-100 rounded-md p-3">
											<div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white">
												1
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-gray-900">
												Create Profile
											</h3>
											<p className="mt-1 text-sm text-gray-500">
												Sign up and create your personal
												profile.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white overflow-hidden shadow rounded-lg">
								<div className="px-4 py-5 sm:p-6">
									<div className="flex items-center">
										<div className="flex-shrink-0 bg-green-100 rounded-md p-3">
											<div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white">
												2
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-gray-900">
												Search Properties
											</h3>
											<p className="mt-1 text-sm text-gray-500">
												Browse available listings by
												location and preferences.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white overflow-hidden shadow rounded-lg">
								<div className="px-4 py-5 sm:p-6">
									<div className="flex items-center">
										<div className="flex-shrink-0 bg-green-100 rounded-md p-3">
											<div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white">
												3
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-gray-900">
												Contact Landlords
											</h3>
											<p className="mt-1 text-sm text-gray-500">
												Connect directly with property
												owners.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white overflow-hidden shadow rounded-lg">
								<div className="px-4 py-5 sm:p-6">
									<div className="flex items-center">
										<div className="flex-shrink-0 bg-green-100 rounded-md p-3">
											<div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white">
												4
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-gray-900">
												Secure Your Home
											</h3>
											<p className="mt-1 text-sm text-gray-500">
												Finalize agreements and move
												into your new home.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="relative mt-12">
							<div
								className="absolute inset-0 flex items-center"
								aria-hidden="true"
							>
								<div className="w-full border-t border-gray-300"></div>
							</div>
							<div className="relative flex justify-center">
								<span className="px-3 bg-gray-50 text-lg font-medium text-gray-900">
									For Landlords
								</span>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
							<div className="bg-white overflow-hidden shadow rounded-lg">
								<div className="px-4 py-5 sm:p-6">
									<div className="flex items-center">
										<div className="flex-shrink-0 bg-green-100 rounded-md p-3">
											<div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white">
												1
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-gray-900">
												Register Property
											</h3>
											<p className="mt-1 text-sm text-gray-500">
												List your properties with
												detailed information.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white overflow-hidden shadow rounded-lg">
								<div className="px-4 py-5 sm:p-6">
									<div className="flex items-center">
										<div className="flex-shrink-0 bg-green-100 rounded-md p-3">
											<div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white">
												2
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-gray-900">
												Receive Inquiries
											</h3>
											<p className="mt-1 text-sm text-gray-500">
												Get notifications when potential
												tenants show interest.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white overflow-hidden shadow rounded-lg">
								<div className="px-4 py-5 sm:p-6">
									<div className="flex items-center">
										<div className="flex-shrink-0 bg-green-100 rounded-md p-3">
											<div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white">
												3
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-gray-900">
												Screen Tenants
											</h3>
											<p className="mt-1 text-sm text-gray-500">
												Review profiles and verify
												potential renters.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white overflow-hidden shadow rounded-lg">
								<div className="px-4 py-5 sm:p-6">
									<div className="flex items-center">
										<div className="flex-shrink-0 bg-green-100 rounded-md p-3">
											<div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white">
												4
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-gray-900">
												Manage Rentals
											</h3>
											<p className="mt-1 text-sm text-gray-500">
												Handle agreements and property
												management online.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Waitlist Benefits */}
			<div className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Join Our Waitlist Today
						</h2>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
							Be the first to experience the future of property
							management in Africa and receive exclusive benefits.
						</p>
					</div>

					<div className="mt-12 bg-green-50 rounded-lg overflow-hidden shadow">
						<div className="px-4 py-5 sm:p-6">
							<h3 className="text-lg font-medium text-gray-900">
								Benefits of Early Access
							</h3>
							<div className="mt-5">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<ChevronRight className="h-5 w-5 text-green-500" />
									</div>
									<div className="ml-3 text-base text-gray-700">
										<p>
											Priority access to all premium
											features during launch
										</p>
									</div>
								</div>
								<div className="mt-3 flex items-start">
									<div className="flex-shrink-0">
										<ChevronRight className="h-5 w-5 text-green-500" />
									</div>
									<div className="ml-3 text-base text-gray-700">
										<p>
											3 months free premium subscription
										</p>
									</div>
								</div>
								<div className="mt-3 flex items-start">
									<div className="flex-shrink-0">
										<ChevronRight className="h-5 w-5 text-green-500" />
									</div>
									<div className="ml-3 text-base text-gray-700">
										<p>
											Exclusive promotions and discounts
											on future services
										</p>
									</div>
								</div>
								<div className="mt-3 flex items-start">
									<div className="flex-shrink-0">
										<ChevronRight className="h-5 w-5 text-green-500" />
									</div>
									<div className="ml-3 text-base text-gray-700">
										<p>
											Opportunity to provide feedback and
											shape the platform
										</p>
									</div>
								</div>
								<div className="mt-3 flex items-start">
									<div className="flex-shrink-0">
										<ChevronRight className="h-5 w-5 text-green-500" />
									</div>
									<div className="ml-3 text-base text-gray-700">
										<p>
											Early access to new features as
											they're developed
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{!submitted && (
						<div className="mt-12 text-center">
							<a
								href="#top"
								onClick={(e) => {
									e.preventDefault();
									window.scrollTo({
										top: 0,
										behavior: "smooth",
									});
								}}
								className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
							>
								<Mail className="mr-2 h-5 w-5" />
								Join Waitlist Now
							</a>
						</div>
					)}
				</div>
			</div>

			{/* FAQ (Collapsed) */}
			<div className="py-16 bg-gray-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Frequently Asked Questions
						</h2>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
							Answers to common questions about Leadsage Africa
						</p>
					</div>
					<div className="mt-12 max-w-3xl mx-auto">
						{/* Add collapsible FAQ sections here if needed */}
						<div className="bg-white shadow overflow-hidden sm:rounded-md">
							<div className="px-4 py-5 sm:px-6">
								<p className="text-sm text-gray-500">
									Coming soon! Our FAQ section is being
									developed as we gather the most common
									questions from our community.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-white">
				<div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
					<div className="xl:grid xl:grid-cols-3 xl:gap-8">
						<div className="space-y-8 xl:col-span-1">
							<div className="flex items-center">
								<div className="text-2xl font-bold text-green-600">
									Leadsage
								</div>
								<div className="ml-1 text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
									Africa
								</div>
							</div>
							<p className="text-gray-500 text-base">
								Digitalizing Africa's housing market. Connecting
								landlords with renters for a seamless property
								experience.
							</p>
							<div className="flex space-x-6">
								<a
									href="#"
									className="text-gray-400 hover:text-gray-500"
								>
									<span className="sr-only">Facebook</span>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
								<a
									href="#"
									className="text-gray-400 hover:text-gray-500"
								>
									<span className="sr-only">Instagram</span>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
								<a
									href="#"
									className="text-gray-400 hover:text-gray-500"
								>
									<span className="sr-only">Twitter</span>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</a>
							</div>
						</div>
						<div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
							<div className="md:grid md:grid-cols-2 md:gap-8">
								<div>
									<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
										Platform
									</h3>
									<ul className="mt-4 space-y-4">
										<li>
											<a
												href="#"
												className="text-base text-gray-500 hover:text-gray-900"
											>
												Features
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-base text-gray-500 hover:text-gray-900"
											>
												How It Works
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-base text-gray-500 hover:text-gray-900"
											>
												Pricing
											</a>
										</li>
									</ul>
								</div>
								<div className="mt-12 md:mt-0">
									<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
										Support
									</h3>
									<ul className="mt-4 space-y-4">
										<li>
											<a
												href="#"
												className="text-base text-gray-500 hover:text-gray-900"
											>
												FAQ
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-base text-gray-500 hover:text-gray-900"
											>
												Contact
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-base text-gray-500 hover:text-gray-900"
											>
												Privacy Policy
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="md:grid md:grid-cols-2 md:gap-8">
								<div>
									<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
										Company
									</h3>
									<ul className="mt-4 space-y-4">
										<li>
											<a
												href="#"
												className="text-base text-gray-500 hover:text-gray-900"
											>
												About
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-base text-gray-500 hover:text-gray-900"
											>
												Blog
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-base text-gray-500 hover:text-gray-900"
											>
												Partners
											</a>
										</li>
									</ul>
								</div>
								<div className="mt-12 md:mt-0">
									<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
										Contact
									</h3>
									<ul className="mt-4 space-y-4">
										<li>
											<a
												href="mailto:info@leadsageafrica.com"
												className="text-base text-gray-500 hover:text-gray-900"
											>
												info@leadsageafrica.com
											</a>
										</li>
										<li>
											<p className="text-base text-gray-500">
												Coming soon to your city
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-12 border-t border-gray-200 pt-8">
						<p className="text-base text-gray-400 xl:text-center">
							&copy; 2025 Leadsage Africa. All rights reserved.
						</p>
					</div>
				</div>
			</footer>

			{/* Float-back-to-top Button */}
			<button
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className="fixed bottom-8 right-8 p-2 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 15l7-7 7 7"
					/>
				</svg>
			</button>

			{/* Additional CTA for Mobile - Fixed to bottom */}
			{!submitted && (
				<div className="sm:hidden fixed bottom-0 inset-x-0 pb-2 bg-white shadow-lg">
					<div className="px-4 py-4">
						<button
							onClick={() =>
								window.scrollTo({ top: 0, behavior: "smooth" })
							}
							className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
						>
							Join Waitlist
							<ArrowRight className="ml-2 h-4 w-4" />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
