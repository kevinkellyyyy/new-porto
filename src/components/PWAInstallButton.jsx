import React from "react";
import { usePWAInstall } from "../hooks/usePWAInstall";
import { HiDownload } from "react-icons/hi";

const PWAInstallButton = () => {
  const { isInstallable, isInstalled, installPWA } = usePWAInstall();

  if (!isInstallable || isInstalled) {
    // return null;
  }

  const handleInstall = async () => {
    const success = await installPWA();
    if (success) {
      console.log("PWA installed successfully!");
    }
  };

  return (
    <button
      onClick={handleInstall}
      className="fixed bottom-4 right-4 z-50 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
      aria-label="Install Portfolio App"
    >
      <HiDownload className="w-5 h-5" />
      <span className="hidden sm:inline">Install App</span>
    </button>
  );
};

export default PWAInstallButton;
