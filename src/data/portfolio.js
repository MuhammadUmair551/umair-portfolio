export const me = {
  name: 'Muhammad Umair',
  role: 'Frontend Developer',
  location: 'Karachi, Pakistan',
  available: false,
  email: 'ua5600103@gmail.com',
  github: 'https://github.com/muhammadumair551',
  linkedin: 'https://www.linkedin.com/in/muhammad-umair-992393316/',
  intro:
    'CS student at NUML(National University of Modern Language) building toward full-stack development. ' +
    'one real project at a time. I focus on React, clean interfaces, ' +
    'and code that is maintainable by default.',
  about: [
    'I started coding by breaking things and reading error messages until they made sense. That approach still guides how I learn and build.',
    'Right now I am deepening my React skills and growing into the full MERN stack (Node, Express, MongoDB) by building real projects rather than just following tutorials. My focus is on writing practical, usable code across the stack, not just frontend interfaces.',
    'Open to freelance work: landing pages, React apps, or UI-focused development where attention to detail and usability actually matters.',
  ],
};

export const skills = [
  { area: 'Languages & Markup', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)'] },
  { area: 'Frameworks & Libraries', items: ['React', 'Tailwind CSS', 'Bootstrap'] },
  { area: 'Tooling', items: ['Git', 'GitHub', 'Vite', 'npm', 'VS Code'] },
  { area: 'Backend & Services', items: ['Firebase (Auth)', 'Supabase (Auth, Storage)', 'REST APIs'] },
  { area: 'In Progress', items: ['Node.js', 'Express.js', 'MongoDB',] },
];

export const projects = [
  {
    id: 1, year: '2026', featured: true,
    title: 'Relay - Client portal for Freelancers',
    summary: "Relay is a SaaS client portal tool built for freelancers. When you're working on a project, your client gets a private shareable link - no account needed - where they can track progress, download files, view invoices, and leave feedback.",
    tech: ['React + Vite', 'Tailwind CSS', 'Zustand', 'React Router', 'Framer Motion', 'React Hook Form', 'Lucide React'],
    live: 'https://relay-saas.netlify.app/',
    repo: 'https://github.com/MuhammadUmair551/relay-SaaS',
  },
  {
    id: 2, year: '2026', featured: false,
    title: 'Personal Portfolio',
    summary: 'This site. Built with React and Vite. responsive, component-driven, deployed on Netlify.',
    tech: ['React', 'Vite', 'CSS3'],
    live: 'https://portfolio-landing-43ee2f.netlify.app/#',
    repo: 'https://github.com/MuhammadUmair551/portfolio-landing',
  },
  {
    id: 3, year: '2025', featured: false,
    title: 'FoodPanda-replica',
    summary: 'Built a simple yet functional Foodpanda replica, focused on Local storage.',
    tech: ['Javascript', 'Bootstrap', 'localStorage'],
    live: 'https://foodpandaa-replica-8feb2b.netlify.app/', repo: 'https://github.com/MuhammadUmair551/FoodPanda-Replica',
  },
  {
    id: 4, year: '2026', featured: false,
    title: 'Form Validation App',
    summary: 'Real-time validation, password strength meter, and error recovery. Built to understand React controlled state properly.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    live: 'https://form-validation-app12.netlify.app/',
    repo: 'https://github.com/MuhammadUmair551/Form-validation-app',
  },
  {
    id: 5, year: '2026', featured: false,
    title: 'Product Card UI',
    summary: 'Cart system with a custom useCart hook, localStorage persistence, and checkout modal. First time I separated logic from UI cleanly.',
    tech: ['React', 'Custom Hooks', 'localStorage'],
    live: 'https://product-card-ui12.netlify.app/', repo: 'https://github.com/MuhammadUmair551/Product-Card-UI',
  },
  {
    id: 6, year: '2025', featured: false,
    title: 'Simple E-commerce Website',
    summary: 'A fully responsive e-commerce platform with fetch API and payment gateway.',
    tech: ['Javascript', 'Bootstrap', 'GSAP'],
    live: 'https://shopeasy-se-10e07.netlify.app/', repo: 'https://github.com/MuhammadUmair551/Projects/tree/main/E-commerce%20Web',
  },
];

export const experience = [];
export const certifications = [];
