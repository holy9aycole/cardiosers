import React, { useState } from "react";
import Navbar from "./ContactNavbar";

function Contact() {
	const [area, setArea] = useState("Bangalore");

	const handleChange = (e) => setArea(e.target);

	return (
		<div>
			<Navbar
				title="Contact"
				titleOptions={["Bangalore", "Delhi", "Mumbai"]}
				area={area}
				handleChange={handleChange}
			/>
		</div>
	);
}

export default Contact;
