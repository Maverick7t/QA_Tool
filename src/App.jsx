import React, { useState } from "react";

const API_BASE = process.env.NODE_ENV === "development"
  ? "http://localhost:8000"
  : "https://your-azure-deployment.azurewebsites.net";

export default function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.statusText}`);
      }

      const data = await res.json();
      setResponse(data.answer || "No answer returned");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1f1f1f 0%, #121212 100%)",
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

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ask your question here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={loading}
            style={{
              width: "100%",
              padding: "1rem 1.25rem",
              fontSize: "1.1rem",
              borderRadius: 12,
              border: "2px solid #555",
              backgroundColor: "#222",
              color: "#f1f1f1",
              marginBottom: "1.5rem",
              boxShadow: "inset 0 0 8px #111",
              transition: "border-color 0.3s ease",
              boxSizing: "border-box",
            }}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: 12,
              border: "none",
              backgroundColor: "#e03e2f",
              color: "#fff",
              fontWeight: "700",
              fontSize: "1.1rem",
              cursor: loading || !query.trim() ? "not-allowed" : "pointer",
              boxShadow: "0 0 10px #e03e2f",
              userSelect: "none",
              marginBottom: "1.5rem",
              width: "100%",
              maxWidth: 480,
            }}
          >
            {loading ? "Loading..." : "Ask"}
          </button>
        </form>

        {error && (
          <div
            style={{
              color: "#e03e2f",
              fontWeight: "700",
              marginBottom: "1.5rem",
              userSelect: "none",
            }}
          >
            {error}
          </div>
        )}

        {response && (
          <div
            style={{
              padding: "1rem",
              borderRadius: 16,
              background: "rgba(224, 62, 47, 0.1)",
              border: "2px solid #e03e2f",
              color: "#e03e2f",
              fontWeight: "700",
              fontSize: "1.15rem",
              textAlign: "center",
              boxShadow: "0 0 20px rgba(224, 62, 47, 0.3)",
              userSelect: "text",
              whiteSpace: "pre-wrap",
              boxSizing: "border-box",
            }}
          >
            {response}
          </div>
        )}

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
