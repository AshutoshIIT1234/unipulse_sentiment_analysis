import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      {/* ── Top Nav ── */}
      <nav style={{
        background: "#161b22",
        borderBottom: "1px solid #21262d",
        padding: "14px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{
          fontSize: 18,
          fontWeight: 800,
          color: "#f0f6fc",
          fontFamily: "monospace",
        }}>
          ⚡ UniPulse <span style={{ color: "#f97316" }}>AI</span>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <Link to="/" style={{ color: "#8b949e", textDecoration: "none", fontSize: 13 }}>
            Dashboard
          </Link>
          <Link to="/compare" style={{ color: "#8b949e", textDecoration: "none", fontSize: 13 }}>
            Compare
          </Link>
        </div>
      </nav>

      {/* ── Hero Banner ── */}
      <div style={{
        background: "#0d1117",
        borderBottom: "1px solid #21262d",
        padding: "48px 32px 44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 40,
      }}>

        {/* Left: Tagline */}
        <div style={{ flex: 1 }}>

          {/* LIVE pill + label */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span className="live-pill">
              <span className="live-dot" />
              LIVE
            </span>
            <span className="powered-tag">Reddit-Powered Intelligence</span>
          </div>

          {/* Main heading */}
          <h1 className="hero-h1">
            Your window into what<br />
            <span className="hero-accent">IITians</span> are actually saying.
          </h1>

          {/* Description */}
          <p className="hero-sub">
            We scan Reddit daily across{" "}
            <span className="hl-blue">20+ IIT subreddits</span>
            {" "}— from{" "}
            <span className="hl-purple">placements to campus life</span>
            {" "}— and turn raw posts into{" "}
            <span className="hl-orange">live sentiment scores.</span>
          </p>

          {/* Feature tags */}
          <div className="hero-tags">
            <span className="tag tag-blue">NLP Sentiment</span>
            <span className="tag tag-purple">Cross-Institute Compare</span>
            <span className="tag tag-green">Daily Updates</span>
            <span className="tag tag-orange">Real Student Posts</span>
          </div>

        </div>

        {/* Right: Stat Cards */}
        <div className="hero-right">
          {[
            {
              color: "#38bdf8", bg: "#0d2137", val: "20+",
              label: "IIT Institutes", sub: "Subreddits tracked live",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="#38bdf8" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
                </svg>
              ),
            },
            {
              color: "#a78bfa", bg: "#1a1040", val: "1000s",
              label: "Posts Analyzed", sub: "Across topics & campuses",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="#a78bfa" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              ),
            },
            {
              color: "#34d399", bg: "#0d2820", val: "Real-time",
              label: "Sentiment Engine", sub: "NLP-powered scoring",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="#34d399" strokeWidth="2" strokeLinecap="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              ),
            },
          ].map(({ color, bg, val, label, sub, icon }) => (
            <div key={label} className="hero-stat-card">
              <div className="stat-icon" style={{ background: bg }}>{icon}</div>
              <div>
                <div className="stat-val" style={{ color }}>{val}</div>
                <div className="stat-label">{label}</div>
                <div className="stat-sub">{sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </header>
  );
}