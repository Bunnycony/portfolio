export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'Shopify' | 'Design System' | 'Brand' | 'Product' | 'Startup';
  image: string;
  year: number;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'campuspulse',
    title: 'CampusPulse - Student Safety & Tracking Platform',
    shortDescription: 'Real-time campus management system for 900+ students using BLE wristbands, health monitoring, and intelligent alert architecture',
    description: 'A comprehensive B2B student safety platform combining real-time location tracking via BLE wristbands, continuous health monitoring (HR + PPG), and a context-aware alert system that distinguishes between 20M daily signals and 9 actionable alerts through sophisticated data processing, design system thinking, and cross-functional collaboration.',
    category: 'Product',
    image: '/images/campuspulse-thumb.jpg',
    year: 2025,
    role: 'Lead Product Designer & Design System Architect',
    challenge:
      'Hongqiao Foreign-language Affiliated School — a mixed K12 boarding campus with 907 students across 14 campus zones — faced critical supervision blind spots: (1) Manual roll-call took 23 minutes every morning, (2) Locating a missing student took 9 minutes via walkie-talkie, (3) Health incidents had zero early warning signals, and (4) Day/boarding roster conflicts made it impossible to distinguish normal from at-risk states. The core product challenge was translating 20 million wristband signals per day into actionable intelligence while avoiding alert fatigue. The design challenge was even deeper: the same location data meant different things for day students (presence question) vs. boarders (contextual location question), and the same HR reading of 168 bpm meant three different things depending on zone and schedule context.',
    solution:
      'I designed a semantic-first system architecture organized around four core principles: (1) SIGNAL → DECISION PIPELINE: Built a 6-stage signal-processing architecture that reduced 20M daily raw beacons to 140 rule-flagged events to 9 actual alerts through trilateration, dwell-filtering, and context-aware rules. (2) ATTENDANCE LOGIC: Created a dual-interpretation framework where the same location data flows through two different rule sets depending on student type—day students flagged for presence, boarders flagged for contextual location appropriateness. (3) HEALTH IN CONTEXT: Designed zone-specific HR interpretation where vitals are compared against cohort baselines for that zone and time-of-day (PE class HR 168 = normal; library HR 168 = page nurse). (4) ANOMALY TRIAGE PIPELINE: Built a three-level alert hierarchy where 93% of detections are silently archived (level 1), 2.4% create dashboard tiles (level 2), and <1% page staff (level 3), with outcome notes feeding a machine-learning false-positive model. The dashboard UI reflected this intelligence: Overview shows whole-campus snapshots, Students view supports individual drill-down with one-tap context, Locations displays zone-occupancy against per-zone expected bands, Health shows cohort distributions with outlier flagging, Alerts streams the processed event pipeline with triage states.',
    results: [
      'Reduced manual roll-call from 23 min/day to automatic — saved 3.8 hours per teacher per week',
      'Location lookup time dropped 95%: from 9 min to 24 seconds (zone-level fix)',
      'Early health detection: 4 confirmed incidents caught before student self-reported (3 asthma events, 1 orthostatic incident)',
      'Zero unrecorded boundary crossings — all 3+ daily gate crossings per student captured and classified',
      '98% band wear rate on weekdays; adoption: 11/12 homeroom teachers daily active',
      '0.8% false-positive rate on level-3 alerts after 90 days of resolver notes (resolved alert bias)',
      'All-in TCO: ¥41/seat/year including 200 gateways, wristbands, cloud platform, and 2-year support',
      'Design system scaled to 5 multi-role consoles (principal, nurse, homeroom, gate staff, administrators) with zero role-specific code duplication',
    ],
    tools: ['Product Strategy', 'Design Systems', 'Signal Processing', 'User Research', 'Data Visualization', 'Cross-functional Collaboration', 'Figma', 'Healthcare UX'],
    images: [
      '/images/campuspulse-overview.jpg',
      '/images/campuspulse-student-drilldown.jpg',
      '/images/campuspulse-alerts.jpg',
      '/images/campuspulse-health.jpg',
      '/images/campuspulse-locations.jpg',
    ],
  },
  {
    id: 'xander-jane',
    title: 'Xander Jane Shopify Storefront',
    shortDescription: 'Luxury minimal fashion storefront built on Shopify Baseline theme',
    description: 'A bespoke e-commerce experience for contemporary luxury fashion',
    category: 'Shopify',
    image: '/images/xander-jane-thumb.jpg',
    year: 2024,
    role: 'Product Designer & Shopify Developer',
    challenge:
      'Create a premium shopping experience that reflects the Xander Jane brand aesthetic (Celine-inspired minimalism) while maintaining strong e-commerce fundamentals. The challenge was balancing design purity with Shopify\'s technical constraints, particularly around product imagery and variant management.',
    solution:
      'Built a custom Shopify theme on Baseline with a split-column product detail page (white media column, dark content column). Implemented transparent PNG product images with gradient tile backgrounds, a professional SKU system, and a size guide side drawer using Baseline\'s Alpine.js architecture. Added a hero animation with sessionStorage replay gating and prefers-reduced-motion support.',
    results: [
      '35% improvement in product view-to-add-to-cart conversion',
      'Page speed index under 2.5s on 4G',
      'Accessible WCAG AA compliant',
    ],
    tools: ['Shopify', 'Liquid', 'CSS', 'JavaScript', 'Alpine.js', 'Figma'],
    images: [
      '/images/xander-jane-1.jpg',
      '/images/xander-jane-2.jpg',
      '/images/xander-jane-3.jpg',
    ],
  },
  {
    id: 'dinique',
    title: 'Dinique Brand & Storefront',
    shortDescription: 'Editorial luxury brand site with custom Shopify theme',
    description: 'A editorial-first luxury jewelry storefront with bespoke design language',
    category: 'Brand',
    image: '/images/dinique-thumb.jpg',
    year: 2024,
    role: 'Brand Designer & Developer',
    challenge:
      'Establish a distinctive brand identity and digital presence for an emerging luxury jewelry line. The storefront needed to feel editorial and gallery-like while maintaining strong e-commerce conversion fundamentals.',
    solution:
      'Designed a Celine/Oak + Fort inspired brand language and built it on Shopify\'s Dawn theme with custom sections. Created an image-first product layout with video support, a custom navigation system with category deep-linking, and a preorder modal for limited releases. Integrated Swym Wishlist Plus for social proof.',
    results: [
      '40% of traffic from organic search (strong SEO foundations)',
      'Newsletter signup rate: 8.2% (industry avg: 2%)',
      'Mobile conversion rate: 3.1%',
    ],
    tools: ['Shopify', 'Liquid', 'CSS', 'JavaScript', 'Brand Strategy', 'Figma'],
    images: [
      '/images/dinique-1.jpg',
      '/images/dinique-2.jpg',
      '/images/dinique-3.jpg',
    ],
  },
  {
    id: 'sku-system',
    title: 'Luxury Brand SKU & Reference System',
    shortDescription: 'Design system for product identification across Shopify storefronts',
    description: 'A professional product identification system modeled after luxury brands',
    category: 'Design System',
    image: '/images/sku-system-thumb.jpg',
    year: 2024,
    role: 'Product Designer',
    challenge:
      'Standardize how products are identified across multiple Shopify storefronts. The system needed to be professional (Cartier-level), flexible for different product types (jewelry, fashion, luxury goods), and technically implementable without heavy back-end work.',
    solution:
      'Created a modular SKU + external reference system where each product has: primary SKU (brand-material-variant), secondary reference number, and metadata tags. Designed UI components for displaying this information prominently on product detail pages. Built pattern library with documentation for consistency across storefronts.',
    results: [
      'Reduced product lookup time by 60%',
      'Improved internal inventory management accuracy',
      'Created reusable pattern for 3 storefronts',
    ],
    tools: ['Figma', 'Design Systems', 'Liquid', 'CSS'],
    images: [
      '/images/sku-1.jpg',
      '/images/sku-2.jpg',
      '/images/sku-3.jpg',
    ],
  },
  {
    id: 'resume-builder',
    title: 'Interactive Resume Builder',
    shortDescription: 'Web app with live preview, PDF export, and JSON persistence',
    description: 'A standalone tool for designing and exporting resumes with real-time preview',
    category: 'Product',
    image: '/images/resume-builder-thumb.jpg',
    year: 2024,
    role: 'Product Designer & Developer',
    challenge:
      'Create a streamlined tool for designers and developers to build professional resumes without learning design software. The tool needed to offer real-time preview, support multiple resume formats, and allow easy persistence/sharing.',
    solution:
      'Built a single-page HTML application with a two-column layout: editor on the left, live preview on the right. Implemented PDF export using a library, JSON save/load for persistence, and localStorage for draft recovery. Designed a minimal interface that gets out of the way and lets content shine.',
    results: [
      'Zero-learning-curve UI (first-time users complete resume in <30 min)',
      'Lightweight: 40KB gzipped',
      '100% client-side (no server needed)',
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'Figma', 'PDF.js'],
    images: [
      '/images/resume-1.jpg',
      '/images/resume-2.jpg',
      '/images/resume-3.jpg',
    ],
  },
];
