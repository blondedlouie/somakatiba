import React from "react";
import FlagEdge, { FlagCategory } from "./FlagEdge";

interface CardProps {
  children: React.ReactNode;
  category?: FlagCategory | string;
  edgeOrientation?: "top" | "left" | "none";
  surface?: "white" | "paper";
  className?: string;
  as?: React.ElementType;
}

export default function Card({
  children,
  category = "default",
  edgeOrientation = "top",
  surface = "white",
  className = "",
  as: Component = "div",
}: CardProps) {
  const surfaceClass = surface === "paper" ? "bg-paper" : "bg-white";

  return (
    <Component
      className={`relative rounded-card border border-rule ${surfaceClass} hover:border-ink transition-colors flex flex-col ${className}`}
    >
      {edgeOrientation === "top" && (
        <FlagEdge category={category} orientation="top" thickness={6} />
      )}
      {edgeOrientation === "left" && (
        <FlagEdge category={category} orientation="left" thickness={6} className="absolute left-0 top-0 bottom-0" />
      )}
      <div className="p-5 sm:p-7 flex-1 flex flex-col">{children}</div>
    </Component>
  );
}
