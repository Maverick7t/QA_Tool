import React, { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",  // horizontal center
        alignItems: "center",      // vertical center
        background:
          "linear-gradient(135deg, #1f1f1f 0%, #121212 100%)",
        color: "#f1f1f1",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "2rem",
            fontWeight: "600",
            letterSpacing: "0.05em",
            fontSize: "2.25rem",
            textShadow: "0 0 10px #e03e2f",
            userSelect: "none",
          }}
        >
           AI-Powered QA Chat Tool
        </h1>

        <input
          type="text"
          placeholder="Ask your question here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled
          title="Service currently unavailable due to funding"
          style={{
              width: "100%",
              padding: "1rem 1.25rem",
              fontSize: "1.1rem",
              borderRadius: 12,
              border: "2px solid #555",
              backgroundColor: "#222",
              color: "#888",
              marginBottom: "1.5rem",
              cursor: "not-allowed",
              boxShadow: "inset 0 0 8px #111",
              transition: "border-color 0.3s ease",
              userSelect: "none",
              boxSizing: "border-box",
          }}
        />

        <div
          style={{
              width: "100%",
              padding: "1.5rem 1.25rem",
              borderRadius: 16,
              background: "rgba(224, 62, 47, 0.1)",
              border: "2px solid #e03e2f",
              color: "#e03e2f",
              fontWeight: "700",
              fontSize: "1.15rem",
              textAlign: "center",
              boxShadow: "0 0 20px rgba(224, 62, 47, 0.3)",
              userSelect: "none",
              animation: "pulse 3s infinite",
              boxSizing: "border-box",
          }}
        >
          Services are temporarily down due to funding constraints. I appreciate your understanding.
        </div>

        <footer
          style={{
            marginTop: "3rem",
            fontSize: "0.85rem",
            opacity: 0.5,
            userSelect: "none",
          }}
        >
            Demo
        </footer>
      </div>

      <style>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 20px rgba(224, 62, 47, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(224, 62, 47, 0.6);
          }
          100% {
            box-shadow: 0 0 20px rgba(224, 62, 47, 0.3);
          }
        }
      `}</style>
    </div>
  );
}
