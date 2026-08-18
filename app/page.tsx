import Link from 'next/link';
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-50">
            Xia Zhang
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl">
            Senior Product Designer & Shopify Developer based in Vancouver
          </p>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            I design and build e-commerce experiences. Currently working on luxury storefronts with Shopify, focusing on brand-aligned design systems and performant front-end development.
          </p>
          <div className="flex gap-4 pt-8">
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 bg-slate-50 text-slate-950 font-medium rounded hover:bg-slate-200 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-slate-600 text-slate-50 font-medium rounded hover:border-slate-400 hover:bg-slate-900 transition-colors"
            >
              View resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 md:px-12 py-20 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/work/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">About</h2>
          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p>
              I'm a product designer with 5+ years of experience combining UX/UI design with hands-on front-end development. My background spans industrial IoT dashboards, luxury e-commerce, and consumer product design.
            </p>
            <p>
              At Modaselle/Xander Jane, I design and develop custom Shopify storefronts from scratch. I'm equally comfortable in Figma and code—I care about how designs actually ship and perform.
            </p>
            <div className="space-y-4 pt-4">
              <h3 className="text-slate-50 font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Product Design', 'UX/UI', 'Shopify Development', 'Liquid', 'React', 'CSS', 'Design Systems', 'E-commerce', 'Brand Design'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
