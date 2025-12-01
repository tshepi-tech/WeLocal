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
import { useState } from "react";

library.add(fas, far, fab);

function App() {
	const [activeTab, setActiveTab] = useState("overview");

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
							Search services:
						</label>
					</VisuallyHidden>
					<input id="search" type="search" placeholder="Search for services" />
				</form>
			</header>
			<div className="fill-space"></div>
			<main className="content">
				<article className="profile">
					<img className="logo-avatar" src={goodcakes} />
					<div className="name">
						GoodCakes
						<a className="founder" href="#">
							About Founder
						</a>
					</div>
					<div className="rating">
						⭐ 4.8
						<a href="#">(40 reviews)</a>
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
				<nav className="tabs">
					<button
						onClick={() => setActiveTab("overview")}
						className={activeTab === "overview" ? "active" : ""}
					>
						Overview
					</button>
					<button
						onClick={() => setActiveTab("services")}
						className={activeTab === "services" ? "active" : ""}
					>
						Services
					</button>
					<button
						onClick={() => setActiveTab("reviews")}
						className={activeTab === "reviews" ? "active" : ""}
					>
						Reviews
					</button>
				</nav>
				{activeTab === "overview" && (
					<section>
						<p>
							GoodCakes is a small-batch bakery specializing in handcrafted
							cakes made with fresh, high-quality ingredients. From classic
							flavors to creative seasonal specials, every cake is designed to
							look beautiful and taste unforgettable. Whether you’re celebrating
							a birthday, wedding, or simply craving something sweet, GoodCakes
							brings warmth, flavor, and joy to every occasion. //contact
						</p>
					</section>
				)}
				{activeTab === "services" && (
					<section>
						<p>services</p>
					</section>
				)}
				{activeTab === "reviews" && (
					<section>
						⭐ Sarah M. — ★★★★★ — January 12, 2025 The cake was absolutely
						delicious! Moist, flavorful, and beautifully decorated. Everyone at
						the party asked where I got it from — I’ll definitely be ordering
						again. ⭐ Daniel R. — ★★★★☆ — February 3, 2025 Loved the taste and
						presentation. The delivery was slightly delayed, but the cake was
						worth the wait. Great service overall! ⭐ Lina P. — ★★★★★ — March 8,
						2025 GoodCakes never disappoints. This was my third order, and the
						quality is consistently amazing. The chocolate hazelnut cake is a
						must-try!
					</section>
				)}
			</main>
		</>
	);
}

export default App;
