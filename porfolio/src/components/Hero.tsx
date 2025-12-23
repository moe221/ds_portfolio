import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0"
    >
      <div className="decorative-pattern pattern-hero"></div>
      <div className="relative z-10 w-full">
        <div className="grid md:grid-cols-4 gap-8 items-center">
          <div className="md:col-span-1 flex flex-col gap-6">
            <div className="relative z-10 w-full aspect-square rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-white">
              <img
                src="/me_square.jpg"
                alt="Mohamed Abuhalala"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://linkedin.com/in/mohamed-abuhalala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/mohamed-abuhalala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:myf.abuhalala@gmail.com"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 text-center md:text-left space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight">
              Mohamed Abuhalala
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
              <p className="text-2xl md:text-3xl text-neutral-600 font-medium">
                Data Scientist
              </p>
              <span className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Open for new projects
              </span>
            </div>

            <p className="text-base md:text-lg text-neutral-600 max-w-2xl">
              I build machine learning systems for mobile growth and user retention. My work has                    supported teams at global brands like <strong>HBO</strong>, <strong>Adobe</strong>, and <strong>LEGO</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="relative z-10 group inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-all"
              >
                Book a Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 font-medium rounded-lg border border-neutral-900 hover:bg-neutral-50 transition-all"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
