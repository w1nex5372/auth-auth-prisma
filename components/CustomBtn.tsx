import React, { ReactNode } from 'react';

interface CustomButtonProps {
  children: ReactNode;
  onClick: () => void;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  primary = false,
  secondary = false,
  disabled = false,
}) => {
  const buttonStyles = primary
    ? 'bg-primary-color text-black'


    : secondary
    ? 'bg-secondary-color text-black'
    : 'bg-gray-300 text-black';

  return (
    <button
      className={`px-4 py-2 rounded-lg ${buttonStyles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
