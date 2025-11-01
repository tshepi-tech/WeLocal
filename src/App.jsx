import "./App.css";
import cupcakes from "../src/assets/chocolatecupcakes.jpg";
import goodcakes from "../src/assets/goodcakeslogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import VisuallyHidden from "./components/VisuallyHidden";

library.add(fas, far, fab);

function App() {
	return (
		<>
			<header className="header">
				<div className="top-bar">
					<button className="menu">
						<FontAwesomeIcon
							icon="fa-solid fa-bars"
							style={{ color: "#FF7700" }}
						/>
						<VisuallyHidden>Menu</VisuallyHidden>
					</button>
					<h1 className="logo">WeLocal</h1>
					<a href="#" className="about">
						About
					</a>
				</div>
				<form>
					<VisuallyHidden>
						<label class="search-label" for="search">
							Search about recipes:
						</label>
					</VisuallyHidden>
					<input id="search" type="search" placeholder="Search for services" />
				</form>
			</header>
			<article>
				<img className="logo-avatar" src={goodcakes} />
				<p>GoodCakes | About Founder</p>
				<p>4.2 (40 reviews)</p>
				<p>Pretoria | cakes , cupcakes, biscuits</p>
			</article>
			<section>
				<img src={cupcakes} alt="chocolate cupcakes being prepared" />
			</section>
			<section>overview | services | reviews</section>
		</>
	);
}

export default App;
