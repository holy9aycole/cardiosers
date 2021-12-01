import React from "react";
import PostCard from "components/PostCard";
import img1 from "assets/1.png";
import img2 from "assets/2.png";
import img3 from "assets/3.png";

export default function AllAssets() {
	const images = [img1, img2, img3, img3, img1];

	return (
		<div>
			<PostCard
				images={images}
				title="Raising the bar for IT parks in Bengaluru"
				bodyText="We relentlessly pursue innovation. By empowering our team, we
				promote"
			/>
			<h1>All assets</h1>
		</div>
	);
}
