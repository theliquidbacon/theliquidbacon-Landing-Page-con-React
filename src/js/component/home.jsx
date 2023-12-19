import React from "react";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./cards.jsx";
import { navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";

export function Home() {
	return (
		<div className="container">
			<navbar />
			<Jumbotron />
			<div className="row justify-content-around">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
			<Footer />
		</div>
	);
}