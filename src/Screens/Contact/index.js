import React from "react";
import GoogleMapReact from "google-map-react";
import { ReactComponent as PhoneIcon } from "assets/icons/Contact/phone-icon.svg";
import { ReactComponent as EmailIcon } from "assets/icons/Contact/email-icon.svg";
import { Container, ContactCard, CustomButton } from "./styles";

function Contact() {
	const handlePhone = () => {
		window.open("tel:08040004000");
	};
	const handleEmail = () => {
		window.open("mailto:leasingblr@rmzcorp.com");
	};

	return (
		<Container>
			<GoogleMapReact
				defaultCenter={{
					lat: 12.9716,
					lng: 77.5946,
				}}
				defaultZoom={10}
			/>
			<ContactCard>
				<CustomButton>
					<PhoneIcon onClick={handlePhone} />
				</CustomButton>
				<CustomButton>
					<EmailIcon onClick={handleEmail} />
				</CustomButton>
			</ContactCard>
		</Container>
	);
}

export default Contact;
