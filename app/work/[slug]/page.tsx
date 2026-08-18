'use client';

import Link from 'next/link';
import { projects } from '@/app/data/projects';
import { notFound } from 'next/navigation';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((p) => p.id === params.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-4xl mx-auto space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors text-sm font-medium"
          >
            ← Back to work
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded font-medium">
                {project.category}
              </span>
              <span className="text-slate-500 text-sm">{project.year}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-50">
              {project.title}
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl">
              {project.description}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-slate-800">
            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Role
              </h3>
              <p className="text-slate-50">{project.role}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Year
              </h3>
              <p className="text-slate-50">{project.year}</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-6 md:px-12 py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-6">
              Challenge
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              {project.challenge}
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-6">
              Solution
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-12 py-20 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-8">
            Results
          </h2>
          <div className="space-y-4">
            {project.results.map((result, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-50 mt-3 flex-shrink-0" />
                <p className="text-slate-400 text-lg leading-relaxed">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 md:px-12 py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href={`/work/${prevProject.id}`}
              className="group p-6 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-900/50 transition-all"
            >
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                ← Previous project
              </p>
              <h3 className="text-lg font-semibold text-slate-50 group-hover:text-slate-300 transition-colors">
                {prevProject.title}
              </h3>
            </Link>
            
            <Link
              href={`/work/${nextProject.id}`}
              className="group p-6 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-900/50 transition-all text-right"
            >
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                Next project →
              </p>
              <h3 className="text-lg font-semibold text-slate-50 group-hover:text-slate-300 transition-colors">
                {nextProject.title}
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
            Let's work together
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always interested in working on thoughtful design and development projects.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex px-8 py-4 bg-slate-50 text-slate-950 font-semibold rounded hover:bg-slate-200 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}
