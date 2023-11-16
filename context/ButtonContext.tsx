'use client'
// ButtonContext.js
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ButtonContextProps {
  clickedButtonText: string;
  updateClickedButtonText: (text: string) => void;
}

const ButtonContext = createContext<ButtonContextProps | undefined>(undefined);

interface ButtonProviderProps {
  children: ReactNode;
}

export const ButtonProvider = ({ children }: ButtonProviderProps) => {
  const [clickedButtonText, setClickedButtonText] = useState("Home");

  const updateClickedButtonText = (text: string) => {
    setClickedButtonText(text);
  };

  const contextValue: ButtonContextProps = {
    clickedButtonText,
    updateClickedButtonText,
  };

  return (
    <ButtonContext.Provider value={contextValue}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }
  return context;
};
