import React, { createContext, ReactNode, useContext, useState } from "react";

export interface NavigationBundle {
	from: any;
	setFrom: any;
}

export const BackButtonNavigationContext = createContext<NavigationBundle | undefined>(undefined);

interface NavigationProviderProps {
	children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {

	const [from, setFrom] = useState<any>(undefined);

	return (
		<BackButtonNavigationContext.Provider value={{ from, setFrom}}>
			{children}
		</BackButtonNavigationContext.Provider>
	);
};

export const useBackButtonNavigation = () => {
	const context = useContext(BackButtonNavigationContext);
	if (!context) {
		throw new Error("useBackButtonNavigation must be used within a NavigationProvider");
	}
	return context;
};
