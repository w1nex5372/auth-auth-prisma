'use client'
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface NavMenuContextProps {
  children: ReactNode;
}

interface NavMenuContextValue {
  showNavMenu: boolean;
  setShowNavMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleBarsIconClick: () => void;
}

const NavMenuContext = createContext<NavMenuContextValue | undefined>(undefined);

export const NavMenuProvider: React.FC<NavMenuContextProps> = ({ children }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleBarsIconClick = useCallback(() => {
    setShowNavMenu((prevShowNavMenu) => !prevShowNavMenu);
  }, []);

  return (
    <NavMenuContext.Provider value={{ showNavMenu, setShowNavMenu, handleBarsIconClick }}>
      {children}
    </NavMenuContext.Provider>
  );
};

export const useNavMenuContext = (): NavMenuContextValue => {
  const context = useContext(NavMenuContext);
  if (!context) {
    throw new Error('useNavMenuContext must be used within a NavMenuProvider');
  }
  return context;
};
