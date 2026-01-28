import profilepicture from "../assets/bakerProfile.jpg";
import brownie from "../assets/brownie.webp";
import weddingcake from "../assets/weddingcake.jpg";
import donuts from "../assets/donuts.jpeg";
import "./styles/BusinessPage.css";

export default function BusinessPageContent({ activeTab }) {
	return (
		<main className="business-content">
			{activeTab === "overview" && (
				<section>
					<p className="tab-content">
						GoodCakes is a small-batch bakery specializing in handcrafted cakes
						made with fresh, high-quality ingredients. From classic flavors to
						creative seasonal specials, every cake is designed to look beautiful
						and taste unforgettable. Whether you’re celebrating a birthday,
						wedding, or simply craving something sweet, GoodCakes brings warmth,
						flavor, and joy to every occasion.
					</p>
				</section>
			)}
			{activeTab === "contact" && (
				<section>
					<div className="founder-info">
						<img className="logo-avatar" src={profilepicture} />
						<div>
							<p>
								Jane started this bakery from her home kitchen with a love for
								creating cakes that bring people together.
								{/*  What began as a
								passion for baking has grown into a small local business focused
								on fresh ingredients, custom designs, and reliable service for
								every occasion. */}
							</p>
							<a href="https://wa.me/1XXXXXXXXXX"> WhatsApp</a>
						</div>
					</div>
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
						<p>Sticky delicious pastries available</p> <p>⭐ 4 (3) </p>
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
							beautifully decorated. Everyone at the party asked where I got it
							from — I’ll definitely be ordering again.
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
							quality is consistently amazing. The chocolate hazelnut cake is a
							must-try!
						</p>
					</aside>
				</section>
			)}{" "}
		</main>
	);
}
