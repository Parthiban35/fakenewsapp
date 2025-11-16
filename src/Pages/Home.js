// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Loader from "../Components/Loader/Loader";
// import "../Pages/Home.css";   // <-- CSS import

// export default function Home() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 9000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <Loader />;

//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   const handleAnalyze = () => {
//     navigate("/result", { state: { content }, replace: true });
//   };

//   return (
//     <div className="home-container">
//       <div className="home-card">
//         <h2 className="home-title">Fake News Analyzer</h2>

//         <textarea
//           className="home-input"
//           rows="7"
//           placeholder="Paste article text or URL..."
//           onChange={(e) => setContent(e.target.value)}
//         />

//         <button className="home-btn" onClick={handleAnalyze}>
//           Analyze 🔍
//         </button>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import "../Pages/Home.css";

export default function Home() {

  // ❗ All hooks should be here at top
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  // ❗ Conditional return ONLY after hooks
  if (loading) return <Loader />;

  const handleAnalyze = () => {
    navigate("/result", { state: { content }, replace: true });
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h2 className="home-title">Fake News Analyzer</h2>

        <textarea
          className="home-input"
          rows="7"
          placeholder="Paste article text or URL..."
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="home-btn" onClick={handleAnalyze}>
          Analyze 🔍
        </button>
      </div>
    </div>
  );
}
