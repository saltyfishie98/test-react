import "./home.scss";
import { useState } from "react";

let index = 0;
function Home(): JSX.Element {
	let outputList = ["Home", "Page"];
	const [output, setOutput] = useState(outputList[0]);

	return (
		<section className="Home">
			<div className="container">
				<h1 className="mainTitle">{output}</h1>

				<p>This is a test website</p>

				<button
					className="myButton"
					onClick={() => {
						index = (index + 1) % 2;
						setOutput(outputList[index]);
					}}
				>
					Press this!
				</button>
			</div>
		</section>
	);
}

export default Home;
