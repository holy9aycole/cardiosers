import React from "react";
// material
import {
	Card,
	Typography,
	CardContent,
	CardMedia,
	Button,
} from "@mui/material";
import { styled, makeStyles } from "@mui/styles";
// assests
import { ReactComponent as WebIcon } from "assets/web-icon.svg";
import { ReactComponent as ClockIcon } from "assets/clock-icon.svg";
import { ReactComponent as ShareIcon } from "assets/share-icon.svg";

const useStyles = makeStyles({
	cardMedia: {},
	cardMedia2: {},
	cardMedia3: {},
	mediaBoxoutside: {
		display: "flex",
		overflow: "hidden",
	},
	media: {},
	footer: {},
	footerdiv: {},
	footerFont: {},
	footerContainer: {},
});

export default function PostCard({ images = [] }) {
	const classes = useStyles();

	const StyledCard = styled(Card)(({ theme }) => ({
		width: "40%",
		padding: 10,
		paddingBottom: 0,
		borderRadius: "4px",
		background: "#FFFFFF",
		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
	}));

	const StyledContentDiv = styled("div")({
		backgroundImage: "url(../../assets/Mask Group 18.svg)",
	});

	const StyledButton = styled(Button)({
		position: "absolute",
		borderRadius: "50%",
		height: "60px",
		width: "50px",
		background: "#3D3DD9",
		color: "#fff",
		bottom: "16%",
		right: "5%",
		"&:hover": {
			background: "#fff",
			color: "#3D3DD9",
		},
	});

	const MediaBox = styled("div")({
		display: "flex",
		overflow: "hidden",
	});

	const CardMediaBox1 = styled("div")({
		width: "60%",
	});

	const CardMediaBox2 = styled("div")({
		width: "100%",
		marginLeft: 5,
	});

	const CardMediaBox3 = styled("div")({
		width: "100%",
		marginLeft: 5,
		marginTop: 5,
	});

	const FooterContainer = styled("div")({
		display: "flex",
		justifyContent: "space-between",
		margin: "20px 10px",
	});

	const Footer = styled("div")({
		display: "flex",
	});

	const FooterDiv = styled("div")({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginRight: 5,
	});

	const FooterFont = styled(
		<Typography color="primary" className={classes.footerFont} />
	)({
		padding: "0px 16px",
		fontSize: 13,
		color: "#3D3DD9",
	});

	const MediaDiv = styled("div")({
		flexDirection: "column",
		display: "flex",
		justifyContent: "space-between",
	});

	const ReadMore = ({ children }) => {
		const text = children;
		const [isReadMore, setIsReadMore] = React.useState(true);
		const toggleReadMore = () => {
			setIsReadMore(!isReadMore);
		};
		if (text.length > 50) {
			return (
				<Typography variant="subtitle1" color="text.secondary" component="div">
					{isReadMore ? text.slice(0, 30) : text}
					<span onClick={toggleReadMore} onKeyDown={toggleReadMore} aria-hidden>
						{isReadMore ? "[...]" : "."}
					</span>
				</Typography>
			);
		}

		return (
			<Typography variant="subtitle1" color="text.secondary" component="div">
				{text}
			</Typography>
		);
	};

	return (
		<StyledCard>
			<StyledContentDiv>
				<CardContent>
					<Typography component="div" variant="h5" color="#3D3DD9">
						Raising the bar for IT parks in Bengaluru
					</Typography>
					<ReadMore>
						We relentlessly pursue innovation. By empowering our team, we
						promote
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
						<FooterFont>getmorph.com</FooterFont>
					</FooterDiv>
					<FooterDiv>
						<ClockIcon />
						<FooterFont>1h ago</FooterFont>
					</FooterDiv>
				</Footer>
				<FooterDiv>
					<ShareIcon />
				</FooterDiv>
			</FooterContainer>
		</StyledCard>
	);
}
