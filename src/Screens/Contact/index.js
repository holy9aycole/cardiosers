import React from "react";
import GoogleMapReact from "google-map-react";
import {} from "./styles";

function Contact() {
	return (
		<div style={{ height: "100vh", width: "100%" }}>
			<GoogleMapReact
				defaultCenter={{
					lat: 12.9716,
					lng: 77.5946,
				}}
				defaultZoom={10}
			/>
		</div>
	);
}

export default Contact;
