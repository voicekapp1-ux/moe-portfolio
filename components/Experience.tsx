import React from 'react';
import { ExperienceItem } from '../types';
import { trackEngagement } from '../utils/analytics';

const experienceData: ExperienceItem[] = [
  {
    id: 'severlbarands',
    role: 'Senior Technical Product Manager',
    company: 'Severlbarands',
    location: 'Amman, Jordan',
    period: '2025 - Present',
    logoUrl: null,
    companyUrl: null,
    keyMetrics: [
      'MVP to market for PPC SaaS platform',
      'Pay-per-call platform for US market',
      'B2B lead generation revenue streams'
    ],
    achievements: [
      'Led end-to-end product strategy and development for pay-per-call (PPC) SaaS platform targeting the American market, enabling businesses to monetize inbound calls as lead generation revenue streams.',
      'Architected and launched MarTech/AdTech solution for call-based lead generation, integrating call routing, tracking, and analytics capabilities to deliver measurable ROI for B2B clients.',
      'Drove product roadmap from MVP to market entry, conducting competitive analysis against industry leaders Ringba, Invoca, defining technical specifications and collaborating with engineering teams.',
      'Designed go-to-market strategy and pricing models for subscription-based PPC platform, positioning product as revenue enabler for businesses to sell calls as qualified leads.'
    ]
  },
  {
    id: 'classera',
    role: 'Senior Product Manager',
    company: 'Classera',
    location: 'Amman, Jordan',
    period: '2022 - 2025',
    logoUrl: null,
    companyUrl: null,
    keyMetrics: [
      '+40% user engagement',
      '-25% development cycle time',
      '50+ educational institutions'
    ],
    achievements: [
      'Drove product strategy and roadmap that increased user engagement by <span class="text-accent font-medium">40%</span> across key segments through data-driven user research, competitive market analysis, and customer journey mapping.',
      'Led cross-functional product development and feature prioritization with engineering, design, and QA teams, reducing development cycle time by <span class="text-accent font-medium">25%</span>.',
      'Owned end-to-end product lifecycle from market research and MVP development to product launch and go-to-market execution, utilizing Power BI, Google Analytics, Mixpanel.',
      'Managed product backlog and feature development for enterprise EdTech platform serving <span class="text-accent font-medium">50+</span> educational institutions.',
      'Conducted competitive analysis and user research to identify growth opportunities and guide strategic product investments in the EdTech market.'
    ]
  },
  {
    id: 'labrys',
    role: 'Product Implementation Manager',
    company: 'Labrys Consultancy',
    location: 'Istanbul, Turkey',
    period: '2020 - 2022',
    logoUrl: null,
    companyUrl: null,
    keyMetrics: [
      '95% client satisfaction',
      '+20% project completion rate',
      '+35% lead conversion rate'
    ],
    achievements: [
      'Managed enterprise product implementations across MENA region, achieving <span class="text-accent font-medium">95%</span> client satisfaction through strategic stakeholder management and agile delivery.',
      'Led product discovery and business requirements analysis for Oracle ERP and Fusion implementations, increasing project completion rates by <span class="text-accent font-medium">20%</span>.',
      'Designed and launched automated marketing products using Oracle Eloqua, driving <span class="text-accent font-medium">35%</span> increase in lead conversion rates.',
      'Translated business requirements into technical specifications and product roadmaps, ensuring seamless product launch execution through agile product management.'
    ]
  },
  {
    id: 'alyamamah',
    role: 'Senior Product Operations Manager / Acting IT Director',
    company: 'Al Yamamah University',
    location: 'Riyadh, Saudi Arabia',
    period: '2015 - 2020',
    logoUrl: null,
    companyUrl: null,
    keyMetrics: [
      '+30% operational efficiency',
      '+25% student satisfaction',
      '+50% web traffic'
    ],
    achievements: [
      'Led digital product strategy for the university technology platform, improving operational efficiency by <span class="text-accent font-medium">30%</span> and student satisfaction by <span class="text-accent font-medium">25%</span>.',
      'Owned product lifecycle management and budget planning for IT initiatives, aligning technology investments with institutional goals.',
      'Spearheaded website product redesign using WordPress CMS, driving <span class="text-accent font-medium">50%</span> increase in web traffic through improved UX and product analytics.',
      'Established product documentation standards and agile workflows, improving issue resolution times and stakeholder visibility.'
    ]
  },
  {
    id: 'microsoft',
    role: 'Product Marketing Coordinator',
    company: 'Microsoft Innovation Center',
    location: 'Riyadh, Saudi Arabia',
    period: '2013 - 2015',
    logoUrl: null,
    companyUrl: null,
    keyMetrics: [
      '+30% event attendance',
      '90% partner satisfaction',
      'Strategic partnerships'
    ],
    achievements: [
      'Developed go-to-market strategies and product launch plans for Microsoft Partner events, increasing attendance by <span class="text-accent font-medium">30%</span> through targeted marketing campaigns.',
      'Built and maintained strategic business relationships with key partners, achieving <span class="text-accent font-medium">90%</span> satisfaction rate through consultative product management.'
    ]
  },
  {
    id: 'netways',
    role: 'Product Quality Manager',
    company: 'Netways Limited ISP',
    location: 'Riyadh, Saudi Arabia',
    period: '2011 - 2013',
    logoUrl: null,
    companyUrl: null,
    keyMetrics: [
      '-25% customer issues',
      '-20% response times',
      'B2B & B2C frameworks'
    ],
    achievements: [
      'Implemented product quality frameworks for B2B and B2C service offerings, reducing customer issues by <span class="text-accent font-medium">25%</span> and improving response times by <span class="text-accent font-medium">20%</span>.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-8 md:py-12 px-6 bg-bg-elevated">
      <div className="max-w-[960px] mx-auto">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Experience</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">Professional Journey</h2>
        </div>
        <div className="space-y-4">
          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className="relative pl-8 border-l-2 border-border-subtle pb-8 last:pb-0"
            >
              <div className="absolute -left-[9px] top-1 size-4 rounded-full bg-bg-elevated border-2 border-accent"></div>
              <div className="bg-bg-surface border border-border-subtle rounded-xl p-5 hover:border-accent/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-text-primary text-base">{item.role}</h3>
                    <p className="text-accent text-sm mt-0.5">{item.company} &middot; {item.location}</p>
                  </div>
                  <span className="text-xs text-text-muted bg-bg-base px-3 py-1 rounded-full border border-border-subtle whitespace-nowrap">{item.period}</span>
                </div>
                {item.keyMetrics && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.keyMetrics.map((metric, i) => (
                      <span key={i} className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">{metric}</span>
                    ))}
                  </div>
                )}
                <ul className="space-y-1.5">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-2">
                      <span className="text-accent mt-1.5 flex-shrink-0 text-xs">&#9654;</span>
                      <span dangerouslySetInnerHTML={{ __html: achievement }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
