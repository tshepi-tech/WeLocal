export default function SecondaryNav({ activeTab, setActiveTab }) {
	return (
		<nav className="tabs">
			<button
				onClick={() => setActiveTab("overview")}
				className={activeTab === "overview" ? "active" : ""}
			>
				Overview
			</button>
			<button
				onClick={() => setActiveTab("contact")}
				className={activeTab === "contact" ? "active" : ""}
			>
				Contact
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
	);
}
