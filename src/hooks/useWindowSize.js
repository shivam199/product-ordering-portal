import { useState, useEffect } from "react";
import useDebounce  from "./useDebounce";

// Hook
export function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const handleResize = useDebounce(() => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}, 500);
		window.addEventListener("resize", handleResize, {
			passive: true,
		});
		handleResize(null);
		return () => window.removeEventListener("resize", handleResize);
	}, []); 
	return windowSize;
}
