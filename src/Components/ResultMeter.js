export default function ResultMeter({ score }) {
  return (
    <div style={{ marginTop: 20 }}>
      <p style={{ fontSize: 18 }}>Fake Score: {score}%</p>

      <div style={{
        width: "100%",
        height: 20,
        background: "#ddd",
        borderRadius: 10,
        overflow: "hidden"
      }}>
        <div
          style={{
            width: `${score}%`,
            height: "100%",
            background: score > 50 ? "red" : "green",
            transition: "0.4s"
          }}
        />
      </div>
    </div>
  );
}
