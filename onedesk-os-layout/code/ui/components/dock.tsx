import React from 'react';

export const Dock = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 rounded-xl px-6 py-2 flex gap-4">
      <button className="text-white">📁 OneFinance</button>
      <button className="text-white">⚙️ Settings</button>
    </div>
  );
};
