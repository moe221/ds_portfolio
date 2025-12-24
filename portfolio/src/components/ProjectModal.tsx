import { useEffect, useCallback } from 'react';
import { X, ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';

// ============================================
// Type Definitions
// ============================================

export interface ProjectMedia {
  type: 'image' | 'gif' | 'video' | 'youtube';
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface ProjectSection {
  title: string;
  content: string | React.ReactNode;
  media?: ProjectMedia[];
}

export interface ProjectDetails {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  period?: string;
  client?: string;
  tags: string[];
  summary: string;
  metrics?: ProjectMetric[];
  sections: ProjectSection[];
  links?: {
    live?: string;
    github?: string;
    paper?: string;
  };
  techStack?: {
    category: string;
    items: string[];
  }[];
}

interface ProjectModalProps {
  project: ProjectDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

// ============================================
// Modal Component
// ============================================

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  // Close on ESC key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] my-6 mx-4 overflow-hidden rounded-2xl bg-white shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-neutral-200">
          <div className="flex items-start justify-between px-8 md:px-12 py-6">
            <div className="flex-1 pr-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-full mb-2">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                {project.title}
              </h2>
              <p className="text-neutral-600 mt-1">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} className="text-neutral-500" />
            </button>
          </div>
          
          {/* Quick Info Bar */}
          <div className="flex flex-wrap items-center gap-4 px-8 md:px-12 pb-4 text-sm text-neutral-600">
            {project.period && (
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {project.period}
              </span>
            )}
            {project.client && (
              <span className="flex items-center gap-1.5">
                <Users size={14} />
                {project.client}
              </span>
            )}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(92vh-180px)] px-8 md:px-12 py-8">
          {/* Summary */}
          <div className="mb-8">
            <p className="text-lg text-neutral-700 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {project.metrics.map((metric, index) => {
                const Icon = metric.icon || Zap;
                return (
                  <div 
                    key={index}
                    className="p-4 bg-neutral-50 rounded-xl border border-neutral-100"
                  >
                    <Icon size={20} className="text-neutral-400 mb-2" />
                    <p className="text-2xl font-bold text-neutral-900">{metric.value}</p>
                    <p className="text-sm text-neutral-600">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Tech Stack</h3>
              <div className="space-y-3">
                {project.techStack.map((stack, index) => (
                  <div key={index} className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-neutral-500 min-w-[100px]">
                      {stack.category}:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item, itemIndex) => (
                        <span 
                          key={itemIndex}
                          className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-lg"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content Sections */}
          {project.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {section.title}
              </h3>
              
              {typeof section.content === 'string' ? (
                <div 
                  className="prose prose-neutral max-w-none text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              ) : (
                <div className="text-neutral-700">{section.content}</div>
              )}

              {/* Section Media */}
              {section.media && section.media.length > 0 && (
                <div className="mt-4 space-y-4">
                  {section.media.map((media, mediaIndex) => (
                    <figure key={mediaIndex} className="rounded-xl overflow-hidden border border-neutral-200">
                      {media.type === 'youtube' ? (
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            src={media.src}
                            title={media.alt}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                          />
                        </div>
                      ) : media.type === 'video' ? (
                        <video 
                          src={media.src} 
                          controls 
                          className="w-full"
                          poster={media.alt}
                        />
                      ) : (
                        <img 
                          src={media.src} 
                          alt={media.alt}
                          className="w-full"
                        />
                      )}
                      {media.caption && (
                        <figcaption className="px-4 py-2 bg-neutral-50 text-sm text-neutral-600 text-center">
                          {media.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-neutral-500 mb-3">Technologies & Methods</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links && (
            <div className="flex flex-wrap gap-3 pt-6 border-t border-neutral-200">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  <ExternalLink size={18} />
                  View Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  <Github size={18} />
                  View Code
                </a>
              )}
              {project.links.paper && (
                <a
                  href={project.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  <ExternalLink size={18} />
                  Read Paper
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

