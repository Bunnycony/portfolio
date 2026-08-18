# Xia Zhang - Product Design Portfolio

A tech-clean, minimal design portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Tech Clean Aesthetic** - Dark theme, high contrast, minimal decoration
- **Responsive Design** - Mobile-first, perfect on all screen sizes
- **Case Study Pages** - Each project has a detailed page with challenge, solution, and results
- **Fast Performance** - Next.js optimization, under 2.5s page load
- **Easy Customization** - Simple data structure to add/edit projects
- **SEO Optimized** - Metadata, Open Graph tags built-in

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open http://localhost:3000

### 3. Deploy to Vercel

1. Push this repo to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Connect your GitHub repo
4. Deploy (automatic!)

## ✏️ Customize Content

### Edit Projects

Open `app/data/projects.ts` and modify the `projects` array:

```typescript
{
  id: 'project-id',           // URL slug
  title: 'Project Title',
  shortDescription: 'Brief description',
  description: 'Longer description',
  category: 'Shopify',
  image: '/images/thumb.jpg',
  year: 2024,
  role: 'Your Role',
  challenge: 'What was the challenge?',
  solution: 'How did you solve it?',
  results: ['Result 1', 'Result 2'],
  tools: ['Tool 1', 'Tool 2'],
  images: ['/images/detail-1.jpg'],
}
```

### Add Images

1. Put images in `public/images/`
2. Reference them in `projects.ts` as `/images/filename.jpg`

**Recommended sizes:**
- Card thumbnail: 1200x675px (16:9)
- Detail page: 1200px wide

### Update Personal Info

- **Name**: Edit `app/page.tsx` Hero section
- **About**: Edit `app/page.tsx` About section
- **Email**: Search-replace `your.email@example.com`
- **Navigation**: Edit `app/components/Navigation.tsx`

## 📁 Project Structure

```
app/
├── components/
│   ├── Navigation.tsx
│   └── ProjectCard.tsx
├── data/
│   └── projects.ts          # Project data (edit here!)
├── work/
│   └── [slug]/
│       └── page.tsx         # Project detail page
├── layout.tsx               # Global layout
├── page.tsx                 # Homepage
└── globals.css              # Global styles
```

## 🎨 Colors (Tech Clean)

```
Background: #0f172a (slate-950)
Border: #1e293b (slate-800)
Text: #f8fafc (slate-50)
Secondary: #64748b (slate-400)
Accent: #ffffff (white)
```

## 📝 Deployment URLs

After deploying to Vercel, you'll get a link like:
- `yourname.vercel.app` (default)
- Custom domain available in Vercel settings

Share this link in:
- LinkedIn profile
- Resume
- Social media

## 🔄 Updating After Deployment

1. Edit files on GitHub (or locally)
2. Push to GitHub
3. Vercel automatically redeploys!

No need to touch the server—it's automatic.

## 📚 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Version Control**: GitHub

## 🛠️ Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

## ✅ Pre-launch Checklist

- [ ] Customize all projects in `app/data/projects.ts`
- [ ] Add project images to `public/images/`
- [ ] Update personal info (name, email, about)
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Share link on LinkedIn

## 📞 Support

Questions? Check the code comments or the main documentation.

---

**Made with ❤️ for designers who code**
