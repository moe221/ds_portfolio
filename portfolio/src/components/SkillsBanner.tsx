import { Brain, Code2, TrendingUp, Database, Cloud, Container, Zap, BarChart3, Eye, TestTube, LineChart, Wrench, Layers, Users, Target, Smartphone, Activity } from 'lucide-react';

const SkillsBanner = () => {
  const skills = [
    { name: 'Python', icon: Code2, color: 'text-blue-500' },
    { name: 'Machine Learning', icon: Brain, color: 'text-purple-500' },
    { name: 'Reinforcement Learning', icon: Target, color: 'text-orange-500' },
    { name: 'Deep Learning', icon: Layers, color: 'text-indigo-500' },
    { name: 'Natural Language Processing', icon: Brain, color: 'text-green-500' },
    { name: 'Computer Vision', icon: Eye, color: 'text-cyan-500' },
    { name: 'Causal Inference', icon: TrendingUp, color: 'text-teal-500' },
    { name: 'A/B Testing', icon: TestTube, color: 'text-pink-500' },
    { name: 'Time Series Analysis', icon: LineChart, color: 'text-amber-500' },
    { name: 'Classification', icon: BarChart3, color: 'text-violet-500' },
    { name: 'Regression', icon: TrendingUp, color: 'text-emerald-500' },
    { name: 'Feature Engineering', icon: Wrench, color: 'text-slate-500' },
    { name: 'SQL', icon: Database, color: 'text-blue-600' },
    { name: 'Google Cloud Platform', icon: Cloud, color: 'text-sky-500' },
    { name: 'Docker', icon: Container, color: 'text-blue-400' },
    { name: 'MLflow', icon: Activity, color: 'text-green-600' },
    { name: 'FastAPI', icon: Zap, color: 'text-teal-600' },
    { name: 'TensorFlow', icon: Brain, color: 'text-orange-600' },
    { name: 'PyTorch', icon: Brain, color: 'text-red-500' },
    { name: 'scikit-learn', icon: Brain, color: 'text-orange-400' },
    { name: 'Amplitude', icon: BarChart3, color: 'text-indigo-600' },
    { name: 'Looker Studio', icon: BarChart3, color: 'text-green-500' },
    { name: 'Data Pipelines', icon: Layers, color: 'text-purple-600' },
    { name: 'ETL', icon: Database, color: 'text-cyan-600' },
    { name: 'Retention Analytics', icon: Users, color: 'text-pink-600' },
    { name: 'User Retention', icon: Users, color: 'text-rose-500' },
    { name: 'Campaign Optimization', icon: Target, color: 'text-amber-600' },
    { name: 'Apple Ads', icon: Smartphone, color: 'text-slate-600' },
    { name: 'Mobile Analytics', icon: Smartphone, color: 'text-blue-500' },
    { name: 'Incrementality Testing', icon: TestTube, color: 'text-violet-600' },
  ];

  const row1Skills = skills.slice(0, 15);
  const row2Skills = skills.slice(15);

  return (
    <section className="relative section-spacing section-divider">
      <div style={{ paddingLeft: 'var(--layout-padding)', paddingRight: 'var(--layout-padding)' }}>
      {/* Title */}
      <div className="relative text-center mb-12">
        <div className="decorative-pattern pattern-header"></div>
        <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          A holistic approach to data science—from ideation to production.
        </h2>
      </div>

      {/* Scrolling skills with fade mask */}
      <div 
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
        }}
      >
        <div className="space-y-3 md:space-y-4">
          {/* Row 1 - scrolls left */}
          <div className="flex animate-scroll">
            <div className="flex gap-2 md:gap-3 pr-2 md:pr-3">
              {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, index) => (
                <SkillBadge key={`row1-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Row 2 - scrolls right */}
          <div className="flex animate-scroll-reverse">
            <div className="flex gap-2 md:gap-3 pr-2 md:pr-3">
              {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, index) => (
                <SkillBadge key={`row2-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

// Extracted skill badge component for cleaner code
interface SkillBadgeProps {
  skill: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  };
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  const Icon = skill.icon;
  return (
    <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white border border-neutral-200 rounded-lg text-neutral-700 text-xs md:text-sm font-medium whitespace-nowrap shadow-sm hover:shadow-md transition-shadow">
      <Icon className={`w-3.5 h-3.5 md:w-4 md:h-4 ${skill.color} flex-shrink-0`} />
      {skill.name}
    </div>
  );
};

export default SkillsBanner;
