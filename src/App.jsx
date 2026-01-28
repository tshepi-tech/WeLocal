import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import BusinessPageContent from "./components/BusinessPage";
import SecondaryNav from "./components/SecondaryNav";
import MainContent from "./components/MainContent";

library.add(fas, far, fab);

function App() {
	const [activeTab, setActiveTab] = useState("overview");

	return (
		<>
			<div className="fill-space"></div>
			<main className="mobile-only">
				<MainContent />
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
