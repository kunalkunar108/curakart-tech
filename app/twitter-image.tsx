import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "CURAKART — Technology That Moves Businesses Forward";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function TwitterImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: "#F7F5F0", color: "#263A46", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", fontSize: 42, fontWeight: 800, letterSpacing: "-2px" }}>CURA<span style={{ color: "#C77D5B" }}>KART</span></div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "940px" }}>
        <div style={{ fontSize: 19, color: "#C77D5B", letterSpacing: "5px", textTransform: "uppercase", marginBottom: 24 }}>Independent digital solutions studio</div>
        <div style={{ fontSize: 66, lineHeight: 1.08, fontWeight: 700, letterSpacing: "-3px" }}>Technology That Moves Businesses Forward.</div>
        <div style={{ fontSize: 26, color: "#66747A", marginTop: 28 }}>Websites · Custom software · Automation</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #DEDBD3", paddingTop: 22, fontSize: 20, color: "#66747A" }}>
        <span>curakart.com</span><span>Thoughtful technology. Practical outcomes.</span>
      </div>
      <div style={{ position: "absolute", right: -130, top: 110, width: 360, height: 360, border: "2px solid #C77D5B", borderRadius: "50%", opacity: 0.18 }} />
      <div style={{ position: "absolute", right: -70, top: 170, width: 240, height: 240, border: "2px solid #263A46", borderRadius: "50%", opacity: 0.12 }} />
    </div>,
    { ...size }
  );
}