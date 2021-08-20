import { Link } from "react-router-dom";

import "./nav.scss";
import { Dimensions, WindowDims } from "../helper/ScreenSize";

const bound = 470;

function showPageLink(limit: number, path: string): JSX.Element {
	let visibility;

	let currentWinDim: Dimensions = WindowDims();
	visibility = currentWinDim.width < limit ? { display: "none" } : {};

	return (
		<Link className="pageLink" style={visibility} to={path}>
			<li>{path.substring(1)}</li>
		</Link>
	);
}

function showBurger(limit: number): JSX.Element {
	let visibility;

	let currentWinDim: Dimensions = WindowDims();
	visibility = currentWinDim.width > limit ? { display: "none" } : {};

	return (
		<button className="burgerMenu" style={visibility}>
			Burger
			<br />
			Menu
		</button>
	);
}

function Nav(): JSX.Element {
	return (
		<div className="navbar">
			<div className="container">
				<Link className="Logo" to="/test-react">
					<h3>
						This<span>Logo</span>
					</h3>
				</Link>

				<nav>
					<ul>
						{showPageLink(bound, "/Contact")}
						{showPageLink(bound, "/About")}
						{showBurger(bound)}
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Nav;
