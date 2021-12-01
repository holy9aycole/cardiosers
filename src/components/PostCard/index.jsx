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
	cardMedia: {
		width: "60%",
	},
	cardMedia2: {
		width: "100%",
		marginLeft: 5,
	},
	cardMedia3: {
		width: "100%",
		marginLeft: 5,
		marginTop: 5,
	},
	mediaBoxoutside: {
		display: "flex",
		overflow: "hidden",
	},
	media: {
		flexDirection: "column",
		display: "flex",
		justifyContent: "space-between",
	},
	footer: {
		display: "flex",
	},
	footerdiv: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginRight:5
	},
	footerFont: {
		padding:'0px 16px',
		fontSize: 13,
		color: "#3D3DD9"
	},
	footerContainer: {
		display: "flex",
		justifyContent: "space-between",
		margin: '20px 10px',
	},
});

export default function PostCard({ images = [] }) {
	const classes = useStyles();

	const StyledCard = styled(Card)(({ theme }) => ({
		width: "40%",
		padding: 10,
		paddingBottom:0,
		borderRadius: "4px",
		background: "#FFFFFF",
		[theme.breakpoints.down("md")]: {
			width: "50%",
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

	return (
		<StyledCard>
			<StyledContentDiv>
				<CardContent>
					<Typography component="div" variant="h5" color="#3D3DD9">
						Raising the bar for IT parks in Bengaluru
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
					>
						We relentlessly pursue innovation. By empowering our team, we
						promote [...]
					</Typography>
				</CardContent>
			</StyledContentDiv>
			<div className={classes.mediaBoxoutside}>
				<CardMedia
					component="img"
					height="340"
					image={images[0]}
					alt="img1"
					className={classes.cardMedia}
				/>
				<div className={classes.media}>
					<CardMedia
						component="img"
						height="167.5"
						image={images[1]}
						alt="img2"
						className={classes.cardMedia2}
					/>
					<CardMedia
						component="img"
						height="167.5"
						image={images[2]}
						alt="img3"
						className={classes.cardMedia3}
					/>
				</div>
				<StyledButton>+{images.length - 3}</StyledButton>
			</div>
			<div className={classes.footerContainer}>
				<div className={classes.footer}>
					<div className={classes.footerdiv}>
						<WebIcon />
						<Typography color="primary" className={classes.footerFont}>
							getmorph.com
						</Typography>
					</div>
					<div className={classes.footerdiv}>
						<ClockIcon />
						<Typography color="primary" className={classes.footerFont}>
						1h ago
						</Typography>
					</div>
				</div>
				<div className={classes.footerdiv}>
					<ShareIcon />
				</div>
			</div>
		</StyledCard>
	);
}
