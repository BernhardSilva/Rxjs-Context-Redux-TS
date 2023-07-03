//Context

import { useContext } from "react";
import { GentlemanContext } from "./gentleman.context";

export const useGentlemanContext = () => {
	const context = useContext(GentlemanContext);
	if (context === undefined) {
		throw new Error('GentlemanContext must be used within a GentlemanProvider');
	}
	return context;
};