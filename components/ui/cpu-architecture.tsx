import { cn } from "@/lib/utils";
import React from "react";

export interface AuxanoChipProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
  preserveAspectRatio?: string;
  style?: React.CSSProperties;
}

// All 24 circuit path definitions — 1200x800 viewBox, chip centered at (600,400)
// Paths originate from screen edges and converge on the central chip
// New chip body: x=390, y=300, width=420, height=200 — all path endpoints fall inside the chip
const PATHS = [
  // Left-side connections
  "M 0 200 h 360 q 16 0 16 16 v 124 q 0 16 16 16 h 78",
  "M 0 400 h 470",
  "M 0 600 h 260 q 16 0 16 -16 v -140 q 0 -16 16 -16 h 178",
  "M 0 300 h 280 q 16 0 16 16 v 54 q 0 16 16 16 h 158",
  // Right-side connections
  "M 1200 200 h -360 q -16 0 -16 16 v 134 q 0 16 -16 16 h -78",
  "M 1200 400 h -470",
  "M 1200 600 h -260 q -16 0 -16 -16 v -140 q 0 -16 -16 -16 h -178",
  "M 1200 310 h -240 q -16 0 -16 16 v 24 q 0 16 -16 16 h -198",
  // Top connections
  "M 240 0 v 200 q 0 16 16 16 h 214 q 16 0 16 16 v 118",
  "M 540 0 v 350",
  "M 640 0 v 350",
  "M 940 0 v 200 q 0 16 -16 16 h -238 q -16 0 -16 16 v 118",
  // Bottom connections
  "M 240 800 v -160 q 0 -16 16 -16 h 214 q 16 0 16 -16 v -158",
  "M 530 800 v -350",
  "M 660 800 v -350",
  "M 960 800 v -180 q 0 -16 -16 -16 h -240 q -16 0 -16 -16 v -138",
  // Corner staircase sweeps
  "M 60 60 h 160 q 16 0 16 16 v 120 q 0 16 16 16 h 160 q 16 0 16 16 v 122 h 42",
  "M 1140 60 h -160 q -16 0 -16 16 v 120 q 0 16 -16 16 h -160 q -16 0 -16 16 v 122 h -42",
  "M 60 740 h 120 q 16 0 16 -16 v -120 q 0 -16 16 -16 h 120 q 16 0 16 -16 v -122 h 122",
  "M 1140 740 h -160 q -16 0 -16 -16 v -120 q 0 -16 -16 -16 h -160 q -16 0 -16 -16 v -122 h -42",
  // Horizontal branch paths
  "M 100 400 h 160 q 16 0 16 16 h 194",
  "M 1100 400 h -160 q -16 0 -16 -16 h -194",
  // Inner top shortcuts
  "M 360 60 v 140 q 0 16 16 16 h 78 q 16 0 16 16 v 118",
  "M 840 60 v 140 q 0 16 -16 16 h -78 q -16 0 -16 16 v 118",
] as const;

const GRADIENT_CYCLE = [
  "auxano-emerald-grad",
  "auxano-teal-grad",
  "auxano-purple-grad",
  "auxano-white-grad",
  "auxano-green-grad",
  "auxano-amber-grad",
  "auxano-cyan-grad",
  "auxano-rose-grad",
] as const;

