export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'Shopify' | 'Design System' | 'Brand' | 'Product';
  image: string;
  year: number;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  images: string[]; // 详情页图片
}

export const projects: Project[] = [
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
