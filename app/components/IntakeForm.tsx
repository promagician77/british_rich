"use client";
import { useState } from "react";

interface Props {
  onSubmit: (data: Record<string, string>) => void;
}

export function IntakeForm({ onSubmit }: Props) {
  const [form, setForm] = useState({
    title: "Luxury Penthouse, Canary Wharf",
    price: "£1,250,000",
    beds: "3",
    baths: "2",
    sqft: "1,850",
    type: "Penthouse",
    loc: "Canary Wharf, London E14",
    station: "Canary Wharf (Jubilee/Elizabeth)",
    features: "Panoramic River Thames views, 42nd floor, private wraparound balcony, Italian marble bathrooms, Gaggenau kitchen, 24hr concierge, residents' gym & pool, underground parking",
    audience: "International Investors",
    tone: "Luxury & Exclusive",
  });

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="card fade-in">
      <div className="card-head">
        <span className="card-head-title">📥 Property Intake</span>
        <span className="badge b-en">Step 1 of 4</span>
      </div>
      <div className="card-body">
        <div className="form-grid">
          <div className="fr2">
            <div><label className="form-label">Property Title</label><input className="form-input" value={form.title} onChange={(e) => set("title", e.target.value)} /></div>
            <div><label className="form-label">Price (£)</label><input className="form-input" value={form.price} onChange={(e) => set("price", e.target.value)} /></div>
          </div>
          <div className="fr4">
            <div><label className="form-label">Beds</label><input className="form-input" value={form.beds} onChange={(e) => set("beds", e.target.value)} /></div>
            <div><label className="form-label">Baths</label><input className="form-input" value={form.baths} onChange={(e) => set("baths", e.target.value)} /></div>
            <div><label className="form-label">Sq Ft</label><input className="form-input" value={form.sqft} onChange={(e) => set("sqft", e.target.value)} /></div>
            <div><label className="form-label">Type</label>
              <select className="form-select" value={form.type} onChange={(e) => set("type", e.target.value)}>
                <option>Penthouse</option><option>Apartment</option><option>House</option><option>Villa</option>
              </select>
            </div>
          </div>
          <div className="fr2">
            <div><label className="form-label">Location</label><input className="form-input" value={form.loc} onChange={(e) => set("loc", e.target.value)} /></div>
            <div><label className="form-label">Nearest Station</label><input className="form-input" value={form.station} onChange={(e) => set("station", e.target.value)} /></div>
          </div>
          <div><label className="form-label">Key Features</label><textarea className="form-textarea" value={form.features} onChange={(e) => set("features", e.target.value)} /></div>
          <div className="fr2">
            <div><label className="form-label">Target Audience</label>
              <select className="form-select" value={form.audience} onChange={(e) => set("audience", e.target.value)}>
                <option>International Investors</option><option>First-Time Buyers</option><option>Families</option>
              </select>
            </div>
            <div><label className="form-label">Content Tone</label>
              <select className="form-select" value={form.tone} onChange={(e) => set("tone", e.target.value)}>
                <option>Luxury &amp; Exclusive</option><option>Professional</option><option>Warm &amp; Inviting</option>
              </select>
            </div>
          </div>
          <button className="btn-gold" onClick={() => onSubmit(form)}>⚡ Generate Content</button>
        </div>
      </div>
    </div>
  );
}
