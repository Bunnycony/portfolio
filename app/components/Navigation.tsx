import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="px-6 md:px-12 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-lg text-slate-50 hover:text-slate-300 transition-colors">
          Xia Zhang
        </Link>
        <div className="flex gap-8 items-center">
          <Link href="/" className="text-slate-400 hover:text-slate-50 transition-colors text-sm font-medium">
            Work
          </Link>
          <a href="#about" className="text-slate-400 hover:text-slate-50 transition-colors text-sm font-medium">
            About
          </a>
          <a href="mailto:your.email@example.com" className="text-slate-400 hover:text-slate-50 transition-colors text-sm font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
