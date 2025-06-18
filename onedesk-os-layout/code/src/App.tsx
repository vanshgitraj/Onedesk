import React from "react";
import { AppIcon } from "./components/AppIcon";
import { apps } from "./data/apps";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6 font-sans">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🧠 OneDesk</h1>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-white border rounded-xl shadow text-sm">Settings</button>
          <button className="px-3 py-1 bg-white border rounded-xl shadow text-sm">Profile</button>
        </div>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {apps.map((app) => (
          <AppIcon key={app.id} title={app.title} icon={app.icon} />
        ))}
      </section>

      <footer className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} OneDesk. All rights reserved.
      </footer>
    </div>
  );
};

export default App;