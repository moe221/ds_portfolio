import { Download, FileText } from 'lucide-react';

const CV = () => {
  const experience = [
    {
      period: 'Apr 2022 - Present',
      title: 'Data Scientist',
      company: 'Phiture GmbH',
      location: 'Berlin, Germany',
      highlights: [
        "Developed Catchbase, Phiture's proprietary Apple Ads optimization engine",
        'Designed and deployed reinforcement learning systems for real-time campaign management',
        'Ran incrementality analyses using controlled tests and causal inference methods',
        'Designed end-to-end ML pipelines using GCP, MLflow, FastAPI, and Docker',
      ],
    },
    {
      period: 'Jul 2024 - Sep 2024',
      title: 'Data Scientist – Disaster Risk & Climate Impact Analysis',
      company: 'USAID',
      location: 'Freelance Project',
      highlights: [
        'Conducted comprehensive damage assessment in Eastern Libya following Storm Daniel',
        'Analyzed satellite, geospatial, and climate datasets',
        'Co-authored policy report with actionable recommendations',
      ],
    },
    {
      period: 'Jan 2022 - Mar 2022',
      title: 'Teaching Assistant - Data Science',
      company: 'Le Wagon',
      location: 'Berlin, Germany',
      highlights: [
        'Helped students practice A/B Testing, ML model training and validation',
        'Reviewed teaching material and suggested improvements',
      ],
    },
    {
      period: 'Apr 2021 - Mar 2022',
      title: 'Data Analyst',
      company: '50Hertz Transmission GmbH',
      location: 'Berlin, Germany',
      highlights: [
        'Developed ETL pipelines for energy data',
        'Created and maintained team codebase on Azure DevOps',
        'Built custom Python modules for parsing EDIFACT files',
      ],
    },
  ];

  const education = [
    {
      period: 'Jan 2025 - Jul 2026 (Expected)',
      degree: 'MSc in Data Science',
      institution: 'University of Colorado Boulder',
      location: 'Online',
    },
    {
      period: 'Oct 2021 - Dec 2021',
      degree: 'Diploma in Data Science',
      institution: 'Le Wagon Coding Bootcamp',
      location: 'Berlin, Germany',
    },
    {
      period: 'Jan 2016 - Jan 2020',
      degree: 'BSc in Civil Engineering',
      institution: 'Technische Universität Berlin',
      location: 'Berlin, Germany',
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
      <div>
        <div className="text-center mb-16">
          <div className="relative mb-4">
            <div className="decorative-pattern pattern-header"></div>
            <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-neutral-900">
              Curriculum Vitae
            </h2>
          </div>
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
                      <span className="text-sm text-neutral-500 font-medium whitespace-nowrap">
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
                          <span>{highlight}</span>
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
                      <span className="text-sm text-neutral-500 font-medium whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
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
