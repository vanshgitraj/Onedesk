// src/pages/OneFinance.tsx

import React from "react";
import { AppIcon } from "../components/AppIcon";
import { ThemeToggle } from "../components/ThemeToggle";
import { TopBar } from "../components/TopBar";

const OneFinance: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-background text-foreground">
      {/* 🔝 Top Navigation */}
      <TopBar title="One Finance" />

      {/* 💳 Main Finance Features */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
        <AppIcon appName="Loan Advisor" />
        <AppIcon appName="CIBIL Analyzer" />
        <AppIcon appName="Balance Transfer" />
        <AppIcon appName="Overdraft Optimizer" />
        {/* Add more finance tools here */}
      </div>

      {/* 🌗 Theme Switcher */}
      <div className="absolute bottom-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default OneFinance;