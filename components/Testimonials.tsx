import React, { useRef, useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Al-Mansouri',
    title: 'VP of Engineering',
    company: 'Classera',
    text: 'Mohammad consistently delivered exceptional product thinking. His ability to align cross-functional teams and translate complex technical requirements into clear roadmaps was outstanding.',
    initials: 'SM',
  },
  {
    id: 2,
    name: 'Ahmed Khalil',
    title: 'CEO',
    company: 'Severlbarands',
    text: 'Working with Mohammad on the PPC SaaS platform was a game-changer. He brought strategic clarity and a user-first mindset that accelerated our go-to-market timeline significantly.',
    initials: 'AK',
  },
  {
    id: 3,
    name: 'Rania Nasser',
    title: 'Product Director',
    company: 'Labrys Consultancy',
    text: 'Mohammad is one of the most methodical product managers I have worked with. His stakeholder management skills and attention to client outcomes set him apart from his peers.',
    initials: 'RN',
  },
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className={`py-6 md:py-12 px-6 bg-bg-elevated transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-[960px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/3">
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Testimonials</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary leading-tight">
              What People Say
            </h2>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              Feedback from colleagues, managers, and collaborators I have had the privilege of working with.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-1 gap-5">
            {testimonials.map((t) => (
              <div key={t.id} className="relative p-6 rounded-2xl bg-bg-surface border border-border-subtle hover-lift group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.title} &bull; {t.company}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  &ldquo;{t.text}&rdquo;
                </p>
                <span className="material-symbols-outlined absolute top-5 right-5 text-accent/20 text-5xl">format_quote</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
