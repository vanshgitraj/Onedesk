import React from 'react';

export const AppIcon = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center hover:scale-105 transition">
      <img src={icon} alt={name} className="h-16 w-16 rounded-xl" />
      <span className="text-sm mt-2">{name}</span>
    </div>
  );
};
