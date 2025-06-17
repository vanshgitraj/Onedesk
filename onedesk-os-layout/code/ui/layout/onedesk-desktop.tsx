import React from 'react';
import { AppIcon } from '../components/AppIcon';
import { Dock } from '../components/dock';

const appList = [
  { name: "OneFinance", icon: "/assets/logo/onefinance.svg" },
  { name: "Settings", icon: "/assets/logo/settings.svg" }
];

export default function OneDeskDesktop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      <header className="flex justify-between items-center mb-6">
        <div className="text-2xl font-bold">OneDesk OS</div>
        <input
          type="text"
          placeholder="Search apps..."
          className="bg-gray-700 rounded px-4 py-2 w-1/2"
        />
        <div className="flex gap-4">
          <button>🔔</button>
          <button>⚙️</button>
          <button>🌗</button>
        </div>
      </header>
      <main className="grid grid-cols-4 gap-6">
        {appList.map(app => (
          <AppIcon key={app.name} name={app.name} icon={app.icon} />
        ))}
      </main>
      <Dock />
    </div>
  );
}
