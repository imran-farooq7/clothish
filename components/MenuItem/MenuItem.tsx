"use client";
import { MenuItemProps } from "@/types";
import "./MenuItem.scss";
import { useRouter } from "next/navigation";

const MenuItem = ({ title, imageUrl, size, linkUrl }: MenuItemProps) => {
	const router = useRouter();
	return (
		<div
			className={`menu-item ${size}`}
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
			onClick={() => router.push(linkUrl)}
		>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};
export default MenuItem;
