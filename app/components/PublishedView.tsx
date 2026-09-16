interface Props {
  onReset: () => void;
}

export function PublishedView({ onReset }: Props) {
  const channels = [
    { icon: "🌐", name: "britishrich.co.uk", status: "Published", color: "var(--gr)" },
    { icon: "📸", name: "Instagram", status: "Queued 9:00 AM", color: "var(--bl)" },
    { icon: "🎬", name: "TikTok", status: "Queued 12:00 PM", color: "var(--pp)" },
    { icon: "📘", name: "Facebook", status: "Queued 10:30 AM", color: "var(--bl)" },
  ];

  return (
    <div className="pop-in">
      <div className="pub-card">
        <div className="pub-head">
          <div className="pub-icon">✓</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--gr)" }}>Content Approved & Queued</div>
            <div style={{ fontSize: 10, color: "var(--t3)" }}>4 channels · Lead capture active · CRM pipeline ready</div>
          </div>
        </div>
        {channels.map((c) => (
          <div className="ch-row" key={c.name}>
            <div className="ch-left">
              <span className="ch-icon">{c.icon}</span>
              <span className="ch-name">{c.name}</span>
            </div>
            <span className="ch-status" style={{ color: c.color }}>{c.status}</span>
          </div>
        ))}
        <div className="leads-grid">
          <div className="lead-card"><div className="lead-val" style={{ color: "var(--gr)" }}>0</div><div className="lead-label">Leads Today</div></div>
          <div className="lead-card"><div className="lead-val" style={{ color: "var(--g)" }}>EN + AR</div><div className="lead-label">Nurture Active</div></div>
          <div className="lead-card"><div className="lead-val" style={{ color: "var(--bl)" }}>Ready</div><div className="lead-label">CRM Pipeline</div></div>
        </div>
      </div>
      <div style={{ marginTop: 16, textAlign: "center" }}>
        <button className="btn-gold" style={{ maxWidth: 300 }} onClick={onReset}>+ Submit Another Property</button>
      </div>
    </div>
  );
}
