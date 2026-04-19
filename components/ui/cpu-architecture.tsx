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
}

// All 24 circuit path definitions — shared between SVG paths, masks, and CSS offset-paths
const PATHS = [
  // Left-side connections
  "M 0 100 h 180 q 8 0 8 8 v 62 q 0 8 8 8 h 39",
  "M 0 200 h 235",
  "M 0 300 h 130 q 8 0 8 -8 v -70 q 0 -8 8 -8 h 89",
  "M 0 150 h 140 q 8 0 8 8 v 27 q 0 8 8 8 h 79",
  // Right-side connections
  "M 600 100 h -180 q -8 0 -8 8 v 67 q 0 8 -8 8 h -39",
  "M 600 200 h -235",
  "M 600 300 h -130 q -8 0 -8 -8 v -70 q 0 -8 -8 -8 h -89",
  "M 600 155 h -120 q -8 0 -8 8 v 12 q 0 8 -8 8 h -99",
  // Top connections
  "M 120 0 v 100 q 0 8 8 8 h 107 q 8 0 8 8 v 59",
  "M 270 0 v 175",
  "M 320 0 v 175",
  "M 470 0 v 100 q 0 8 -8 8 h -119 q -8 0 -8 8 v 59",
  // Bottom connections
  "M 120 400 v -80 q 0 -8 8 -8 h 107 q 8 0 8 -8 v -79",
  "M 265 400 v -175",
  "M 330 400 v -175",
  "M 480 400 v -90 q 0 -8 -8 -8 h -120 q -8 0 -8 -8 v -69",
  // Corner staircase sweeps
  "M 30 30 h 80 q 8 0 8 8 v 60 q 0 8 8 8 h 80 q 8 0 8 8 v 61 h 21",
  "M 570 30 h -80 q -8 0 -8 8 v 60 q 0 8 -8 8 h -80 q -8 0 -8 8 v 61 h -21",
  "M 30 370 h 60 q 8 0 8 -8 v -60 q 0 -8 8 -8 h 60 q 8 0 8 -8 v -61 h 61",
  "M 570 370 h -80 q -8 0 -8 -8 v -60 q 0 -8 -8 -8 h -80 q -8 0 -8 -8 v -61 h -21",
  // Horizontal branch paths
  "M 50 200 h 80 q 8 0 8 8 h 97",
  "M 550 200 h -80 q -8 0 -8 -8 h -97",
  // Inner top shortcuts
  "M 180 30 v 70 q 0 8 8 8 h 39 q 8 0 8 8 v 59",
  "M 420 30 v 70 q 0 8 -8 8 h -39 q -8 0 -8 8 v 59",
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
}: AuxanoChipProps) {
  return (
    <svg
      className={cn("text-muted", className)}
      width={width}
      height={height}
      viewBox="0 0 600 400"
    >
      {/* Circuit Paths — all 24 */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.5"
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
            r={i % 4 === 0 ? 12 : i % 3 === 0 ? 8 : 10}
            fill={`url(#${GRADIENT_CYCLE[i % GRADIENT_CYCLE.length]})`}
          />
        </g>
      ))}

      {/* Chip ambient glow layer */}
      <rect
        x="215"
        y="165"
        width="170"
        height="70"
        rx="8"
        fill="transparent"
        filter="url(#auxano-glow-ambient)"
      />

      {/* Central Chip */}
      <g>
        {/* Dense Connection Pins — Top (12 pins) */}
        {showConnections && (
          <g fill="url(#auxano-connection-gradient)">
            {/* Top pins */}
            {[243, 252, 261, 270, 279, 288, 297, 306, 315, 324, 333, 342].map((x) => (
              <rect key={x} x={x} y="167" width="4" height="8" rx="1.5" />
            ))}
            {/* Bottom pins */}
            {[243, 252, 261, 270, 279, 288, 297, 306, 315, 324, 333, 342].map((x) => (
              <rect key={x} x={x} y="225" width="4" height="8" rx="1.5" />
            ))}
            {/* Left pins */}
            {[181, 190, 199, 208, 217].map((y) => (
              <rect key={y} x="227" y={y} width="8" height="4" rx="1" />
            ))}
            {/* Right pins */}
            {[181, 190, 199, 208, 217].map((y) => (
              <rect key={y} x="365" y={y} width="8" height="4" rx="1" />
            ))}
          </g>
        )}

        {/* Main Chip Body */}
        <rect
          x="235"
          y="175"
          width="130"
          height="50"
          rx="4"
          fill="#0e1a0e"
          filter="url(#auxano-glow)"
        />

        {/* Inner chip face */}
        <rect
          x="239"
          y="179"
          width="122"
          height="42"
          rx="2"
          fill="#0a120a"
          stroke="#1a3020"
          strokeWidth="0.5"
        />

        {/* Corner accent marks */}
        <g stroke="#10B981" strokeWidth="0.8" fill="none" opacity="0.5">
          <path d="M 241 183 h 6 M 241 183 v 5" />
          <path d="M 359 183 h -6 M 359 183 v 5" />
          <path d="M 241 217 h 6 M 241 217 v -5" />
          <path d="M 359 217 h -6 M 359 217 v -5" />
        </g>

        {/* Chip Text — AUXANO AGENCY */}
        <text
          x="300"
          y="198"
          fontSize="9.5"
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
          x="300"
          y="213"
          fontSize="4.5"
          fill="#34D399"
          fontWeight="400"
          letterSpacing="0.3em"
          textAnchor="middle"
          fontFamily="monospace"
        >
          INTELLIGENCE
        </text>

        {/* Center indicator dot */}
        <circle cx="300" cy="203" r="1" fill="#10B981" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Defs */}
      <defs>
        {/* Masks — one per path */}
        {PATHS.map((d, i) => (
          <mask key={i} id={`auxano-mask-${i + 1}`}>
            <path d={d} strokeWidth="0.8" stroke="white" fill="none" />
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
          <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#10B981">
            <animate
              attributeName="floodOpacity"
              values="0.5;0.9;0.5"
              dur="3s"
              repeatCount="indefinite"
            />
          </feDropShadow>
          <feDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor="black" floodOpacity="0.3" />
        </filter>

        {/* Ambient chip glow — softer, wider */}
        <filter id="auxano-glow-ambient" x="-100%" y="-100%" width="300%" height="300%">
          <feDropShadow dx="0" dy="0" stdDeviation="20" floodColor="#10B981">
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
