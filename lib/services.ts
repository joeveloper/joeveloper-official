export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  opportunity: string;
  offers: string[];
  process: { title: string; description: string }[];
  outcomes: string[];
  subject: string;
};

export const services: Service[] = [
  {
    slug: "ai-automation", number: "01", title: "AI & Automation", shortTitle: "AI & Automation",
    tagline: "Make technology useful.",
    description: "Practical AI, smarter workflows and carefully designed automation that help your people focus on the work that matters.",
    opportunity: "Digital transformation should begin with the business problem, not the tool. We map existing processes, identify high-value opportunities and implement solutions your teams can confidently use.",
    offers: ["Workflow discovery and opportunity mapping", "Practical AI assistants and knowledge workflows", "Process and task automation", "Integration with existing systems", "Responsible AI adoption and enablement"],
    process: [
      { title: "Discover", description: "Understand your people, processes, data and operational bottlenecks." },
      { title: "Prioritize", description: "Identify where automation can create measurable, realistic value." },
      { title: "Implement", description: "Build focused solutions and integrate them into your workflow." },
      { title: "Enable", description: "Train teams, establish guardrails and iterate based on feedback." },
    ],
    outcomes: ["Less repetitive administration", "Faster access to operational information", "More consistent workflows", "A realistic plan for AI adoption"],
    subject: "AI and automation consultation",
  },
  {
    slug: "digital-products-engineering", number: "02", title: "Digital Products & Engineering", shortTitle: "Software Engineering",
    tagline: "Useful software. Built to last.",
    description: "Reliable websites, applications and platforms built around the needs of your customers, teams and operations.",
    opportunity: "Whether modernizing an internal system or launching a new digital product, we connect product thinking, design and engineering to deliver usable technology.",
    offers: ["Digital product strategy and prototyping", "Web applications and platforms", "Internal tools and operational portals", "APIs and systems integration", "Modernization and ongoing improvements"],
    process: [
      { title: "Define", description: "Translate business objectives into clear product requirements." },
      { title: "Design", description: "Prototype user journeys and validate essential interactions." },
      { title: "Build", description: "Engineer and test a maintainable product in focused releases." },
      { title: "Evolve", description: "Measure, maintain and improve the platform after launch." },
    ],
    outcomes: ["A better experience for users", "Connected operational systems", "Software that can evolve with your business", "Clear delivery priorities"],
    subject: "Software engineering consultation",
  },
  {
    slug: "brand-web-growth", number: "03", title: "Brand, Web & Growth", shortTitle: "Digital Presence & Growth",
    tagline: "Show up. Stand out. Grow.",
    description: "Connected digital experiences, websites and content that communicate your value and create opportunities for business growth.",
    opportunity: "Your online presence should do more than look good. We help organizations build a coherent digital footprint that is credible, useful and easy to maintain.",
    offers: ["Digital presence and brand audits", "Website design and development", "Digital identity and content systems", "Search and digital marketing strategy", "Analytics and continuous optimization"],
    process: [
      { title: "Audit", description: "Assess the current brand, audiences, channels and website experience." },
      { title: "Position", description: "Clarify the message, customer journey and desired actions." },
      { title: "Launch", description: "Design and publish cohesive digital touchpoints." },
      { title: "Optimize", description: "Use performance signals to improve the experience over time." },
    ],
    outcomes: ["Clearer brand communication", "A consistent online footprint", "Better routes from discovery to enquiry", "A foundation for sustainable growth"],
    subject: "Digital presence and growth consultation",
  },
  {
    slug: "training-digital-enablement", number: "04", title: "Training & Digital Enablement", shortTitle: "Training & Enablement",
    tagline: "Empower the people behind change.",
    description: "Practical learning programs for individuals, teams and institutions adopting new technologies and more digital ways of working.",
    opportunity: "Technology alone doesn't change an organization. We help people understand new tools, improve digital confidence and translate training into real workflows.",
    offers: ["AI literacy for professionals and teams", "Workflow and productivity workshops", "Digital skills and tool adoption", "Role-specific corporate training", "Change enablement and follow-up support"],
    process: [
      { title: "Assess", description: "Understand existing skills, day-to-day needs and adoption barriers." },
      { title: "Design", description: "Tailor an accessible learning path to the audience." },
      { title: "Deliver", description: "Run hands-on, practical sessions with relevant examples." },
      { title: "Embed", description: "Support application of new skills in daily work." },
    ],
    outcomes: ["More confident teams", "Better adoption of technology investments", "Practical and reusable digital skills", "A culture of continuous improvement"],
    subject: "Digital training consultation",
  },
];

export function findService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function serviceEnquiry(subject: string): string {
  return "mailto:hello@joeveloper.com?subject=" + encodeURIComponent(subject);
}
