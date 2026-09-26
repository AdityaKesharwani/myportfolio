import React, { useMemo } from 'react';

const COLOR_PALETTE = [
  '6, 182, 212',   // Electric Cyan
  '168, 85, 247',  // Neon Purple
  '244, 63, 94',   // Radiant Rose Pink
  '245, 158, 11',  // Warm Golden Amber
  '16, 185, 129',  // Emerald Mint Green
  '59, 130, 246',  // Sapphire Blue
  '249, 115, 22',  // Sunset Orange
  '217, 70, 239',  // Neon Fuchsia / Magenta
  '132, 204, 22',  // Lime Neon Green
  '20, 184, 166',  // Aquamarine Teal
  '139, 92, 246',  // Royal Violet
  '236, 72, 153',  // Vivid Hot Pink
  '14, 165, 233',  // Sky Cerulean
  '250, 204, 21',  // Electric Yellow
];

export default function BubbleCanvas() {
  // Generate a collection of 14 floating bubbles with randomized positions, timings, sizes, and unique colors
  const bubbles = useMemo(() => {
    // Shuffle the palette so colors are distributed randomly on every session
    const shuffledColors = [...COLOR_PALETTE].sort(() => Math.random() - 0.5);

    // Only place bubbles on the outer flanks (left margin <= 13%, right margin >= 87%)
    // The entire center (14% - 86%) is kept completely clear of bubbles
    const positions = [2, 4.5, 7, 9.5, 12, 13.5, 3.5, 86.5, 88.5, 91, 93.5, 95.5, 97.5, 87];
    // Sleek, small delicate particle sizes (8px - 14px)
    const sizes = [9, 12, 8, 13, 10, 14, 9, 11, 13, 8, 12, 10, 14, 9];
    const durations = [13, 17, 12, 15, 18, 14, 16, 12.5, 17.5, 13.5, 16.5, 14.5, 15.5, 13];
    const delays = [0, 3.2, 1.4, 4.8, 2.1, 5.5, 0.8, 6.2, 3.8, 1.9, 5.0, 2.7, 4.1, 6.8];

    return positions.map((pos, i) => {
      const rgb = shuffledColors[i % shuffledColors.length];
      return {
        id: i,
        size: sizes[i % sizes.length],
        left: pos,
        duration: durations[i % durations.length],
        delay: delays[i % delays.length],
        rgb,
      };
    });
  }, []);

  return (
    <div aria-hidden="true" className="bubble-canvas">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="floating-bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            background: `radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.85) 0%, rgba(${b.rgb}, 0.55) 38%, rgba(${b.rgb}, 0.2) 72%, rgba(${b.rgb}, 0.05) 100%)`,
            border: `1px solid rgba(${b.rgb}, 0.45)`,
            boxShadow: `inset 0 0 4px rgba(255, 255, 255, 0.6), 0 0 8px rgba(${b.rgb}, 0.35)`,
          }}
        />
      ))}
    </div>
  );
}
