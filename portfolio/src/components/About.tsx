const About = () => {
  return (
    <section id="about" className="relative section-spacing section-divider">
      <div style={{ paddingLeft: 'var(--layout-padding)', paddingRight: 'var(--layout-padding)' }}>
      {/* Section header - full width for consistent grid pattern */}
      <div className="relative text-center mb-12">
        <div className="decorative-pattern pattern-header"></div>
        <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          About Me
        </h2>
      </div>

      {/* Content - constrained width */}
      <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
            <div className="mb-3">
              <h3 className="text-2xl font-bold text-neutral-900">Philosophy</h3>
              <p className="text-sm text-neutral-500 italic mt-0.5">/fəˈläsəfē/ • noun • a theory or attitude held by a person</p>
            </div>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              The best machine learning systems are often the simplest ones. But as anyone building production ML knows, simple and easy are two very different things. I believe in cutting through complexity with clean architecture and algorithms that actually solve the problem. For 4+ years, I've been helping companies bridge the gap between ambitious ideas and AI systems that deliver value.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Simple
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Clean
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                Impactful AI
              </span>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
            <div className="mb-3">
              <h3 className="text-2xl font-bold text-neutral-900">Now</h3>
              <p className="text-sm text-neutral-500 italic mt-0.5">/nou/ • adverb • at the present time or moment</p>
            </div>
            <p className="text-base text-neutral-700 leading-relaxed mb-3">
              Based in Berlin, Germany and working on machine learning development at <strong>Phiture</strong>, where I built <strong>Catchbase</strong>, an autonomous Apple Ads optimization platform powered by reinforcement learning. The tool manages thousands in ad spend for clients like <strong>Adobe</strong>, <strong>Lego</strong>, and <strong>Pinger</strong>, making bidding decisions that outperform manual strategies.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
            I've shipped ML features that directly moved revenue metrics, presented research at the 2024 ASO Conference alongside <strong>Adobe's</strong> growth team, and conducted disaster and flood risk assessments for <strong>USAID</strong>.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Lead data scientist 
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm">
                <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                Product-driven ML
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Clients: Adobe, HBO, LEGO 
              </span>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
            <div className="mb-3">
              <h3 className="text-2xl font-bold text-neutral-900">Next</h3>
              <p className="text-sm text-neutral-500 italic mt-0.5">/nekst/ • adjective • coming immediately after the present one</p>
            </div>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              I'm looking to join a team where data science is core to the product, not a side project. I want to work on systems where the feedback loops are tight, the impact is measurable, and the technical challenges push me to grow. I'm drawn to problems where smart algorithms create value and where I can work alongside sharp engineers and product thinkers who care about shipping work that matters.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm">
                <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                Solid team structure
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Solution oriented
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                Growth focused
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
