import { ImageResponse } from "next/og";

export const alt = "Nord Frame - nowoczesne domy szkieletowe pod klucz";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #10281b 0%, #173625 56%, #294f3a 100%)",
          color: "white",
          padding: "56px 64px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -90,
            top: -100,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 72,
            bottom: 52,
            width: 320,
            height: 250,
            border: "8px solid rgba(255,255,255,0.14)",
            borderBottomWidth: 12,
            clipPath: "polygon(50% 0%, 100% 34%, 100% 100%, 0% 100%, 0% 34%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 700,
            gap: 22,
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "10px 18px",
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Nord Frame
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.05em",
            }}
          >
            Nowoczesne domy szkieletowe pod klucz
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.35,
              maxWidth: 660,
            }}
          >
            Projekt, prefabrykacja i montaż w przewidywalnym procesie. Wycena w
            24h i sprawna realizacja inwestycji.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
