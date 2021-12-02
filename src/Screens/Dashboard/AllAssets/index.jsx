import React from "react";
import PostCard from "components/PostCard";
import img1 from "assets/1.png";
import img2 from "assets/2.png";
import img3 from "assets/3.png";
import { Assets } from 'Screens/Dashboard/AllAssets/styles'

export default function AllAssets() {
	const images = [img1, img2, img3, img3, img1];

	return (
		<div>
			<Assets>All assets</Assets>
			<PostCard
				images={images}
				title="Raising the bar for IT parks in Bengaluru"
				bodyText="We relentlessly pursue innovation. By empowering our team, we
				promote"
				link="getmorph.com"
				time="1h ago"
				style={{ margin: '40px 0px' }}
			/>
			<PostCard
				images={images}
				title="Raising the bar for IT parks in Bengaluru"
				bodyText="We relentlessly pursue innovation. By empowering our team, we
				promote"
				link="getmorph.com"
				time="1h ago"
				style={{ margin: '40px 0px' }}
			/>
		</div>
	);
}
