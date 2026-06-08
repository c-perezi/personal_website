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
    id: "proj-wip-1",
    title: "Cloud Platform Automation Toolkit",
    description:
      "A collection of reusable Terraform modules and GitLab CI pipeline templates for provisioning and managing enterprise AWS environments. Work in progress.",
    category: "devops",
    tags: ["Terraform", "GitLab CI", "AWS", "IaC"],
    wip: true,
  },
  {
    id: "proj-wip-2",
    title: "Jenkins Audit Trail → AWS S3",
    description:
      "Extending the Jenkins Audit Trail plugin to stream audit events directly to an AWS S3 bucket, enabling durable, centralized compliance logging outside of Jenkins.",
    category: "devops",
    tags: ["Java", "Jenkins", "AWS S3", "Audit"],
    link: "https://plugins.jenkins.io/audit-trail/",
    wip: true,
  },
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
  {
    id: "proj-8",
    title: "Connect 4 — Adversarial AI",
    description:
      "Implemented and compared AI agents for Connect 4: a random agent, a heuristic agent, and Minimax with Alpha-Beta pruning. Includes tournament evaluation and human vs AI gameplay.",
    category: "ai",
    tags: ["Python", "Minimax", "Alpha-Beta Pruning", "Game AI"],
    link: "https://github.com/c-perezi/artificial-intelligence-portfolio/tree/main/05_adversarial_search",
  },
  {
    id: "proj-9",
    title: "Zebra Puzzle — Constraint Satisfaction",
    description:
      "Solved the classic Zebra logic puzzle (Houses puzzle) using constraint satisfaction techniques, determining where the zebra lives and who drinks water from a set of 15 clues.",
    category: "ai",
    tags: ["Python", "CSP", "Constraint Satisfaction", "AIMA"],
    link: "https://github.com/c-perezi/artificial-intelligence-portfolio/tree/main/06_csp",
  },
];

// Experience entries (ordered newest first)
export const experience = [
  {
    id: "exp-0",
    company: "Banco Popular de Puerto Rico",
    role: "Cloud Platform Engineer | Cloud Delivery & Engineering | Pipelines Engineering ",
    period: "2026 - Present",
    description:
      "Design and operate cloud platform infrastructure to support enterprise-scale projects.",
    technologies: ["Terraform", "GitLab CI"],
  },
  {
    id: "exp-1",
    company: "Banco Popular de Puerto Rico",
    role: "Software Engineer | Digital Banking Engineering | Systems Engineering",
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
      "Foundational period in developing a growth-mindset.",
    technologies: ["Calculus", "Differential Equations", "Abstract Algebra", "Resilience"],
  },
];

// Thoughts / articles
import llmsAndIntelligence from "../content/thoughts/llms-and-intelligence.md?raw";
import llmLimitations from "../content/thoughts/llm-limitations.md?raw";
import reflectionKeyExperiences from "../content/thoughts/reflection-key-experiences.md?raw";

export const thoughts = [
  {
    id: "thought-1",
    title: "How My View of AI as \"Intelligence\" Changed",
    excerpt:
      "A brief reflection of my view of AI across the semester.",
    date: "2025-06-01",
    readTime: "~2 min read",
    content: llmsAndIntelligence,
  },
  {
    id: "thought-2",
    title: "What Limitations of LLMs Became Evident",
    excerpt:
      "Fluency is not reasoning.",
    date: "2025-06-01",
    readTime: "~2 min read",
    content: llmLimitations,
  },
  {
    id: "thought-3",
    title: "Reflection on Key Course Experiences",
    excerpt:
      "The midterm, the debate on AI and intelligence, and what I'm taking away from ICOM5015.",
    date: "2025-06-01",
    readTime: "~3 min read",
    content: reflectionKeyExperiences,
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
  showDevOpsProjects: true,
  showThoughts: true,
};

