import { Link } from "react-router-dom";
import "./styles/PrimaryHeader.css";

function PrimaryHeader() {
	return (
		<header className="header">
			<div className="top-bar">
				{/* <button className="menu">
                        <FontAwesomeIcon
                            icon="fa-solid fa-bars"
                            style={{ color: "#FF7700" }}
                        />
                        <VisuallyHidden>Menu</VisuallyHidden>
                    </button> */}
				{/* <Link to="/" className="logo">
					WeLocal
				</Link> */}
				<Link to="#" className="logo">
					WeLocal
				</Link>
				<Link to="/about" className="about-nav">
					About
				</Link>
			</div>
			{/* 	<form>
                    <VisuallyHidden>
                        <label class="search-label" for="search">
                            Search services:
                        </label>
                    </VisuallyHidden>
                    <input id="search" type="search" placeholder="Search for services" />
                </form> */}
		</header>
	);
}

export default PrimaryHeader;
