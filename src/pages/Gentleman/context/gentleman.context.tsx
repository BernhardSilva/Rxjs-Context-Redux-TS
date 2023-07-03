//Context

import { ReactNode, createContext, useState } from 'react';

interface GentlemanContextProps {
	gentlemanContextValue: string;
	setGentlemanContextValue: React.Dispatch<React.SetStateAction<string>>;
}

interface GentlemanProviderProps {
	children: ReactNode;
}

export const GentlemanContext = createContext<GentlemanContextProps | undefined>(undefined);


export const GentlemanProvider: React.FC<GentlemanProviderProps> = ({ children }) => {
	const [gentlemanContextValue, setGentlemanContextValue] = useState('');
	return (
		<GentlemanContext.Provider value={{ gentlemanContextValue, setGentlemanContextValue }}>
			{children}
		</GentlemanContext.Provider>
	);
};
