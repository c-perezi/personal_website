// Hero content
export const hero = {
  name: "Carla N. Pérez",
  title: "Software Engineer | DevOps Specialist",
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
    id: "proj-1",
    title: "Multi-Region Terraform Platform",
    description:
      "Designed and deployed a multi-region AWS infrastructure using Terraform modules with automated drift detection and self-healing capabilities.",
    category: "devops",
    tags: ["Terraform", "AWS", "Python"],
    link: "https://github.com/alexmorgan/terraform-platform",
    image: "/projects/terraform-platform.webp",
  },
  {
    id: "proj-2",
    title: "Zero-Downtime CI/CD Pipeline",
    description:
      "Built a blue-green deployment pipeline with GitHub Actions and ArgoCD, achieving zero-downtime releases for a microservices architecture.",
    category: "devops",
    tags: ["GitHub Actions", "ArgoCD", "Kubernetes"],
    link: "https://github.com/alexmorgan/cicd-pipeline",
    image: "/projects/cicd-pipeline.webp",
  },
  {
    id: "proj-3",
    title: "ML Model Serving Infrastructure",
    description:
      "Created a scalable model serving platform on AWS SageMaker with automated retraining pipelines and A/B testing capabilities.",
    category: "ai",
    tags: ["AWS SageMaker", "Python", "Docker"],
    link: "https://github.com/alexmorgan/ml-serving",
    image: "/projects/ml-serving.webp",
  },
  {
    id: "proj-4",
    title: "Log Anomaly Detection System",
    description:
      "Developed an AI-powered log analysis tool that detects anomalies in real-time using transformer models and streams alerts to Slack.",
    category: "ai",
    tags: ["Python", "TensorFlow", "ELK Stack"],
    link: "https://github.com/alexmorgan/log-anomaly",
    image: "/projects/log-anomaly.webp",
  },
];

// Experience entries (ordered newest first)
export const experience = [
  {
    id: "exp-1",
    company: "Banco Popular de Puerto Rico",
    role: "Software Engineer | Pipelines Engineering",
    period: "2023 - Present",
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
  email: "alex@example.com",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/alexmorgan",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/alexmorgan",
      icon: "linkedin",
    },
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
