// src/components/ThemeToggle.tsx 
import React, { useState } from 'react';

const ThemeToggle: React.FC = () => { const [isDark, setIsDark] = useState(false);

const toggleTheme = () => { document.documentElement.classList.toggle('dark'); setIsDark(!isDark); };

return ( <button
onClick={toggleTheme}
className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow"
> {isDark ? '☀️' : '🌙'} </button> ); };

export default ThemeToggle;
