import { Download, FileText } from 'lucide-react';

// Helper function to bold keywords in text
const boldKeywords = (text: string, keywords: string[]): React.ReactNode => {
  if (keywords.length === 0) return text;
  
  // Sort keywords by length (longest first) to prioritize longer matches
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
  
  // Find all matches with their positions
  const matches: Array<{ keyword: string; index: number; end: number }> = [];
  sortedKeywords.forEach(keyword => {
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedKeyword, 'gi');
    let match;
    const searchText = text;
    while ((match = regex.exec(searchText)) !== null) {
      const start = match.index;
      const end = start + match[0].length;
      matches.push({ keyword: match[0], index: start, end });
    }
  });
  
  // Sort matches by index
  matches.sort((a, b) => a.index - b.index);
  
  // Remove overlapping matches (keep first/longer ones)
  const nonOverlapping: Array<{ keyword: string; index: number; end: number }> = [];
  matches.forEach(match => {
    const overlaps = nonOverlapping.some(
      existing => match.index < existing.end && match.end > existing.index
    );
    if (!overlaps) {
      nonOverlapping.push(match);
    }
  });
  
  // Sort again after removing overlaps
  nonOverlapping.sort((a, b) => a.index - b.index);
  
  // Build the result
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  
  nonOverlapping.forEach((match, i) => {
    // Add text before match
    if (match.index > lastIndex) {
      result.push(text.substring(lastIndex, match.index));
    }
    // Add bold match
    result.push(<strong key={i}>{match.keyword}</strong>);
    lastIndex = match.end;
  });
  
  // Add remaining text
  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }
  
  return result.length > 0 ? result : text;
};

