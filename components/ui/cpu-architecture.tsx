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

export function AuxanoChip({
  className,
  width = "100%",
  height = "100%",
  text = "AUXANO",
  showConnections = true,
  animateText = true,
  lineMarkerSize = 18,
  animateLines = true,
  animateMarkers = true,
}: AuxanoChipProps) {
  return (
    <svg
      className={cn("text-muted", className)}
      width={width}
      height={height}
      viewBox="0 0 300 170"
    >
      {/* Circuit Paths */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.4"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#auxano-circle-marker)"
      >
        {/* Path 1 — top-left to chip */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 5 30 h 120 q 8 0 8 8 v 55"
        />
        {/* Path 2 — top-right to chip */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 295 15 h -120 q -8 0 -8 8 v 70"
        />
        {/* Path 3 — right to chip */}
        <path d="M 210 25 v 40 q 0 8 -8 8 h -20" />
        {/* Path 4 — bottom-right to chip */}
        <path d="M 270 135 v -40 q 0 -8 -8 -8 h -80" />
        {/* Path 5 — bottom loop to chip */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 220 110 h 25 q 8 0 8 8 v 16 q 0 8 -8 8 h -65 q -8 0 -8 -8 v -40"
        />
        {/* Path 6 — bottom-center up */}
        <path d="M 148 160 v -68" />
        {/* Path 7 — bottom-left to chip */}
        <path d="M 138 150 v -25 q 0 -8 -8 -8 h -16 q -8 0 -8 -8 v -8 q 0 -8 8 -8 h 30" />
        {/* Path 8 — left to chip */}
        <path d="M 40 50 h 40 q 8 0 8 8 v 10 q 0 8 8 8 h 48" />
        {/* Animation */}
        {animateLines && (
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        )}
      </g>

      {/* Animated Light Orbs */}
      {/* 1 — Emerald */}
      <g mask="url(#auxano-mask-1)">
        <circle className="cpu-architecture cpu-line-1" cx="0" cy="0" r="10" fill="url(#auxano-emerald-grad)" />
      </g>
      {/* 2 — Teal */}
      <g mask="url(#auxano-mask-2)">
        <circle className="cpu-architecture cpu-line-2" cx="0" cy="0" r="10" fill="url(#auxano-teal-grad)" />
      </g>
      {/* 3 — Purple */}
      <g mask="url(#auxano-mask-3)">
        <circle className="cpu-architecture cpu-line-3" cx="0" cy="0" r="10" fill="url(#auxano-purple-grad)" />
      </g>
      {/* 4 — White */}
      <g mask="url(#auxano-mask-4)">
        <circle className="cpu-architecture cpu-line-4" cx="0" cy="0" r="10" fill="url(#auxano-white-grad)" />
      </g>
      {/* 5 — Green */}
      <g mask="url(#auxano-mask-5)">
        <circle className="cpu-architecture cpu-line-5" cx="0" cy="0" r="10" fill="url(#auxano-green-grad)" />
      </g>
      {/* 6 — Amber */}
      <g mask="url(#auxano-mask-6)">
        <circle className="cpu-architecture cpu-line-6" cx="0" cy="0" r="10" fill="url(#auxano-amber-grad)" />
      </g>
      {/* 7 — Cyan */}
      <g mask="url(#auxano-mask-7)">
        <circle className="cpu-architecture cpu-line-7" cx="0" cy="0" r="10" fill="url(#auxano-cyan-grad)" />
      </g>
      {/* 8 — Rose */}
      <g mask="url(#auxano-mask-8)">
        <circle className="cpu-architecture cpu-line-8" cx="0" cy="0" r="10" fill="url(#auxano-rose-grad)" />
      </g>

      {/* Central Chip */}
      <g>
        {/* Chip connections */}
        {showConnections && (
          <g fill="url(#auxano-connection-gradient)">
            <rect x="135" y="60" width="3.5" height="7" rx="1" />
            <rect x="150" y="60" width="3.5" height="7" rx="1" />
            <rect x="165" y="60" width="3.5" height="7" rx="1" />
            <rect x="135" y="103" width="3.5" height="7" rx="1" />
            <rect x="150" y="103" width="3.5" height="7" rx="1" />
            <rect x="165" y="103" width="3.5" height="7" rx="1" />
            <rect x="118" y="78" width="7" height="3.5" rx="1" />
            <rect x="118" y="90" width="7" height="3.5" rx="1" />
            <rect x="178" y="78" width="7" height="3.5" rx="1" />
            <rect x="178" y="90" width="7" height="3.5" rx="1" />
          </g>
        )}
        {/* Main Chip Rectangle */}
        <rect
          x="125"
          y="67"
          width="53"
          height="36"
          rx="3"
          fill="#181818"
          filter="url(#auxano-glow)"
        />
        {/* Chip Text — AUXANO */}
        <text
          x="151.5"
          y="86"
          fontSize="9"
          fill={animateText ? "url(#auxano-text-gradient)" : "white"}
          fontWeight="700"
          letterSpacing="0.12em"
          textAnchor="middle"
        >
          {text}
        </text>
        {/* Subtitle — INTELLIGENCE */}
        <text
          x="151.5"
          y="96"
          fontSize="4"
          fill="#34D399"
          fontWeight="400"
          letterSpacing="0.25em"
          textAnchor="middle"
        >
          INTELLIGENCE
        </text>
      </g>

      {/* Defs — Masks, Gradients, Filters */}
      <defs>
        {/* Masks */}
        <mask id="auxano-mask-1">
          <path d="M 5 30 h 120 q 8 0 8 8 v 55" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-2">
          <path d="M 295 15 h -120 q -8 0 -8 8 v 70" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-3">
          <path d="M 210 25 v 40 q 0 8 -8 8 h -20" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-4">
          <path d="M 270 135 v -40 q 0 -8 -8 -8 h -80" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-5">
          <path d="M 220 110 h 25 q 8 0 8 8 v 16 q 0 8 -8 8 h -65 q -8 0 -8 -8 v -40" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-6">
          <path d="M 148 160 v -68" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-7">
          <path d="M 138 150 v -25 q 0 -8 -8 -8 h -16 q -8 0 -8 -8 v -8 q 0 -8 8 -8 h 30" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-8">
          <path d="M 40 50 h 40 q 8 0 8 8 v 10 q 0 8 8 8 h 48" strokeWidth="0.6" stroke="white" />
        </mask>

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

        {/* Emerald glow filter */}
        <filter id="auxano-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#10B981" floodOpacity="0.3" />
          <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodColor="black" floodOpacity="0.2" />
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
          <circle cx="5" cy="5" r="2" fill="black" stroke="#232323" strokeWidth="0.5">
            {animateMarkers && (
              <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
            )}
          </circle>
        </marker>

        {/* Connection gradient */}
        <linearGradient id="auxano-connection-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F4F4F" />
          <stop offset="60%" stopColor="#121214" />
        </linearGradient>

        {/* Shimmering text gradient */}
        <linearGradient id="auxano-text-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#666666">
            <animate attributeName="offset" values="-2; -1; 0" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </stop>
          <stop offset="25%" stopColor="white">
            <animate attributeName="offset" values="-1; 0; 1" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </stop>
          <stop offset="50%" stopColor="#666666">
            <animate attributeName="offset" values="0; 1; 2;" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
