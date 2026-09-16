interface Props {
  caption: string;
  dir: "ltr" | "rtl";
  lang: string;
  loc: string;
  price: string;
}

export function PhoneMockup({ caption, dir, lang, loc, price }: Props) {
  return (
    <div className="phone-wrap">
      <div className="phone-label">{lang}</div>
      <div className="phone">
        <div className="ph-notch">
          <div className="ph-notch-dot" />
          <div className="ph-notch-bar" />
          <div className="ph-notch-dot" />
        </div>
        <div className="ph-head" style={dir === "rtl" ? { direction: "rtl" } : undefined}>
          <div className="ph-av">BR</div>
          <div style={dir === "rtl" ? { textAlign: "right" } : undefined}>
            <div className="ph-name">britishrich</div>
            <div className="ph-loc">{loc}</div>
          </div>
        </div>
        <div className="ph-img">
          <span>🏙️</span>
          <div className="ph-price" style={dir === "rtl" ? { left: "auto", right: 8 } : undefined}>
            {price}
          </div>
        </div>
        <div className="ph-actions" style={dir === "rtl" ? { direction: "rtl" } : undefined}>
          ♡ 💬 ✈️
        </div>
        <div className={`ph-cap ${dir === "rtl" ? "rtl" : ""}`}>
          <b>britishrich</b> {caption}
        </div>
        <div className="ph-home" />
      </div>
    </div>
  );
}
