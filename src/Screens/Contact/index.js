import React from "react";
import GoogleMapReact from "google-map-react";
import { ReactComponent as RMZLogo } from "assets/icons/Contact/rmz-logo.svg";
import { ReactComponent as MapPin } from "assets/icons/Contact/map-pin.svg";
import { } from "./styles";

function Contact() {


	const CustomMarker = ({ text }) => (
		<div>
			<MapPin />
			<RMZLogo />
			{text}
		</div>
	);

	return (
		<div style={{ height: "100vh", width: "100%" }}>
			<GoogleMapReact
				defaultCenter={{
					lat: 12.9716,
					lng: 77.5946,
				}}
				defaultZoom={10}
			>
				<CustomMarker lat={12.9716} lng={77.5946} text="Test" />
			</GoogleMapReact>
		</div>
	);
}

export default Contact;
