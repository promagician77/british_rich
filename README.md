# British Rich — Content Pipeline Demo

Property content-to-marketing automation pipeline. Submit property details, AI generates bilingual content (English + Arabic), review and approve, publish to multiple channels.

## Deploy to Vercel

### Option 1: One-Click Deploy
1. Push this project to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Click **Deploy** — no configuration needed

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx          # Root layout with fonts
  page.tsx            # Main page with state management
  globals.css         # Complete design system
  data.ts             # Types, constants, content generator
  components/
    Sidebar.tsx       # Left navigation
    Topbar.tsx        # Top header bar
    StatsBar.tsx      # Live metrics
    IntakeForm.tsx    # Property input form
    PipelineView.tsx  # Animated processing steps
    ContentTabs.tsx   # Tabbed content output
    PhoneMockup.tsx   # Social media phone previews
    ApprovalBar.tsx   # Review & approve controls
    PublishedView.tsx # Post-approval confirmation
```

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Pure CSS** (no Tailwind — zero dependencies)
- **React 18** (hooks, client components)
