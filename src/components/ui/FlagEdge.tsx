import React from "react";

export type FlagCategory =
  | "Foundations"
  | "Rights and Freedoms"
  | "Governance"
  | "Accountability"
  | "State Organs"
  | "default";

interface FlagEdgeProps {
  category?: FlagCategory | string;
  orientation?: "top" | "left";
  thickness?: number;
  className?: string;
}

const CATEGORY_PROPORTIONS: Record<string, { black: number; red: number; green: number }> = {
  Foundations: { black: 60, red: 20, green: 20 },
  "Rights and Freedoms": { black: 20, red: 60, green: 20 },
  Governance: { black: 20, red: 20, green: 60 },
  Accountability: { black: 30, red: 50, green: 20 },
  "State Organs": { black: 30, red: 20, green: 50 },
  default: { black: 34, red: 33, green: 33 },
};

export default function FlagEdge({
  category = "default",
  orientation = "top",
  thickness = 6,
  className = "",
}: FlagEdgeProps) {
  const p = CATEGORY_PROPORTIONS[category] || CATEGORY_PROPORTIONS.default;

  const bStop = p.black;
  const rStop = p.black + p.red;

  const isTop = orientation === "top";
  const gradientDirection = isTop ? "to right" : "to bottom";
  const background = `linear-gradient(${gradientDirection}, #111111 0% ${bStop}%, #be1111 ${bStop}% ${rStop}%, #0a5c27 ${rStop}% 100%)`;

  return (
    <div
      style={{
        background,
        ...(isTop
          ? { height: `${thickness}px`, width: "100%" }
          : { width: `${thickness}px`, height: "100%" }),
      }}
      className={`flex-shrink-0 ${className}`}
      aria-hidden="true"
    />
  );
}
