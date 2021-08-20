import { Link } from "react-router-dom";

import "../App.scss";

function Nav(): JSX.Element {
	return (
		<nav>
			<Link to="/test-react">
				<h3>Logo</h3>
			</Link>
			<ul>
				<Link to="/About">
					<li>About</li>
				</Link>
				<Link to="/Contact">
					<li>Contact</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
