import { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Brain, Eye, MessageSquare, TrendingUp, Activity, BarChart, Zap, LineChart, LucideIcon } from 'lucide-react';
import ProjectModal, { ProjectDetails } from './ProjectModal';
import { getProjectDetails } from '../data/projectDetails';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  hasDetails?: boolean;
  inProgress?: boolean;
}

interface CategoryData {
  icon: LucideIcon;
  thumbnails?: string[];
  projects: Project[];
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (projectTitle: string) => {
    const details = getProjectDetails(projectTitle);
    if (details) {
      setSelectedProject(details);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing project to allow exit animation
    setTimeout(() => setSelectedProject(null), 200);
  };

  const projectsByCategory: Record<string, CategoryData> = {
    'Reinforcement Learning': {
      icon: Brain,
      thumbnails: [
        '/projects/catchbase/simulation-example-one-keyword.gif',
        '/projects/catchbase/reward_components.png',
        '/projects/catchbase/training_curves.png',
      ],
      projects: [
        {
          title: 'Catchbase - Apple Ads Optimization',
          description:
            "Autonomous SaaS platform managing Apple Ads campaigns using RL algorithms. Used by Adobe, Lego, and Pinger.",
          tags: ['Python', 'RL', 'GCP', 'MLflow', 'FastAPI', 'Docker'],
          link: 'https://phiture.com',
          hasDetails: true, // Flag to indicate detailed view is available
        },
      ],
    },
    'Data Analysis': {
      icon: BarChart,
      thumbnails: [
        '/projects/taqarib/Dashboard-1.png',
        '/projects/taqarib/flood-path-Susah.png',
        '/projects/taqarib/damaged_vs_destroyed_derna.png',
      ],
      projects: [
        {
          title: 'Storm Daniel Damage Assessment',
          description:
            'USAID disaster response analysis following the 2023 Libya floods. Assessed infrastructure damage, climate patterns, and population impact using satellite imagery and geospatial data.',
          tags: ['Python', 'GeoPandas', 'Google Earth Engine', 'USAID', 'Disaster Response'],
          hasDetails: true,
        },
      ],
    },
    'Deep Learning': {
      icon: Eye,
      thumbnails: [
        '/projects/diversity-cinema/dashboard.png',
      ],
      projects: [
        {
          title: 'Hollywood Frame by Frame',
          description:
            'Deep learning pipeline analyzing gender and race representation in 200+ Hollywood films using MTCNN and DeepFace.',
          tags: ['Python', 'TensorFlow', 'MTCNN', 'DeepFace', 'GCP'],
          github: 'https://github.com/moe221/diversity_in_cinema',
          hasDetails: true,
        },
      ],
    },
    'NLP & Classification': {
      icon: MessageSquare,
      thumbnails: [
        '/projects/contractor-nlp/barplot.png',
        '/projects/contractor-nlp/invoices.png',
        '/projects/contractor-nlp/piechart.png',
      ],
      projects: [
        {
          title: 'NLP Contractor Classification',
          description:
            'Built from my own construction management data. Classifies contractors based on work descriptions using NLP and ensemble methods. 90% accuracy.',
          tags: ['Python', 'NLP', 'Classification', 'Bag-of-Words'],
          github: 'https://github.com/moe221/NLP_Contractor_Classification',
          hasDetails: true,
        },
        {
          title: 'Keyword Mining for Apple Ads',
          description:
            'Uses text embeddings to measure keyword relevancy and mines keywords from Google Trends data for Apple Search Ads campaigns.',
          tags: ['Python', 'NLP', 'Embeddings', 'Google Trends'],
          inProgress: true,
        },
      ],
    },
    'Time Series': {
      icon: LineChart,
      thumbnails: [
        '/projects/retention-time/results-pilot.png',
        '/projects/power-demand/sarima-results.png',
        '/projects/power-demand/dendrogram.png',
      ],
      projects: [
        {
          title: 'Temperature-based Retention Time',
          description:
            'Bachelor thesis (Grade 1.0) at TU Berlin. Novel algorithm to estimate wastewater retention time using temperature sensors instead of flow meters.',
          tags: ['Python', 'Time Series', 'Signal Processing', 'Civil Engineering'],
          github: 'https://github.com/moe221/Temperature-based_RT_project',
          hasDetails: true,
        },
        {
          title: 'Building Power Demand Prediction',
          description:
            'SARIMA model to predict daily power demand of a 7-story office building. Improved from 26% to 12% RMSPE by incorporating weekends and holidays.',
          tags: ['Python', 'SARIMA', 'Time Series', 'Clustering'],
          github: 'https://github.com/moe221/SARIMA_Power_Demand_Prediction',
          hasDetails: true,
        },
      ],
    },
    'Regression': {
      icon: TrendingUp,
      thumbnails: [
        '/projects/apartment-predictor/UI-screenshot.png',
        '/projects/apartment-predictor/heatmap.png',
        '/projects/apartment-predictor/Berlin-map1.png',
      ],
      projects: [
        {
          title: 'Berlin Apartment Rental Price Predictor',
          description:
            'Random Forest model to predict rental prices in Berlin with 87% R². Built complete UI for price estimation tool.',
          tags: ['Python', 'Random Forest', 'Feature Engineering', 'UI'],
          github: 'https://github.com/moe221/Apartment_price_ML',
          hasDetails: true,
        },
      ],
    },
    'Causal Inference': {
      icon: Activity,
      thumbnails: [
        '/projects/causal-impact/results.png',
      ],
      projects: [
        {
          title: 'Incrementality Measurement with Causal Impact',
          description:
            'Bayesian framework for measuring marketing incrementality when A/B testing is impossible. Led team workshop on methodology.',
          tags: ['Python', 'Causal Impact', 'Bayesian', 'Statistics', 'Workshop'],
          github: 'https://github.com/moe221/incrementality-measurement-causal-impact',
          hasDetails: true,
        },
      ],
    },
    'Software Engineering': {
      icon: Zap,
      thumbnails: [
        '/projects/chess/screenshot.png',
      ],
      projects: [
        {
          title: '2-Player Chess Game',
          description:
            'Built from scratch to sharpen my coding skills. Fully functional chess with all piece movements, turn management, and win detection.',
          tags: ['Python', 'OOP', 'Tkinter', 'Turtle'],
          github: 'https://github.com/moe221/Chess_game',
          hasDetails: true,
        },
      ],
    },
  };

  const categories = Object.keys(projectsByCategory);

  return (
    <>
      <section id="projects" className="relative section-spacing section-divider">
        <div>
          <div className="relative text-center mb-12">
            <div className="decorative-pattern pattern-header"></div>
            <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Explore my work
            </h2>
            <p className="relative z-10 text-lg text-neutral-600 max-w-2xl mx-auto">
              I'm constantly leveling up and challenging myself with interesting projects across different domains of data science and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const categoryData = projectsByCategory[category as keyof typeof projectsByCategory];
              const Icon = categoryData.icon;
              const projects = categoryData.projects;
              const thumbnails = 'thumbnails' in categoryData ? (categoryData as any).thumbnails as string[] : [];

              return (
                <div
                  key={category}
                  onMouseEnter={() => setActiveCategory(category)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className="relative min-h-[200px]"
                >
                  <div
                    className={`group p-6 bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer flex flex-col min-h-[200px] ${
                      isActive
                        ? 'border-neutral-900 shadow-lg'
                        : 'border-neutral-200 hover:border-neutral-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-neutral-900' : 'bg-neutral-100'
                      }`}>
                        <Icon
                          size={24}
                          className={`transition-colors ${
                            isActive ? 'text-white' : 'text-neutral-900'
                          }`}
                        />
                      </div>
                      <ChevronRight
                        className={`transition-all ${
                          isActive ? 'rotate-90 text-neutral-900' : 'text-neutral-400'
                        }`}
                        size={20}
                      />
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {category}
                      </h3>
                      {/* Thumbnails - right of title */}
                      {thumbnails.length > 0 && (
                        <div className="flex items-center -space-x-3">
                          {thumbnails.slice(0, 3).map((thumb, idx) => (
                            <div
                              key={idx}
                              className="w-16 h-16 rounded-lg border-2 border-white shadow-sm overflow-hidden bg-neutral-100"
                              style={{ zIndex: 3 - idx }}
                            >
                              <img
                                src={thumb}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-neutral-600 mb-4">
                      {projects.length} {projects.length === 1 ? 'project' : 'projects'}
                    </p>

                    <div
                      className={`overflow-hidden transition-all duration-300 flex-1 ${
                        isActive ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="space-y-4 pt-4 border-t border-neutral-200">
                        {projects.map((project, index) => {
                          const hasDetailedView = getProjectDetails(project.title) !== null;
                          
                          return (
                            <div 
                              key={index} 
                              className={`space-y-2 ${hasDetailedView ? 'cursor-pointer hover:bg-neutral-50 -mx-2 px-2 py-2 rounded-lg transition-colors' : ''}`}
                              onClick={hasDetailedView ? () => handleProjectClick(project.title) : undefined}
                            >
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="font-medium text-neutral-900 text-sm">
                                  {project.title}
                                </h4>
                                {hasDetailedView && (
                                  <span className="px-1.5 py-0.5 text-[10px] font-medium bg-blue-100 text-blue-700 rounded">
                                    Details
                                  </span>
                                )}
                                {project.inProgress && (
                                  <span className="px-1.5 py-0.5 text-[10px] font-medium bg-amber-100 text-amber-700 rounded">
                                    In Progress
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-neutral-600 leading-relaxed">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              {(project.link || project.github) && !hasDetailedView && (
                                <div className="flex items-center gap-3 pt-1">
                                  {project.link && (
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 transition-colors"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <ExternalLink size={12} />
                                      <span>Visit</span>
                                    </a>
                                  )}
                                  {project.github && (
                                    <a
                                      href={project.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 transition-colors"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <Github size={12} />
                                      <span>Code</span>
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Projects;
