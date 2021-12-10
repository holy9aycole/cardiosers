import React from "react";
import { MenuItem } from "@mui/material";
import DashboardNavbar from "layouts/dashboard/DashboardNavbar";
import banner1 from "assets/images/brand_sust.png";
import {
	BannerContainer,
	BannerImage,
	Overlay,
	PropertyPage,
	StyledSelect,
	StyledSelectIcon,
} from "./styles";

function PropertyCity({ locations }) {
	return (
		<PropertyPage>
			<DashboardNavbar title="Property" />
			<BannerContainer>
				<BannerImage src={banner1} alt="" />
				<Overlay />
			</BannerContainer>
			<StyledSelect IconComponent={StyledSelectIcon}>
				{locations.map((location, index) => {
					if (index !== locations.length) {
						return (
							<MenuItem key={index} value={location} divider>
								{location}
							</MenuItem>
						);
					}
					return (
						<MenuItem key={index} value={location}>
							{location}
						</MenuItem>
					);
				})}
			</StyledSelect>
		</PropertyPage>
	);
}

export default PropertyCity;
