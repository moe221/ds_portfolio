import { useState } from 'react';
import { Calendar, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mqekzkgd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'myf.abuhalala@gmail.com',
      href: 'mailto:myf.abuhalala@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+49 152 23225547',
      href: 'tel:+4915223225547',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Berlin, Germany',
    },
  ];

  return (
    <section id="contact" className="relative section-spacing section-divider">
      <div style={{ paddingLeft: 'var(--layout-padding)', paddingRight: 'var(--layout-padding)' }}>
        <div className="relative text-center mb-12">
          <div className="decorative-pattern pattern-header"></div>
          <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Get in Touch
          </h2>
          <p className="relative z-10 text-lg text-neutral-600 max-w-2xl mx-auto">
            Interested in working together? Let's schedule a call to discuss your project
            or feel free to send me a message directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col justify-between h-full gap-8">
            <div className="p-8 bg-white rounded-xl border border-neutral-200">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-accent-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-500 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-neutral-900 hover:text-accent-700 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-neutral-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-neutral-900 text-white rounded-xl flex-grow flex flex-col">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Calendar size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Book a Call</h3>
                </div>
                <p className="text-neutral-300 text-sm mb-6">
                  Schedule a 30-minute consultation to discuss your data science needs and
                  explore how we can work together.
                </p>
              </div>
              <a
                href="https://cal.com/mohamed-abuhalala/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-white text-neutral-900 font-medium rounded-lg text-center hover:bg-neutral-100 transition-colors mt-auto"
              >
                Schedule Meeting
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="p-8 bg-white rounded-xl border border-neutral-200">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-900 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-700 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-700 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-700 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-700 text-white font-medium rounded-lg hover:bg-accent-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-10 border-t border-neutral-200">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/mohamed-abuhalala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-accent-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/mohamed-abuhalala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-accent-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:myf.abuhalala@gmail.com"
                className="text-neutral-600 hover:text-accent-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-neutral-600 text-sm">
              {new Date().getFullYear()} Mohamed Abuhalala. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
