import React, { ReactNode } from 'react';

interface CustomButtonProps {
  children: ReactNode;
  onClick: () => void;
  primary?: boolean;
  secondary?: boolean;
    customClassName?: string; // Add the customClassName prop
  disabled?: boolean;
  active?: boolean;
  
}
const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  primary = false,
  secondary = false,
  disabled = false,
  customClassName = '',
  active = false,
}) => {
  const buttonStyles = `
  ${primary ? 'bg-white text-black border border-white px-8 px-4 py-2 m-4' : ''}
  ${secondary ? 'bg-blue-600 text-white px-8 py-2 m-4 py-2' : ''}
`;


  return (
    <button
      className={`rounded-lg ${buttonStyles} ${customClassName} ${active ? 'active' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};


export default CustomButton;
