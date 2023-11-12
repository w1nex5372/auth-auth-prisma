// Image.tsx
import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const CustomImage: React.FC<ImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default CustomImage;



