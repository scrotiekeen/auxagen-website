import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Auxano Agency — Solutions Engineered For Your Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background:
            "radial-gradient(ellipse 130% 110% at 50% 45%, #060B14 0%, #080e18 25%, #0a0f1a 50%, #020408 100%)",
          position: "relative",
        }}
      >
        {/* Emerald nebula bloom — top right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 700,
            height: 500,
            background:
              "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.35) 0%, rgba(52, 211, 153, 0.15) 45%, transparent 70%)",
            filter: "blur(40px)",
            display: "flex",
          }}
        />
        {/* Indigo nebula — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -150,
            width: 600,
            height: 400,
            background:
              "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.25) 0%, rgba(139, 92, 246, 0.12) 50%, transparent 70%)",
            filter: "blur(50px)",
            display: "flex",
          }}
        />

        {/* Brand pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 48,
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background:
                "linear-gradient(135deg, #10B981 0%, #34D399 50%, #10B981 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 800,
              color: "#0D1117",
              boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
            }}
          >
            A
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "#10B981",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Auxano Agency
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ display: "flex" }}>Solutions Engineered</span>
          <span
            style={{
              display: "flex",
              background: "linear-gradient(90deg, #34D399 0%, #10B981 50%, #6EE7B7 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            For Your Business
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 30,
            color: "rgba(167, 243, 208, 0.7)",
            marginTop: 36,
            letterSpacing: "0.04em",
            zIndex: 10,
            display: "flex",
          }}
        >
          Growing with you, not past you.
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 64,
            left: 96,
            right: 96,
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(255, 255, 255, 0.45)",
            fontSize: 22,
            zIndex: 10,
          }}
        >
          <span style={{ display: "flex" }}>auxagen.co</span>
          <span
            style={{
              display: "flex",
              gap: 18,
              alignItems: "center",
            }}
          >
            <span style={{ display: "flex" }}>Consulting</span>
            <span style={{ color: "#10B981", display: "flex" }}>·</span>
            <span style={{ display: "flex" }}>Web & Software</span>
            <span style={{ color: "#10B981", display: "flex" }}>·</span>
            <span style={{ display: "flex" }}>AI Strategy</span>
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
