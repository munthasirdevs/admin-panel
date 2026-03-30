import React from 'react';

interface MaterialIconProps {
  name: string;
  filled?: boolean;
  className?: string;
}

const MaterialIcon: React.FC<MaterialIconProps> = ({ name, filled = false, className = '' }) => {
  return (
    <span 
      className={`material-symbols-outlined ${className}`} 
      style={{ fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 300, 'GRAD' 0, 'opsz' 24` }}
    >
      {name}
    </span>
  );
};

export default MaterialIcon;
