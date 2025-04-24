import Head from "next/head";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/ui/Header";
import { Toaster } from "@/components/ui/toaster";
import { waitlistWebsiteURL } from "@/constants";

export const metadata: Metadata = {
	title: "Leadsage - Coming soon",
	description:
		"Leadsage: Your trusted housing agency to find apartments, houses, and commercial spaces. Explore properties by category, price, and location to discover your perfect home effortlessly.",
	keywords:"leadsage, Leadsage africa, africa, housing, nigeria housing, house, landlord, renter, rent, leases, tomiwa, tomiwa adelae",
	openGraph: {
		images: "/assets/images/opengraph.png",
	},
	metadataBase: new URL(waitlistWebsiteURL),
};

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<Head>
				<meta property="og:image" content="/opengraph.png" />
				<meta
					property="og:image"
					content="/assets/images/opengraph.png"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				/>
				<meta
					data-n-head="ssr"
					data-hid="viewport"
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
				/>
			</Head>
			<body className={`${montserrat.className} antialiased`}>
				{children}
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
