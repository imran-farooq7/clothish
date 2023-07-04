import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["300", "500"], subsets: [] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
