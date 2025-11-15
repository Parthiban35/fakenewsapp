import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    // navigate("/result", { state: { content } });
    navigate("/result", { state: { content }, replace: true });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Paste News Content Below:</h2>

      <textarea
        rows="7"
        style={{ width: "100%", padding: 10 }}
        placeholder="Paste article text or URL..."
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={handleAnalyze}
        style={{
          marginTop: 15,
          padding: "10px 20px",
          fontSize: 16,
          cursor: "pointer"
        }}
      >
        Analyze 🔍
      </button>
    </div>
  );
}
