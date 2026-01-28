import cupcakes from "../assets/chocolatecupcakes.jpg";
import logo from "../assets/gl.jpeg";
import "./styles/MainContent.css";

function MainContent() {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
				<path
					fill="#fbfffe;"
					fill-opacity="1"
					d="M0,160L40,170.7C80,181,160,203,240,192C320,181,400,139,480,122.7C560,107,640,117,720,138.7C800,160,880,192,960,192C1040,192,1120,160,1200,144C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
				></path>
			</svg>
			<section className="main-content">
				<article className="profile">
					<img className="logo-avatar" src={logo} />
					<div className="name">
						<h1>GoodCakes</h1>
					</div>
					<div className="rating">
						<p>⭐ 4.8</p>
						<p className="review-count"> (5 reviews)</p>
					</div>
					<div className="info">
						<span>📍 Pretoria</span>
					</div>
				</article>
				<aside className="photo-section">
					<img
						className="photo"
						src={cupcakes}
						alt="chocolate cupcakes being prepared"
					/>
				</aside>
			</section>
			<div class="curved-upper">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#fbfffe;"
						fill-opacity="1"
						d="M0,160L40,170.7C80,181,160,203,240,192C320,181,400,139,480,122.7C560,107,640,117,720,138.7C800,160,880,192,960,192C1040,192,1120,160,1200,144C1280,128,1360,128,1400,128L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
					></path>
				</svg>
			</div>
		</>
	);
}

export default MainContent;
