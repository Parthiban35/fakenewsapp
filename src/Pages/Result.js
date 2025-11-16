import { useLocation, useNavigate } from "react-router-dom";
import { analyzeFakeNews } from "../api/Analyze";
import { useEffect, useState } from "react";
import ResultMeter from "../Components/ResultMeter";
import "../Pages/Result.css"   // <-- ADD THIS

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const content = state?.content;
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (content) {
      const res = analyzeFakeNews(content);
      setResult(res);
    }
  }, [content]);

  if (!content) return <p>No content found.</p>;

  return (
    <div className="result-container">
      <div className="result-card">
        <h2 className="result-title">Analysis Result</h2>

        <p className="result-input"><b>Input:</b> {content}</p>

        {result && (
          <>
            <ResultMeter score={result.score} />
            <p style={{ marginTop: 10, fontSize: 18 }}>
              {result.message}
            </p>
          </>
        )}

        <button className="back-btn" onClick={() => navigate("/")}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}
