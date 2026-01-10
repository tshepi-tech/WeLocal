import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AboutWeLocal from "./components/AboutWeLocal";

import { Routes, Route, Link } from "react-router-dom";
import BakersPage from "./pages/BakersPage.jsx";
import CateringPage from "./pages/CateringPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import PrimaryHeader from "./components/PrimaryHeader.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<PrimaryHeader />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/bakers" element={<BakersPage />} />
				<Route path="/catering" element={<CateringPage />} />
				<Route path="/goodcakes" element={<App />} />
				<Route path="/about" element={<AboutWeLocal />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
