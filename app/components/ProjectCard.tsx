import Image from 'next/image';
import { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-slate-800 aspect-video mb-6">
        <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
          <span className="text-slate-500 text-sm">{project.title}</span>
        </div>
        <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors" />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-50 group-hover:text-slate-300 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-slate-500 font-medium">{project.year}</span>
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">
            {project.category}
          </span>
          <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">
            {project.role.split(' & ')[0]}
          </span>
        </div>
        
        <div className="pt-2 text-slate-500 group-hover:text-slate-300 transition-colors text-sm font-medium">
          Read case study →
        </div>
      </div>
    </div>
  );
}
