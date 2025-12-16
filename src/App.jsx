import "./App.css";
import cupcakes from "../src/assets/chocolatecupcakes.jpg";
import brownie from "../src/assets/brownie.webp";
import weddingcake from "../src/assets/weddingcake.jpg";
import donuts from "../src/assets/donuts.jpeg";
import goodcakes from "../src/assets/goodcakeslogo.png";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import VisuallyHidden from "./components/VisuallyHidden";
import { useState } from "react";
import AboutWeLocal from "./components/AboutWeLocal";

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
					<Link to="/about" className="about">
						About
					</Link>
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
						<p className="tab-content">
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
					<section className="tab-content">
						<aside className="service-item">
							<img src={weddingcake} alt="one tier wedding cake with flowers" />
							<p>Perfect wedding cakes for the special day</p> <p>⭐ 4 (8) </p>
							<p>From ZAR 850 </p>
						</aside>
						<aside className="service-item">
							<img src={brownie} alt="dubai flavor brownie" />
							<p>Sweet treats for all occasions</p> <p>⭐ 4 (3) </p>
							<p>From ZAR 300 </p>
						</aside>
						<aside className="service-item">
							<img src={donuts} alt="colorful assortment of donuts" />
							<p>Sticky delicious parties available</p> <p>⭐ 4 (3) </p>
							<p>From ZAR 350 </p>
						</aside>
					</section>
				)}
				{activeTab === "reviews" && (
					<section className="tab-content">
						<aside className="review-item">
							<p className="review-name">Sarah M.</p>
							<p>⭐⭐⭐⭐⭐— January 12, 2025</p>
							<p>
								The cake was absolutely delicious! Moist, flavorful, and
								beautifully decorated. Everyone at the party asked where I got
								it from — I’ll definitely be ordering again.
							</p>{" "}
						</aside>
						<aside className="review-item">
							<p className="review-name">Daniel R.</p>
							<p>⭐⭐⭐⭐ — February 3, 2025</p>
							<p>
								Loved the taste and presentation. The delivery was slightly
								delayed, but the cake was worth the wait. Great service overall!
							</p>{" "}
						</aside>
						<aside className="review-item">
							<p className="review-name">Lina P.</p>
							<p>⭐⭐⭐⭐⭐ — March 8, 2025</p>
							<p>
								GoodCakes never disappoints. This was my third order, and the
								quality is consistently amazing. The chocolate hazelnut cake is
								a must-try!
							</p>
						</aside>
					</section>
				)}
			</main>
		</>
	);
}

export default App;
