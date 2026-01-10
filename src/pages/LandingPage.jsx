import { Link } from "react-router-dom";
function LandingPage() {
	return (
		<div>
			<Link to="/bakers" className="about-nav">
				Bakers
			</Link>
			<br></br>
			<Link to="/catering" className="about-nav">
				Catering
			</Link>
		</div>
	);
}

export default LandingPage;
