import "../App.scss";
import { useState } from "react";

let index = 0;
function Home(): JSX.Element {
	let outputList = ["Home", "Page"];
	const [output, setOutput] = useState(outputList[0]);

	return (
		<div className="Home">

			<h1>{output}</h1>

			<p>This is a test website</p>

			<button onClick={() => {
				index = (index + 1) % 2;
				setOutput(outputList[index]);
			}}>Press this!</button>

		</div>
	);
}

export default Home;