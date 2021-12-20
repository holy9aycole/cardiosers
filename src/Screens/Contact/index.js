import React from "react";
import Navbar from "./ContactNavbar";

function Contact() {
	return (
		<div>
			<Navbar title="Contact" titleOptions={["Bangalore", "Delhi", "Mumbai"]} />
		</div>
	);
}

export default Contact;
