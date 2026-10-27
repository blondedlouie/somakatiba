import React from "react";

interface FlagRibbonProps {
  height?: number;
  className?: string;
}

export default function FlagRibbon({ height = 20, className = "" }: FlagRibbonProps) {
  return (
    <div
      style={{ height: `${height}px` }}
      className={`w-full flex ${className}`}
      aria-hidden="true"
    >
      <div className="flex-1 bg-ink" />
      <div className="w-1.5 bg-white" />
      <div className="flex-1 bg-flag-red" />
      <div className="w-1.5 bg-white" />
      <div className="flex-1 bg-flag-green" />
    </div>
  );
}
