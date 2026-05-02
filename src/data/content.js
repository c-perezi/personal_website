// Hero content
export const hero = {
  name: "Carla N. Pérez",
  title: "Cloud Platform Engineer | DevOps Specialist",
  intro:
    "I build boring systems. Passionate about automation, cloud-native architecture, and developer empowerment.",
  ctaText: "Let's chat",
};

// Skills grouped by category
export const skills = [
  {
    category: "DevOps Tools",
    items: ["Terraform", "Docker", "Ansible"],
  },
  {
    category: "CI/CD",
    items: ["Jenkins", "GitLab CI", "GitHub Actions", "Jenkins Templating Engine"],
  },
  {
    category: "Cloud | AWS ",
    items: ["EC2", "S3", "Lambda", "CloudFormation", "CDK"],
  },
  {
    category: "Languages",
    items: ["Python", "Java", "Bash", "JavaScript", "Groovy","HCL" ],
  },
];

// Projects
export const projects = [
  {
    id: "proj-5",
    title: "Python vs NumPy Performance Benchmarking",
    description:
      "Benchmarked element-wise and matrix multiplication in pure Python vs NumPy across multiple array dimensions, visualizing the dramatic speedup from vectorized C routines.",
    category: "ai",
    tags: ["Python", "NumPy", "Matplotlib", "Benchmarking"],
    link: "https://github.com/c-perezi/artificial-intelligence-portfolio/tree/main/01_python_performance",
  },
  {
    id: "proj-6",
    title: "Intelligent Agents — Vacuum World Simulator",
    description:
      "Built a PEAS-based environment simulator for the vacuum-cleaner world, comparing deterministic reflex, randomized reflex, and stateful agents across unknown grid environments.",
    category: "ai",
    tags: ["Python", "AIMA", "Agent Design", "PEAS"],
    link: "https://github.com/c-perezi/artificial-intelligence-portfolio/tree/main/02_Agents",
  },
  {
    id: "proj-7",
    title: "N-Queens Local Search Comparison",
    description:
      "Compared hill climbing, random-restart hill climbing, and simulated annealing on the 8-Queens puzzle, demonstrating why escape mechanisms are critical for local search.",
    category: "ai",
    tags: ["Python", "AIMA", "Local Search", "Simulated Annealing"],
    link: "https://github.com/c-perezi/artificial-intelligence-portfolio/tree/main/04_8Queens",
  },
];

// Experience entries (ordered newest first)
export const experience = [
  {
    id: "exp-0",
    company: "Banco Popular de Puerto Rico",
    role: "Cloud Platform Engineer",
    period: "2026 - Present",
    description:
      "Design and operate cloud platform infrastructure to support enterprise-scale projects.",
    technologies: ["Terraform", "GitLab CI"],
  },
  {
    id: "exp-1",
    company: "Banco Popular de Puerto Rico",
    role: "Software Engineer | Pipelines Engineering",
    period: "2023 - 2026",
    description:
      "Developed CI/CD pipelines, infrastructure automation and platform engineering for a Puerto Rico's primary financial application, serving 2M+ users, and supported enterprise-wide automation. Part of the bank's first Software Engineering Associates cohort.",
    technologies: ["AWS", "Terraform", "Jenkins", "Java", "React"],
  },
  {
    id: "exp-2",
    company: "University of Puerto Rico | Mayagüez",
    role: "Master of Science in Industrial Engineering",
    period: "2022 - 2026",
    description:
      "Compared novel time series forecasting methods against LSTM networks. Learned the importance of bridging technical and soft skills.",
    technologies: ["Time Series Analysis", "Machine Learning", "Production Systems", "Operations Research", "Systems Simulation", "Engineering Management"],
  },
  {
    id: "exp-3",
    company: "University of Puerto Rico | Mayagüez",
    role: "Bachelor of Science in Pure Mathematics, minor in Economics",
    period: "2016 - 2022",
    description:
      "A time to learn how to learn hard stuff and enjoy the process. Foundational period in developing a growth-mindset.",
    technologies: ["Calculus", "Differential Equations", "Abstract Algebra", "Resilience"],
  },
];

// Thoughts / articles
export const thoughts = [
  {
    id: "thought-1",
    title: "Why Infrastructure as Code Changed Everything",
    excerpt:
      "A deep dive into how treating infrastructure as code transformed our deployment reliability and team velocity.",
    date: "2024-08-12",
    readTime: "6 min read",
    link: "/blog/infrastructure-as-code",
  },
  {
    id: "thought-2",
    title: "The Art of Zero-Downtime Deployments",
    excerpt:
      "Lessons learned from implementing blue-green and canary deployment strategies at scale.",
    date: "2024-05-20",
    readTime: "8 min read",
    link: "/blog/zero-downtime-deployments",
  },
  {
    id: "thought-3",
    title: "Monitoring That Actually Matters",
    excerpt:
      "How to build observability into your systems without drowning in alerts and dashboards.",
    date: "2024-02-10",
    readTime: "5 min read",
    link: "/blog/monitoring-that-matters",
  },
];

// Contact / social links
export const contact = {
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/c-perezi",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/cnperez",
      icon: "linkedin",
    },
    {
      platform: "Calendly", 
      url: "https://calendly.com/c-perezi", 
      icon: "calendly"
    }
  ],
};

// Navigation links
export const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Thoughts", href: "#thoughts" },
  { label: "Contact", href: "#contact" },
];
// Feature flags
export const featureFlags = {
  showDevOpsProjects: false,
  showThoughts: false,
};

