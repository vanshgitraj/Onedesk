// src/App.tsx import React from 'react'; import { BrowserRouter, Routes, Route } from 'react-router-dom'; import Home from './pages/Home'; import OneFinance from './pages/OneFinance'; import Settings from './pages/Settings'; import TopBar from './components/TopBar'; import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => { return ( <BrowserRouter> <div className="min-h-screen"> <TopBar /> <div className="p-4"> <Routes> <Route path="/" element={<Home />} /> <Route path="/onefinance" element={<OneFinance />} /> <Route path="/settings" element={<Settings />} /> </Routes> </div> <ThemeToggle /> </div> </BrowserRouter> ); };

export default App;

