import "./App.css";
import cupcakes from "./assets/chocolatecupcakes.jpg";
import logo from "./assets/gl.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import VisuallyHidden from "./components/VisuallyHidden";
import { useState } from "react";
import AboutWeLocal from "./components/AboutWeLocal";
import BusinessPageContent from "./components/BusinessPage";
import SecondaryNav from "./components/SecondaryNav";

library.add(fas, far, fab);

function App() {
	const [activeTab, setActiveTab] = useState("overview");

	return (
		<>
			<div className="fill-space"></div>
			<main className="content mobile-only">
				<article className="profile">
					<img className="logo-avatar" src={logo} />
					<div className="name">
						<h1>GoodCakes</h1>
						{/* <a className="founder" href="#">
							About Founder
						</a> */}
					</div>
					<div className="rating">
						⭐ 4.8
						<a href="#"> (5 reviews)</a>
					</div>
					<div className="info">
						<span>📍 Pretoria</span>
						<span> 🎂 cakes , cupcakes, biscuits</span>
					</div>
				</article>
				<section className="photo-section">
					<img
						className="photo"
						src={cupcakes}
						alt="chocolate cupcakes being prepared"
					/>
				</section>
				<SecondaryNav activeTab={activeTab} setActiveTab={setActiveTab} />
				<BusinessPageContent activeTab={activeTab} />
			</main>
			<div className="desktop-message">
				<h2>Mobile Only</h2>
				<p>
					WeLocal is currently optimised for mobile devices. Please visit this
					page on your phone.
				</p>
			</div>
		</>
	);
}

export default App;
