// src/components/AppIcon.tsx import React from 'react';

interface AppIconProps { name: string; icon: React.ReactNode; onClick?: () => void; }

const AppIcon: React.FC<AppIconProps> = ({ name, icon, onClick }) => (

  <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
    <div className="p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800">{icon}</div>
    <span className="text-sm mt-2 dark:text-white">{name}</span>
  </div>
);export default AppIcon;
