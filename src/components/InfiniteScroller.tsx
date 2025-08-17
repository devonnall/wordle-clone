"use client";

import React from "react";

// The BrandItem type and ScrollerProps remain the same
type BrandItem = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

type ScrollerProps = {
  items: BrandItem[];
  speed?: "fast" | "normal" | "slow";
  direction?: "left" | "right";
};

export const InfiniteScroller = ({
  items,
  speed = "normal",
  direction = "left",
}: ScrollerProps) => {
  const duration =
    speed === "fast" ? "20s" : speed === "slow" ? "80s" : "40s";

  return (
    <div
      className="group relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className={`flex min-w-max shrink-0 animate-scroll items-center gap-4 ${
          direction === "right" ? "flex-row-reverse" : ""
        } group-hover:[animation-play-state:paused]`}
        style={{ "--animation-duration": duration } as React.CSSProperties}
      >
        {/* Render the first set of items */}
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0"
          >
            {item.icon}
          </div>
        ))}
        
        {/* Render the duplicated set of items for the seamless loop */}
        {items.map((item) => (
          <div
            key={`${item.id}-duplicate`}
            className="flex-shrink-0"
            aria-hidden="true"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};