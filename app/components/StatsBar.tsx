interface Props {
  stats: { props: number; posts: number; leads: number };
}
export function StatsBar({ stats }: Props) {
  const cells = [
    { icon: "📥", bg: "var(--gbg)", color: "var(--g)", val: stats.props, label: "Properties This Week" },
    { icon: "📤", bg: "var(--blbg)", color: "var(--bl)", val: stats.posts, label: "Posts Published" },
    { icon: "👤", bg: "var(--ppbg)", color: "var(--pp)", val: stats.leads || "—", label: "Leads Captured" },
    { icon: "✅", bg: "var(--grbg)", color: "var(--gr)", val: "94%", label: "Approval Rate" },
  ];
  return (
    <div className="stats-bar">
      {cells.map((c) => (
        <div className="stat-cell" key={c.label}>
          <div className="stat-icon" style={{ background: c.bg, color: c.color }}>{c.icon}</div>
          <div>
            <div className="stat-val">{c.val}</div>
            <div className="stat-label">{c.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
