import { useState, useEffect } from "react";

export interface Dimensions {
	width: number;
	height: number;
}

// w: 450

function getWindowDimensions(): Dimensions {
	const { innerWidth: width, innerHeight: height } = window;
	return { width, height };
}

export function WindowDims() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