const CV = () => {
  const experience = [
    {
      period: 'Apr 2022 - Present',
      title: 'Data Scientist',
      company: 'Phiture GmbH',
      location: 'Berlin, Germany',
      keywords: [
        'Catchbase',
        'Apple Ads',
        'SaaS product',
        'Adobe',
        'LEGO',
        'Pinger',
        'reinforcement learning systems for Apple Ads',
        'experiments and incrementality tests using causal inference',
        'GCP',
        'MLflow',
        'FastAPI',
        'Docker',
        'behavior data for HBO',
        'identify churn drivers',
        'multiple Looker Studio reports',
        'reshaped user retention strategy',
        'machine learning',
        'experiment design',
      ],
      highlights: [
        "Developed Catchbase, Phiture's proprietary Apple Ads optimization engine, now a core SaaS product used by global brands including Adobe, LEGO, and Pinger",
        'Built and deployed reinforcement learning systems for Apple Ads campaign management',
        'Designed and evaluated experiments and incrementality tests using causal inference for Adobe, eToro, and others',
        'Built end-to-end ML pipelines using GCP, MLflow, FastAPI, and Docker',
        'Analyzed user behavior data for HBO apps to identify churn drivers and inform retention strategy',
        'Created and maintained multiple Looker Studio reports for internal teams and clients',
        'Conducted data audits across multiple clients and surfaced insights that reshaped user retention strategy',
        'Led workshops on machine learning and experiment design',
      ],
    },
    {
      period: 'Jul 2024 - Sep 2024',
      title: 'Data Scientist – Disaster Risk & Climate Impact Analysis',
      company: 'USAID',
      location: 'Freelance Project',
      keywords: [
        'Data Scientist – Disaster Risk & Climate Impact Analysis',
        'damage assessment analysis',
        'following Storm Daniel',
        'satellite, geospatial, and climate datasets',
        'Co-authored and delivered a detailed policy report',
      ],
      highlights: [
        'Conducted a comprehensive damage assessment analysis in Eastern Libya following Storm Daniel',
        'Analyzed satellite, geospatial, and climate datasets to assess infrastructure vulnerability',
        'Co-authored and delivered a detailed policy report with actionable recommendations to enhance disaster preparedness and infrastructure resilience',
      ],
    },
    {
      period: 'Jan 2022 - Mar 2022',
      title: 'Teaching Assistant - Data Science',
      company: 'Le Wagon',
      location: 'Berlin, Germany',
      keywords: [
        'Teaching Assistant - Data Science',
        'A/B Testing',
        'TDD',
        'CI/CD',
      ],
      highlights: [
        'Helped students practice concepts such as A/B Testing, Evaluation Metrics, TDD, CI/CD, and ML model training and validation',
        'Reviewed teaching material and suggested improvements and changes',
        'Assisted students with daily coding challenges and offered technical support',
      ],
    },
    {
      period: 'Apr 2021 - Mar 2022',
      title: 'Data Analyst',
      company: '50Hertz Transmission GmbH',
      location: 'Berlin, Germany',
      keywords: [
        'Data Analyst',
        'ETL',
        'Azure DevOps',
        'EDIFACT',
      ],
      highlights: [
        'Developed ETL pipelines for energy data, completely eliminating the manual reporting process',
        "Created and maintained the team's codebase on Azure DevOps",
        'Built custom Python modules for parsing EDIFACT text files',
      ],
    },
  ];

  const education = [
    {
      period: 'Jan 2025 - Jul 2026',
      degree: 'MSc in Data Science',
      institution: 'University of Colorado Boulder',
      location: 'Online',
    },
    {
      period: 'Oct 2021 - Dec 2021',
      degree: 'Diploma in Data Science',
      institution: 'Le Wagon Coding Bootcamp - Batch #735',
      location: 'Berlin, Germany',
      keywords: [
        'Diploma in Data Science',
        'Hollywood Frame by Frame: A Deep Dive into On-Screen Diversity',
      ],
      project: 'Hollywood Frame by Frame: A Deep Dive into On-Screen Diversity',
      projectDescription: 'Used deep learning to analyze keyframes in over 200 Hollywood films and generated dashboards showing statistics on gender and race distribution (Final project)',
    },
    {
      period: 'Jan 2016 - Jan 2020',
      degree: 'BSc in Civil Engineering',
      institution: 'Technische Universität Berlin',
      location: 'Berlin, Germany',
      keywords: [
        'BSc in Civil Engineering',
        'Temperature-based Retention Time Prediction (Bachelor Thesis, 1,0)',
        'Created a novel algorithm',
        'Python workshop for post-grad students',
      ],
      thesis: 'Temperature-based Retention Time Prediction (Bachelor Thesis, 1,0)',
      thesisDescription: 'Created a novel algorithm for calculating retention times in pressure pipes using temperature time series data',
      additional: 'Python workshop for post-grad students: Led a workshop that introduced post-grad students to Python at the faculty of civil engineering at the TU Berlin',
    },
  ];

  const skills = [
    'Python',
    'SQL',
    'Machine Learning',
    'Google Cloud Platform',
    'Docker',
    'A/B Testing',
    'Causal Inference',
    'Amplitude',
    'Looker Studio',
  ];

  return (
    <section id="cv" className="relative section-spacing section-divider">
      <div style={{ paddingLeft: 'var(--layout-padding)', paddingRight: 'var(--layout-padding)' }}>
        <div className="relative text-center mb-12">
          <div className="decorative-pattern pattern-header"></div>
          <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            An overview of my professional journey so far. Who knows? Our next collaboration might just earn its spot here someday.
          </p>
          <a
            href="/CV-Moe-Abuhalala-DataScientist.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-all"
          >
            <Download size={20} />
            Download Full CV
          </a>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6 flex items-center gap-2">
                <FileText size={24} />
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className="p-8 bg-white rounded-xl border border-neutral-200"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-900">
                          {job.title}
                        </h4>
                        <p className="text-neutral-600">
                          {job.company} · {job.location}
                        </p>
                      </div>
                      <span className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm whitespace-nowrap">
                        {(job.period.includes('Present') || job.period.includes('Jul 2026')) && (
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        )}
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-sm text-neutral-600 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{boldKeywords(highlight, job.keywords || [])}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-8 bg-white rounded-xl border border-neutral-200"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-900">
                          {edu.degree}
                        </h4>
                        <p className="text-neutral-600">
                          {edu.institution} · {edu.location}
                        </p>
                      </div>
                      <span className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm whitespace-nowrap">
                        {(edu.period.includes('Present') || edu.period.includes('Jul 2026')) && (
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        )}
                        {edu.period}
                      </span>
                    </div>
                    {edu.project && (
                      <div className="mt-4 pt-4 border-t border-neutral-100">
                        <p className="text-sm font-medium text-neutral-900 mb-1">
                          {boldKeywords(edu.project, edu.keywords || [])}
                        </p>
                        <p className="text-sm text-neutral-600">
                          {boldKeywords(edu.projectDescription, edu.keywords || [])}
                        </p>
                      </div>
                    )}
                    {edu.thesis && (
                      <div className="mt-4 pt-4 border-t border-neutral-100">
                        <p className="text-sm font-medium text-neutral-900 mb-1">
                          {boldKeywords(edu.thesis, edu.keywords || [])}
                        </p>
                        <p className="text-sm text-neutral-600">
                          {boldKeywords(edu.thesisDescription, edu.keywords || [])}
                        </p>
                      </div>
                    )}
                    {edu.additional && (
                      <div className="mt-4 pt-4 border-t border-neutral-100">
                        <p className="text-sm text-neutral-600">
                          {boldKeywords(edu.additional, edu.keywords || [])}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Skills</h3>
              <div className="p-6 bg-white rounded-xl border border-neutral-200">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Languages</h3>
              <div className="p-6 bg-white rounded-xl border border-neutral-200">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Arabic</p>
                    <p className="text-xs text-neutral-600">Native</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">English</p>
                    <p className="text-xs text-neutral-600">Fluent</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">German</p>
                    <p className="text-xs text-neutral-600">Fluent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
