interface Props {
  onApprove: () => void;
}

export function ApprovalBar({ onApprove }: Props) {
  return (
    <div className="card" style={{ marginTop: 16 }}>
      <div className="card-head">
        <span className="card-head-title">✅ Review & Approve</span>
        <span style={{ fontSize: 9, color: "var(--t3)" }}>Nothing publishes without your approval</span>
      </div>
      <div className="card-body">
        <div className="approve-grid">
          <button className="apr-btn apr-yes" onClick={onApprove}>✅ Approve & Publish All</button>
          <button className="apr-btn apr-secondary" onClick={() => alert("Opens editor with AI-suggested revisions")}>✏️ Edit</button>
          <button className="apr-btn apr-secondary" onClick={() => alert("Discarded. Feedback logged for prompt tuning.")}>❌ Reject</button>
        </div>
      </div>
    </div>
  );
}
