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

// Main artery indices — straight cardinal shots with thicker strokes
const ARTERY_INDICES = new Set([1, 5, 9, 10, 13, 14]);

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
      {/* Secondary circuit paths — thinner, lower hierarchy */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="1.2"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#auxano-circle-marker)"
      >
        {PATHS.map((d, i) =>
          !ARTERY_INDICES.has(i) ? (
            <path key={i} d={d} strokeDasharray="100 100" pathLength="100" />
          ) : null
        )}
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

      {/* Main artery paths — thicker, brighter, cardinal directions */}
      <g
        stroke="#2a5a3a"
        fill="none"
        strokeWidth="2.2"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#auxano-circle-marker)"
      >
        {PATHS.map((d, i) =>
          ARTERY_INDICES.has(i) ? (
            <path key={i} d={d} strokeDasharray="100 100" pathLength="100" />
          ) : null
        )}
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
            r={
              ARTERY_INDICES.has(i)
                ? i % 2 === 0 ? 32 : 28
                : i % 4 === 0 ? 22 : i % 3 === 0 ? 18 : 20
            }
            fill={`url(#${GRADIENT_CYCLE[i % GRADIENT_CYCLE.length]})`}
          />
        </g>
      ))}

      {/* Chip ambient glow layer — subtle emerald bloom behind text area */}
      <rect
        x="350"
        y="270"
        width="500"
        height="260"
        rx="16"
        fill="transparent"
        filter="url(#auxano-glow-ambient)"
      />

      {/* Defs */}
      <defs>
        {/* Masks — one per path, wider stroke for more visible orbs */}
        {PATHS.map((d, i) => (
          <mask key={i} id={`auxano-mask-${i + 1}`}>
            <path d={d} strokeWidth="5" stroke="white" fill="none" />
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

        {/* Chip body gradient — darker at edges, slightly lighter at center */}
        <radialGradient id="auxano-chip-body-grad" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(10,18,10,0.85)" />
          <stop offset="100%" stopColor="rgba(10,18,10,0.97)" />
        </radialGradient>

        {/* Chip inner face gradient */}
        <radialGradient id="auxano-chip-face-grad" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(14,26,14,0.9)" />
          <stop offset="100%" stopColor="rgba(8,14,8,0.98)" />
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

        {/* Pin glow — emerald drop shadow */}
        <filter id="auxano-pin-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#10B981" floodOpacity="0.7" />
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

        {/* Connection gradient — brighter emerald */}
        <linearGradient id="auxano-connection-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#1a3a2a" />
        </linearGradient>
      </defs>
    </svg>
  );
}
