export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  items: string[];
  colors: [string, string, string];
}

export const services: Service[] = [
  {
    slug: "ai",
    title: "AI Partnered Services",
    shortDesc: "Strategic AI integration and partnered solutions that transform your workflows and unlock new capabilities.",
    fullDesc: "We embed AI into your existing workflows, building custom models, automation pipelines, and intelligent agents that augment your team rather than replace it. From chatbot interfaces to predictive analytics, every solution is designed for real-world impact.",
    items: [
      "Custom AI model development and deployment",
      "Intelligent process automation and RPA",
      "AI-powered chatbots and virtual assistants",
      "Predictive analytics and forecasting",
      "Data pipeline engineering for AI readiness",
      "Model monitoring and ongoing optimisation",
    ],
    colors: ["#2E1047", "#4A236F", "#9333EA"],
  },
  {
    slug: "cloud",
    title: "Cloud Services",
    shortDesc: "Migration, architecture and managed operations on AWS and Azure — built for reliability and cost efficiency.",
    fullDesc: "We design, migrate, and manage cloud infrastructure on AWS and Azure that scales with your business. Our AI-optimised approach ensures you only pay for what you use while getting enterprise-grade reliability and performance.",
    items: [
      "Cloud migration strategy and execution",
      "AI-optimised architecture and auto-scaling",
      "Cost management and FinOps",
      "Kubernetes and container orchestration",
      "Hybrid and multi-cloud solutions",
      "24/7 managed operations and support",
    ],
    colors: ["#0C2A5E", "#1D4ED8", "#60A5FA"],
  },
  {
    slug: "data",
    title: "Data & Analytics",
    shortDesc: "End-to-end data engineering, BI, and analytics solutions that turn raw data into actionable insights.",
    fullDesc: "Raw data is your most underutilised asset. We build end-to-end data platforms that collect, clean, and transform your data into actionable insights — powering better decisions at every level of your organisation.",
    items: [
      "Data warehouse and lake architecture",
      "Business intelligence dashboards (Power BI, Tableau)",
      "Real-time data streaming and processing",
      "Data governance and quality frameworks",
      "AI-driven anomaly detection and reporting",
      "Legacy data migration and integration",
    ],
    colors: ["#0A3B36", "#0D9488", "#5EEAD4"],
  },
  {
    slug: "managed-it",
    title: "Managed IT Support",
    shortDesc: "Comprehensive IT support, infrastructure management, and helpdesk services to keep your business running smoothly.",
    fullDesc: "Keep your business running with comprehensive IT support that covers everything from helpdesk to infrastructure management. We act as your extended IT department, resolving issues before they become problems.",
    items: [
      "24/7 helpdesk with SLA-backed response times",
      "Infrastructure monitoring and management",
      "Hardware and software procurement",
      "Network design and maintenance",
      "Patch management and system updates",
      "Employee onboarding and offboarding IT",
    ],
    colors: ["#1E293B", "#334155", "#94A3B8"],
  },
  {
    slug: "security",
    title: "Cyber Security",
    shortDesc: "Proactive threat detection, vulnerability management and 24/7 SOC monitoring powered by Rapid7.",
    fullDesc: "Protect your business with proactive, AI-driven security operations. We provide continuous threat monitoring, vulnerability management, and incident response — backed by Rapid7 and aligned to ISO 27001 and Cyber Essentials frameworks.",
    items: [
      "AI-driven threat detection and response",
      "Vulnerability assessments and penetration testing",
      "24/7 SOC monitoring powered by Rapid7",
      "Incident response planning and execution",
      "Compliance (ISO 27001, GDPR, Cyber Essentials)",
      "Security awareness training for teams",
    ],
    colors: ["#450A0A", "#B91C1C", "#F87171"],
  },
  {
    slug: "erp",
    title: "Microsoft Dynamics ERP",
    shortDesc: "Implement, customise and support Dynamics 365 solutions that unify finance, supply chain, and operations.",
    fullDesc: "Transform your finance, supply chain, and operations with Dynamics 365. We handle end-to-end implementation, customisation, and support — including AI enhancements that automate workflows and surface intelligence where it matters most.",
    items: [
      "Dynamics 365 implementation and migration",
      "AI-enhanced finance and supply chain automation",
      "Legacy ERP migration and data cleansing",
      "Custom workflow and integration development",
      "User training and change management",
      "Ongoing support and managed upgrades",
    ],
    colors: ["#4A2C0A", "#B45309", "#FBBF24"],
  },
];
