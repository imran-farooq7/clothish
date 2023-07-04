import Link from "next/link";

import Image from "next/image";
import "./Navbar.scss";

const Navbar = () => {
	const currentUser = false;
	return (
		<div>
			<div className="navbar">
				<Link href="/" className="logo-container">
					<Image
						src="/crown.svg"
						alt="logo"
						className="logo"
						width="70"
						height="40"
					/>
				</Link>
				<div className="options">
					<Link href="/shop" className="option">
						SHOP
					</Link>
					<Link href="/contact" className="option">
						CONTACT
					</Link>
					{currentUser ? (
						<div className="option">SIGN OUT</div>
					) : (
						<Link href="/signin" className="option">
							SIGN IN
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
export default Navbar;
