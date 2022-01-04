import React from "react";
// material
import { CardContent, CardMedia } from "@mui/material";

// assests
import { ReactComponent as WebIcon } from "assets/web-icon.svg";
import { ReactComponent as ClockIcon } from "assets/clock-icon.svg";
import { ReactComponent as ShareIcon } from "assets/share-icon.svg";

// styles
import {
	StyledCard,
	StyledContentDiv,
	MediaBox,
	CardMediaBox1,
	CardMediaBox2,
	CardMediaBox3,
	StyledButton,
	FooterContainer,
	Footer,
	FooterDiv,
	FooterFont,
	MediaDiv,
	Title,
	ReadMoreText
} from "./styles";

export default function PostCard({ images = [], title, bodyText, link, time, style }) {
	const ReadMore = ({ children }) => {
		const text = children;
		const [isReadMore, setIsReadMore] = React.useState(true);
		const toggleReadMore = () => {
			setIsReadMore(!isReadMore);
		};
		if (text.length > 50) {
			return (
				<ReadMoreText>
					{isReadMore ? text.slice(0, 30) : text}
					<span onClick={toggleReadMore} onKeyDown={toggleReadMore} aria-hidden>
						{isReadMore ? "[...]" : "."}
					</span>
				</ReadMoreText>
			);
		}

		return (
			<ReadMoreText>
				{text}
			</ReadMoreText>
		);
	};

	return (
		<StyledCard style={style}>
			<StyledContentDiv>
				<CardContent>
					<Title>
						{title}
					</Title>
					<ReadMore>
						{bodyText}
					</ReadMore>
				</CardContent>
			</StyledContentDiv>
			<MediaBox>
				<CardMediaBox1>
					<CardMedia
						component="img"
						image={images[0]}
						height="340"
						alt="img1"
					/>
				</CardMediaBox1>
				<MediaDiv>
					<CardMediaBox2>
						<CardMedia
							component="img"
							height="167.5"
							image={images[1]}
							alt="img2"
						/>
					</CardMediaBox2>
					<CardMediaBox3>
						<CardMedia
							component="img"
							height="167.5"
							image={images[2]}
							alt="img3"
						/>
					</CardMediaBox3>
				</MediaDiv>
				<StyledButton>+{images.length - 3}</StyledButton>
			</MediaBox>
			<FooterContainer>
				<Footer>
					<FooterDiv>
						<WebIcon width={24} height={24} />
						<FooterFont>{link}</FooterFont>
					</FooterDiv>
					<FooterDiv>
						<ClockIcon />
						<FooterFont>{time}</FooterFont>
					</FooterDiv>
				</Footer>
				<FooterDiv>
					<ShareIcon />
				</FooterDiv>
			</FooterContainer>
		</StyledCard>
	);
}
