export function Sidebar() {
  const items = [
    { icon: "⚡", label: "Pipeline", active: true },
    { icon: "🏠", label: "Properties" },
    { icon: "📝", label: "Content" },
    { icon: "📊", label: "Analytics" },
    { icon: "👤", label: "Leads" },
    { icon: "⚙️", label: "Settings" },
  ];
  return (
    <div className="sidebar">
      <div className="sb-logo">BR</div>
      <div className="sb-nav">
        {items.map((item) => (
          <div key={item.label} className={`sb-item ${item.active ? "on" : ""}`} title={item.label}>
            {item.icon}
          </div>
        ))}
      </div>
      <div className="sb-bottom">
        <div className="sb-item" title="Help">❓</div>
      </div>
    </div>
  );
}
