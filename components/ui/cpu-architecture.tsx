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
  text = "AUXANO AGENCY",
  showConnections = true,
  animateText = true,
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

      {/* Chip ambient glow layer */}
      <rect
        x="430"
        y="330"
        width="340"
        height="140"
        rx="16"
        fill="transparent"
        filter="url(#auxano-glow-ambient)"
      />

      {/* Central Chip */}
      <g>
        {/* Dense Connection Pins */}
        {showConnections && (
          <g fill="url(#auxano-connection-gradient)">
            {/* Top pins */}
            {[486, 504, 522, 540, 558, 576, 594, 612, 630, 648, 666, 684].map((x) => (
              <rect key={x} x={x} y="334" width="8" height="16" rx="3" />
            ))}
            {/* Bottom pins */}
            {[486, 504, 522, 540, 558, 576, 594, 612, 630, 648, 666, 684].map((x) => (
              <rect key={x} x={x} y="450" width="8" height="16" rx="3" />
            ))}
            {/* Left pins */}
            {[362, 380, 398, 416, 434].map((y) => (
              <rect key={y} x="454" y={y} width="16" height="8" rx="2" />
            ))}
            {/* Right pins */}
            {[362, 380, 398, 416, 434].map((y) => (
              <rect key={y} x="730" y={y} width="16" height="8" rx="2" />
            ))}
          </g>
        )}

        {/* Main Chip Body */}
        <rect
          x="470"
          y="350"
          width="260"
          height="100"
          rx="8"
          fill="#0e1a0e"
          filter="url(#auxano-glow)"
        />

        {/* Inner chip face */}
        <rect
          x="478"
          y="358"
          width="244"
          height="84"
          rx="4"
          fill="#0a120a"
          stroke="#1a3020"
          strokeWidth="1"
        />

        {/* Corner accent marks */}
        <g stroke="#10B981" strokeWidth="1.6" fill="none" opacity="0.5">
          <path d="M 482 366 h 12 M 482 366 v 10" />
          <path d="M 718 366 h -12 M 718 366 v 10" />
          <path d="M 482 434 h 12 M 482 434 v -10" />
          <path d="M 718 434 h -12 M 718 434 v -10" />
        </g>

        {/* Chip Text — AUXANO AGENCY */}
        <text
          x="600"
          y="396"
          fontSize="19"
          fill={animateText ? "url(#auxano-text-gradient)" : "white"}
          fontWeight="700"
          letterSpacing="0.12em"
          textAnchor="middle"
          fontFamily="monospace"
        >
          {text}
        </text>

        {/* Subtitle */}
        <text
          x="600"
          y="426"
          fontSize="9"
          fill="#34D399"
          fontWeight="400"
          letterSpacing="0.3em"
          textAnchor="middle"
          fontFamily="monospace"
        >
          INTELLIGENCE
        </text>

        {/* Center indicator dot */}
        <circle cx="600" cy="406" r="2" fill="#10B981" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
        </circle>
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
          <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#10B981">
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
          <feDropShadow dx="0" dy="0" stdDeviation="40" floodColor="#10B981">
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

        {/* Shimmering text gradient */}
        <linearGradient id="auxano-text-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4a7a5a">
            <animate
              attributeName="offset"
              values="-2; -1; 0"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="25%" stopColor="white">
            <animate
              attributeName="offset"
              values="-1; 0; 1"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="50%" stopColor="#4a7a5a">
            <animate
              attributeName="offset"
              values="0; 1; 2"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
