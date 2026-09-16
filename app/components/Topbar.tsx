export function Topbar() {
  return (
    <div className="topbar">
      <div className="tb-left">
        <span className="tb-title">Content Pipeline</span>
        <span className="tb-sep" />
        <span className="tb-path">pipeline / new-listing</span>
      </div>
      <div className="tb-right">
        <span className="tb-badge tb-live">LIVE</span>
        <span style={{ fontSize: 10, color: "var(--t3)", fontFamily: "var(--mono)" }}>v1.0.0</span>
      </div>
    </div>
  );
}
