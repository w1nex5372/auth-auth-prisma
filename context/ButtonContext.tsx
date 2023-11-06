// ButtonContext.js
'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";

const ButtonContext = createContext();


interface ButtonProviderProps {
  children: ReactNode;
}


export const ButtonProvider = ({ children }: ButtonProviderProps) => {
  const [clickedButtonText, setClickedButtonText] = useState("Home"); // Set the default value to "Home".

  const updateClickedButtonText = (text: string) => {
    setClickedButtonText(text);
  };

  return (
    <ButtonContext.Provider
      value={{ clickedButtonText, updateClickedButtonText }}
    >
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => {
  return useContext(ButtonContext);
};