export function AuxanoChip({
  className,
  width = "100%",
  height = "100%",
  showConnections = true,
  lineMarkerSize = 16,
  animateLines = true,
  animateMarkers = true,
  preserveAspectRatio = "xMidYMid meet",
  style,
}: AuxanoChipProps) {
  return (
    <svg
      className={cn("text-muted", className)}
      width={width}
      height={height}
      viewBox="0 0 1200 800"
      preserveAspectRatio={preserveAspectRatio}
      style={style}
    >
      {/* Circuit Paths — all 24 */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="1.2"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#auxano-circle-marker)"
      >
        {PATHS.map((d, i) => (
          <path key={i} d={d} strokeDasharray="100 100" pathLength="100" />
        ))}
        {animateLines && (
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1.2s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        )}
      </g>

      {/* Animated Light Orbs — 24 total */}
      {PATHS.map((_, i) => (
        <g key={i} mask={`url(#auxano-mask-${i + 1})`}>
          <circle
            className={`cpu-architecture cpu-line-${i + 1}`}
            cx="0"
            cy="0"
            r={i % 4 === 0 ? 24 : i % 3 === 0 ? 18 : 21}
            fill={`url(#${GRADIENT_CYCLE[i % GRADIENT_CYCLE.length]})`}
          />
        </g>
      ))}

      {/* Chip ambient glow layer — enlarged to match new chip */}
      <rect
        x="350"
        y="270"
        width="500"
        height="260"
        rx="16"
        fill="transparent"
        filter="url(#auxano-glow-ambient)"
      />

      {/* Central Chip — enlarged to 420×200 centered at (600,400) */}
      <g>
        {/* Dense Connection Pins */}
        {showConnections && (
          <g fill="url(#auxano-connection-gradient)">
            {/* Top pins — protrude above chip top edge (y=300), pin y=284 h=16 */}
            {[424, 448, 472, 496, 520, 544, 568, 592, 616, 640, 664, 688, 712, 736, 760].map((x) => (
              <rect key={x} x={x} y="284" width="8" height="16" rx="3" />
            ))}
            {/* Bottom pins — protrude below chip bottom edge (y=500) */}
            {[424, 448, 472, 496, 520, 544, 568, 592, 616, 640, 664, 688, 712, 736, 760].map((x) => (
              <rect key={x} x={x} y="500" width="8" height="16" rx="3" />
            ))}
            {/* Left pins — protrude left of chip left edge (x=390), pin x=374 w=16 */}
            {[334, 354, 374, 394, 414, 434, 454].map((y) => (
              <rect key={y} x="374" y={y} width="16" height="8" rx="2" />
            ))}
            {/* Right pins — protrude right of chip right edge (x=810) */}
            {[334, 354, 374, 394, 414, 434, 454].map((y) => (
              <rect key={y} x="810" y={y} width="16" height="8" rx="2" />
            ))}
          </g>
        )}

        {/* Main Chip Body — 420×200, centered at (600,400) */}
        <rect
          x="390"
          y="300"
          width="420"
          height="200"
          rx="12"
          fill="#0e1a0e"
          filter="url(#auxano-glow)"
        />

        {/* Inner chip face — 8px padding all sides */}
        <rect
          x="398"
          y="308"
          width="404"
          height="184"
          rx="6"
          fill="#0a120a"
          stroke="#1a3020"
          strokeWidth="1"
        />

        {/* Corner accent marks — L-shaped, 6px inside inner face corners */}
        <g stroke="#10B981" strokeWidth="1.8" fill="none" opacity="0.55">
          {/* Top-left */}
          <path d="M 404 314 h 18 M 404 314 v 14" />
          {/* Top-right */}
          <path d="M 796 314 h -18 M 796 314 v 14" />
          {/* Bottom-left */}
          <path d="M 404 486 h 18 M 404 486 v -14" />
          {/* Bottom-right */}
          <path d="M 796 486 h -18 M 796 486 v -14" />
        </g>
      </g>

      {/* Defs */}
      <defs>
        {/* Masks — one per path */}
        {PATHS.map((d, i) => (
          <mask key={i} id={`auxano-mask-${i + 1}`}>
            <path d={d} strokeWidth="3" stroke="white" fill="none" />
          </mask>
        ))}

        {/* Light Gradients */}
        <radialGradient id="auxano-emerald-grad" fx="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-teal-grad" fx="1">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="50%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-purple-grad" fx="1">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-white-grad" fx="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="70%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-green-grad" fx="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-amber-grad" fx="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-cyan-grad" fx="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-rose-grad" fx="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        {/* Chip glow — pulsing */}
        <filter id="auxano-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#10B981">
            <animate
              attributeName="floodOpacity"
              values="0.5;0.9;0.5"
              dur="3s"
              repeatCount="indefinite"
            />
          </feDropShadow>
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="black" floodOpacity="0.3" />
        </filter>

        {/* Ambient chip glow — softer, wider */}
        <filter id="auxano-glow-ambient" x="-100%" y="-100%" width="300%" height="300%">
          <feDropShadow dx="0" dy="0" stdDeviation="50" floodColor="#10B981">
            <animate
              attributeName="floodOpacity"
              values="0.12;0.28;0.12"
              dur="4s"
              repeatCount="indefinite"
            />
          </feDropShadow>
        </filter>

        {/* Circle markers at path starts */}
        <marker
          id="auxano-circle-marker"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth={lineMarkerSize}
          markerHeight={lineMarkerSize}
        >
          <circle cx="5" cy="5" r="2" fill="black" stroke="#1a3020" strokeWidth="0.6">
            {animateMarkers && (
              <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
            )}
          </circle>
        </marker>

        {/* Connection gradient */}
        <linearGradient id="auxano-connection-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a7a5a" />
          <stop offset="60%" stopColor="#0e1a0e" />
        </linearGradient>
      </defs>
    </svg>
  );
}
