import React from 'react';
interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'navbar';
}

const Logo = ({
  className = '',
  size = 'md'
}: LogoProps) => {
  const logoUrl = '/lovable-uploads/60075538-d38d-4ed1-b5b4-ae7f8338e241.png';
  
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-12 w-auto',
    navbar: 'h-12 w-auto max-w-[50px]'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="JJ Logo" 
        className={`${sizeClasses[size]} object-contain`}
      />
    </div>
  );
};
export default Logo;