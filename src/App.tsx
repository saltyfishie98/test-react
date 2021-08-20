import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Nav from "./Pages/nav";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Home from "./Pages/home";

function App(): JSX.Element {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/test-react" component={Home} />
					<Route path="/About" component={About} />
					<Route path="/Contact" component={Contact} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
