// src/components/SentimentSuggestions.jsx
import { useEffect, useState } from "react";

export default function SentimentSuggestions({ sentiment, institution, samplePosts }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/suggestions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sentiment, institution, sample_posts: samplePosts }),
    })
      .then(r => r.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [sentiment, institution]);

  if (loading) return <div className="suggestions-skeleton">Generating recommendations...</div>;

  const colors = { positive: "#22c55e", negative: "#ef4444", neutral: "#f59e0b" };
  const color = colors[sentiment] || "#6366f1";

  return (
    <div className="suggestions-panel" style={{ borderLeft: `4px solid ${color}` }}>
      <h3>📋 Recommended Actions</h3>
      <ul>
        {data.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>

      <h3>🔗 Relevant Resources</h3>
      <ul>
        {data.resources.map((r, i) => (
          <li key={i}>
            <a href={r.url} target="_blank" rel="noreferrer">{r.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}