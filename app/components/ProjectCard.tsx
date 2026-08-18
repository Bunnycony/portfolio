import { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group cursor-pointer">
      <div 
        className="relative overflow-hidden rounded-lg aspect-video mb-6 flex items-center justify-center"
        style={{
          backgroundColor: 'var(--bg-tertiary)',
          border: `1px solid var(--border-color)`
        }}
      >
        <span style={{ color: 'var(--text-secondary)' }} className="text-sm">
          {project.title}
        </span>
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: 'var(--text-primary)', opacity: 0.05 }}
        />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold group-hover:opacity-75 transition-opacity" style={{
            color: 'var(--text-primary)'
          }}>
            {project.title}
          </h3>
          <span className="text-xs font-medium" style={{
            color: 'var(--text-secondary)'
          }}>
            {project.year}
          </span>
        </div>
        
        <p className="text-sm leading-relaxed" style={{
          color: 'var(--text-secondary)'
        }}>
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          <span 
            className="px-2 py-1 text-xs rounded"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-secondary)',
              border: `1px solid var(--border-color)`
            }}
          >
            {project.category}
          </span>
          <span 
            className="px-2 py-1 text-xs rounded"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-secondary)',
              border: `1px solid var(--border-color)`
            }}
          >
            {project.role.split(' & ')[0]}
          </span>
        </div>
        
        <div className="pt-2 text-sm font-medium group-hover:opacity-75 transition-opacity" style={{
          color: 'var(--text-secondary)'
        }}>
          Read case study →
        </div>
      </div>
    </div>
  );
}
