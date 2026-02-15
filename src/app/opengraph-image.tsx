import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 55%, #DBEAFE 100%)",
          color: "#0B1220",
        }}
      >
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              background: "#071226",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 20, fontWeight: 700 }}>NRI Solutions</div>
            <div style={{ fontSize: 14, opacity: 0.7 }}>Ahmedabad</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 920 }}>
          <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.05 }}>
            Premium NRI Property & Legal Partner
          </div>
          <div style={{ fontSize: 22, opacity: 0.8, lineHeight: 1.35 }}>
            Documentation-first execution • On-ground follow-through • Crisp reporting
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["Property Management", "Land Services", "Legal & Compliance", "Investment Advisory"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(10, 28, 58, 0.12)",
                background: "rgba(255,255,255,0.8)",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

