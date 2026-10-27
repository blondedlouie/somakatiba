import React from "react";

interface FlagRuleProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function FlagRule({
  className = "",
  width = 96,
  height = 4,
}: FlagRuleProps) {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`flex overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="flex-1 bg-ink" />
      <div className="flex-1 bg-flag-red" />
      <div className="flex-1 bg-flag-green" />
    </div>
  );
}
