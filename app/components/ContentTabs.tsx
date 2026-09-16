"use client";
import type { TabDef, TabId, ContentData } from "../data";
import { PhoneMockup } from "./PhoneMockup";

interface Props {
  tabs: TabDef[];
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
  content: ContentData;
}

export function ContentTabs({ tabs, activeTab, onTabChange, content }: Props) {
  return (
    <>
      <div className="tabs">
        {tabs.map((t) => (
          <div
            key={t.id}
            className={`tab ${t.id === activeTab ? "on" : ""}`}
            onClick={() => onTabChange(t.id)}
          >
            {t.label}
          </div>
        ))}
      </div>
      <TabPanel tab={activeTab} content={content} />
    </>
  );
}

function TabPanel({ tab, content }: { tab: TabId; content: ContentData }) {
  const d = content;

  if (tab === "len") {
    return (
      <div className="card fade-in">
        <div className="card-head">
          <span className="card-head-title">Property Listing</span>
          <div style={{ display: "flex", gap: 6 }}>
            <span className="badge b-en">English</span>
            <span className="badge b-warn">⚠ Compliance Check</span>
          </div>
        </div>
        <div className="card-body">
          <div className="panel-inner">{d.en}</div>
          <div style={{ marginTop: 10, display: "flex", gap: 12, fontSize: 10, color: "var(--t3)" }}>
            <span>✓ Figures = projected</span>
            <span>✓ No financial advice</span>
            <span>✓ Brand tone verified</span>
          </div>
        </div>
      </div>
    );
  }

  if (tab === "lar") {
    return (
      <div className="card fade-in">
        <div className="card-head">
          <span className="card-head-title">وصف العقار</span>
          <div style={{ display: "flex", gap: 6 }}>
            <span className="badge b-ar">العربية</span>
            <span className="badge b-ok">✓ تكييف ثقافي</span>
          </div>
        </div>
        <div className="card-body">
          <div className="panel-inner rtl" style={{ fontSize: 14, lineHeight: 2 }}>{d.ar}</div>
          <div style={{ marginTop: 10, fontSize: 10, color: "var(--t3)", direction: "rtl", textAlign: "right" }}>
            ✓ محتوى مُكيَّف ثقافياً وليس مترجماً حرفياً · ✓ أرقام متوقعة
          </div>
        </div>
      </div>
    );
  }

  if (tab === "ig") {
    return (
      <div className="fade-in">
        <div className="phone-grid">
          <PhoneMockup caption={d.ig_en} dir="ltr" lang="ENGLISH" loc={d._loc} price={d._price} />
          <PhoneMockup caption={d.ig_ar} dir="rtl" lang="العربية" loc={d._loc} price={d._price} />
        </div>
      </div>
    );
  }

  if (tab === "tk") {
    return (
      <div className="fade-in">
        <div className="phone-grid">
          <PhoneMockup caption={d.tk_en} dir="ltr" lang="ENGLISH" loc={d._loc} price={d._price} />
          <PhoneMockup caption={d.tk_ar} dir="rtl" lang="العربية" loc={d._loc} price={d._price} />
        </div>
      </div>
    );
  }

  if (tab === "fb") {
    return (
      <div className="fade-in">
        <div className="phone-grid">
          <PhoneMockup caption={d.fb_en} dir="ltr" lang="ENGLISH" loc={d._loc} price={d._price} />
          <PhoneMockup caption={d.fb_ar} dir="rtl" lang="العربية" loc={d._loc} price={d._price} />
        </div>
      </div>
    );
  }

  if (tab === "br") {
    return (
      <div className="card fade-in">
        <div className="card-head">
          <span className="card-head-title">Brochure Preview</span>
          <span className="badge b-en">Canva Auto-Fill</span>
        </div>
        <div className="card-body">
          <div className="broch">
            <div style={{ fontSize: 40, marginBottom: 6 }}>🏙️</div>
            <div className="broch-title">{d._title}</div>
            <div style={{ fontSize: 11, color: "var(--t3)" }}>{d._loc}</div>
            <div className="broch-grid">
              <div className="broch-stat"><div className="broch-stat-val">{d._beds}</div><div className="broch-stat-label">Bedrooms</div></div>
              <div className="broch-stat"><div className="broch-stat-val">{d._baths}</div><div className="broch-stat-label">Bathrooms</div></div>
              <div className="broch-stat"><div className="broch-stat-val">{d._sqft}</div><div className="broch-stat-label">Sq Ft</div></div>
            </div>
            <div className="broch-price">{d._price}</div>
            <div style={{ fontSize: 10, color: "var(--t3)" }}>(projected)</div>
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--b1)" }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 15, fontWeight: 700, background: "linear-gradient(135deg, var(--g), var(--g2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>British Rich</div>
              <div style={{ fontSize: 10, color: "var(--t3)", marginTop: 2 }}>britishrich.co.uk</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
