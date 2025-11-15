import { useLocation } from "react-router-dom";
import { analyzeFakeNews } from "../api/Analyze";
import { useEffect, useState } from "react";
import ResultMeter from "../Components/ResultMeter";

export default function Result() {
  const { state } = useLocation();
  const content = state?.content;
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function getResult() {
      if (content) {
        const res = await analyzeFakeNews(content);  // ✅ FIXED (await)
        setResult(res);
      }
    }
    getResult();
  }, [content]);

  if (!content) return <p>No content found.</p>;

  return (
    <>
    <div style={{ padding: 20 }}>
      <h2>Analysis Result</h2>

      <p><b>Input:</b> {content}</p>

      {result && (
        <>
          <ResultMeter score={result.score} />
          <p style={{ marginTop: 10, fontSize: 18 }}>
            {result.message}
          </p>
        </>
      )}
    </div>
    <button
  onClick={() => window.history.back()}
  style={{
    marginTop: 20,
    padding: "10px 20px",
    fontSize: 16,
    cursor: "pointer"
  }}
>
  ⬅ Back
</button>

    </>
  );
}
