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
    title: 'CampusPulse - Student Safety Platform',
    shortDescription: 'Campus management system with real-time location, health monitoring, and intelligent alert system',
    description: 'A comprehensive B2B student safety platform combining real-time wearable tracking, health monitoring, and cross-functional design systems',
    category: 'Product',
    image: '/images/campuspulse-thumb.jpg',
    year: 2024,
    role: 'Product Designer & Design System Lead',
    challenge:
      'As CampusPulse evolved from a simple monitoring dashboard into a complex system spanning attendance, location tracking, health monitoring, alerts, and detailed drill-down views, we faced a critical challenge: the product complexity was growing faster than our design standards. Teams were repeatedly making disconnected decisions about what a warning looked like, how critical alerts should behave, and how these states translated across different screens. Simultaneously, our cross-functional teams disagreed on fundamental requirements. Product wanted responsive real-time location tracking, engineering highlighted the inherent noise in BLE RSSI data, and users needed confidence that the system was telling them the truth before they acted on location changes.',
    solution:
      'I took ownership of two interconnected solutions. First, I built a semantic-first design system that started with product logic instead of UI components. Rather than defining "red button" or "warning card," I created semantic roles: primary actions, reminders, warnings, critical alerts, and normal states. I then mapped these into reusable tokens (colors, spacing, radius, elevation) and components (badges, buttons, filters, status cards) that worked across both light and dark modes. This ensured that visual language reflected operational meaning—red consistently meant an actionable alert, while amber meant something needed attention but not immediate intervention. Second, I led a cross-functional workshop to reframe the real-time location problem. Instead of debating "real-time vs. accurate," we shifted the question to "What level of location confidence does staff actually need to make a decision?" Working with engineering, I mapped RSSI fluctuations and gateway coverage constraints. Working with product and operations, I identified the actual decisions staff made: Is the student on campus? Which building? Are they somewhere unexpected? This led us to a zone-level model with a short dwell period that provided stability while preserving responsiveness for urgent events like unapproved gate crossings.',
    results: [
      'Reduced repeated design decisions by 70%, enabling faster feature scaling across 6+ major features',
      'Created consistent product language between design, engineering, and operations, resulting in fewer specification misunderstandings',
      'Location confidence system reduced false alarm rate by 65% while maintaining <5s response for critical events',
      'Design system scaled across web, iOS, and wearable interfaces with minimal rework',
      'Early user validation caught alert terminology mismatch before rollout, preventing post-launch redesigns',
    ],
    tools: ['Figma', 'Design Systems', 'Product Strategy', 'User Research', 'Prototyping', 'Cross-functional Collaboration'],
    images: [
      '/images/campuspulse-1.jpg',
      '/images/campuspulse-2.jpg',
      '/images/campuspulse-3.jpg',
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
