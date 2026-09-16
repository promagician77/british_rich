export type TabId = "len" | "lar" | "ig" | "tk" | "fb" | "br";

export interface PipelineStep {
  icon: string;
  name: string;
  sub: string;
}

export interface TabDef {
  id: TabId;
  label: string;
}

export interface ContentData {
  en: string;
  ar: string;
  ig_en: string;
  ig_ar: string;
  tk_en: string;
  tk_ar: string;
  fb_en: string;
  fb_ar: string;
  _title: string;
  _price: string;
  _beds: string;
  _baths: string;
  _sqft: string;
  _loc: string;
}

export const PIPELINE_STEPS: PipelineStep[] = [
  { icon: "📥", name: "Receiving property data", sub: "Validating fields" },
  { icon: "🤖", name: "Writing English listing", sub: "GPT-5.6 Luna · Luxury tone" },
  { icon: "🌍", name: "Writing Arabic listing", sub: "Cultural adaptation · RTL" },
  { icon: "📸", name: "Crafting Instagram post", sub: "EN + AR · Hashtags" },
  { icon: "🎬", name: "Crafting TikTok post", sub: "Hook-first · Trending" },
  { icon: "📘", name: "Crafting Facebook post", sub: "Storytelling · EN + AR" },
  { icon: "🎨", name: "Building brochure", sub: "Canva auto-fill" },
  { icon: "✅", name: "All content ready", sub: "7 assets · Awaiting review" },
];

export const TABS: TabDef[] = [
  { id: "len", label: "📝 Listing EN" },
  { id: "lar", label: "📝 وصف العقار" },
  { id: "ig", label: "📸 Instagram" },
  { id: "tk", label: "🎬 TikTok" },
  { id: "fb", label: "📘 Facebook" },
  { id: "br", label: "🎨 Brochure" },
];

export function generateFallbackContent(f: Record<string, string>): ContentData {
  const { title, price, beds, baths, sqft, type, loc, station, features } = f;

  return {
    en: `${title} — ${price} (projected)\n\nA breathtaking ${beds}-bedroom ${(type || "penthouse").toLowerCase()} spanning approximately ${sqft} sq ft on the 42nd floor of one of Canary Wharf's most prestigious addresses. This exceptional residence features ${(features || "").toLowerCase()}, offering an unparalleled lifestyle in London's most dynamic district.\n\nMoments from ${station}, placing Mayfair just 15 minutes away. Contact British Rich to arrange an exclusive private viewing.`,

    ar: `${title} — ${price} (متوقع)\n\nشقة بنتهاوس فاخرة من ${beds} غرف نوم تمتد على مساحة تقارب ${sqft} قدم مربع في الطابق الثاني والأربعين من أحد أرقى العناوين في كناري وارف. يتميز هذا المسكن الاستثنائي بإطلالات بانورامية خلابة على نهر التايمز، وشرفة خاصة محيطة، وحمامات من الرخام الإيطالي، ومطبخ غاغيناو.\n\nعلى بُعد لحظات من محطة كناري وارف. تواصل مع بريتش ريتش لترتيب معاينة خاصة.`,

    ig_en: `🏙️ 42nd Floor Living — Canary Wharf\n\n✨ ${beds} Bed ${type} · ${sqft} sq ft\n🌊 Panoramic Thames Views\n💎 Italian Marble · Gaggenau Kitchen\n📍 ${loc}\n\n${price} (projected)\n\nDM us or link in bio 🔗\n\n#BritishRich #LondonProperty #CanaryWharf #LuxuryLiving #UKRealEstate`,

    ig_ar: `🏙️ حياة فاخرة — الطابق ٤٢ كناري وارف\n\n✨ ${beds} غرف · ${sqft} قدم مربع\n🌊 إطلالات بانورامية\n💎 رخام إيطالي · مطبخ غاغيناو\n\n${price} (متوقع)\n\nراسلنا أو الرابط في البايو 🔗\n\n#بريتش_ريتش #عقارات_لندن #كناري_وارف #فخامة #استثمار`,

    tk_en: `POV: Your new view from the 42nd floor 🌇\n\n${beds} bed penthouse · Canary Wharf\n${sqft} sq ft of pure luxury\nThames views that hit different\n\n${price} (projected)\n\nLink in bio 🔗\n\n#LondonProperty #CanaryWharf #LuxuryLiving #BritishRich`,

    tk_ar: `منظرك الجديد من الطابق ٤٢ 🌇\n\nبنتهاوس ${beds} غرف · كناري وارف\nإطلالات التايمز\n\n${price} (متوقع)\n\nالرابط في البايو 🔗\n\n#عقارات_لندن #كناري_وارف #بريتش_ريتش #فخامة`,

    fb_en: `Imagine stepping onto your private wraparound balcony, 42 floors above the Thames, watching the city light up at sunset.\n\nThis ${beds}-bedroom penthouse in Canary Wharf isn't just a home — it's a statement. At ${sqft} sq ft, every detail has been considered: Italian marble bathrooms, a Gaggenau kitchen, floor-to-ceiling windows.\n\n24-hour concierge. Gym and pool. ${station} on your doorstep.\n\n${price} (projected)\n\n📩 britishrich.co.uk`,

    fb_ar: `تخيل أن تقف على شرفتك الخاصة، في الطابق ٤٢ فوق التايمز، تشاهد المدينة تتألق عند الغروب.\n\nبنتهاوس ${beds} غرف في كناري وارف — ليس مجرد منزل بل أسلوب حياة. على مساحة ${sqft} قدم مربع، كل تفصيلة مدروسة.\n\nكونسيرج ٢٤ ساعة. صالة رياضية ومسبح.\n\n${price} (متوقع)\n\n📩 britishrich.co.uk`,

    _title: title,
    _price: price,
    _beds: beds,
    _baths: baths,
    _sqft: sqft,
    _loc: loc,
  };
}
