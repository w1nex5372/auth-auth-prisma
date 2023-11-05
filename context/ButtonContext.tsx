// ButtonContext.js
'use client'
import React, { createContext, useContext, useState } from "react";

const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [clickedButtonText, setClickedButtonText] = useState("");

  const updateClickedButtonText = (text) => {
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
