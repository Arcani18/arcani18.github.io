// Single source of truth for the page content: edit this file, not the components.

export interface Link {
  label: string;
  href: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface Role {
  company: string;
  position: string;
  period?: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface Project {
  name: string;
  context: string;
  description: string;
  tags: string[];
  href?: string;
}

export interface StackGroup {
  area: string;
  items: string[];
}

// Technology names should match the keys in techIcons.ts to render their logo.
export interface Milestone {
  year: string;
  title: string;
  description: string;
  stack: string[];
}

export interface Profile {
  name: string;
  role: string;
  company: string;
  location: string;
  headline: string;
  summary: string;
  email: string;
  links: Link[];
  principles: Principle[];
  experience: Role[];
  projects: Project[];
  evolution: Milestone[];
  stack: StackGroup[];
}

export const profile: Profile = {
  name: 'Daniel García',
  role: 'Software Architect',
  company: 'Laboro',
  location: 'México',
  headline: 'Diseño software donde el código explica el negocio.',
  summary:
    'Arquitecto de software enfocado en backends con Node.js y TypeScript modelados con Domain-Driven Design, y en frontends con React y Next.js construidos con componentes de responsabilidad acotada. Cada decisión de diseño lleva su porqué y su trade-off explícito.',
  email: 'garpzos2001@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/garpzos2001/' },
    // { label: 'GitHub', href: 'https://github.com/<usuario>' },
  ],
  principles: [
    {
      title: 'El dominio primero',
      description:
        'Entidades, value objects y casos de uso que expresan la intención del negocio. La infraestructura (base de datos, HTTP, frameworks) vive afuera del dominio, no al revés.',
    },
    {
      title: 'Patrones que se ganan su lugar',
      description:
        'Un patrón entra solo si reduce la complejidad real o hace del código la mejor documentación del dominio. Si no cumple ninguna de las dos, es sobre-ingeniería.',
    },
    {
      title: 'Componentes con un solo propósito',
      description:
        'En frontend, cada componente tiene una responsabilidad clara. HOCs cuando el problema lo pide, y nada de capas especulativas para casos hipotéticos.',
    },
  ],
  experience: [
    {
      company: 'Laboro',
      position: 'Software Architect',
      period: '2025 — Actual',
      summary: 'Plataforma de servicios de remodelación, armado e instalación de muebles.',
      highlights: [
        'Arquitectura del backend en Node.js y TypeScript con DDD: dominio aislado de la infraestructura y casos de uso que expresan el negocio.',
        'Frontend multitenant en Next.js, con la marca de cada partner resuelta por subdominio y un checkout por pasos.',
        'Plataforma multi-portal: sitio comercial, checkout, dashboard administrativo, portal de partners y portal de evidencias para técnicos.',
      ],
      tags: ['Node.js', 'NestJS', 'TypeScript', 'DDD', 'MongoDB', 'Next.js', 'React'],
    },
    {
      // TODO: confirm the exact title.
      company: 'Citi Banamex',
      position: 'Desarrollador de software',
      period: '2025',
      summary: 'Mantenimiento de los sistemas de crédito de Citi Banamex.',
      highlights: ['Trabajo de la mano con el equipo de soporte en India para la corrección de bugs.'],
      tags: ['Java', 'Spring', 'Jenkins'],
    },
    {
      // TODO: confirm the exact title.
      company: 'BBVA',
      position: 'Desarrollador de software',
      period: '2023 — 2025',
      summary: 'Mantenimiento de las aplicaciones móviles de BBVA.',
      highlights: ['Trabajo de la mano con el equipo de soporte en India para la corrección de bugs.'],
      tags: ['JavaScript', 'Cells', 'LitElement', 'Jira', 'CI/CD', 'JFrog'],
    },
    {
      // TODO: confirm the exact title.
      company: 'MovicareMX',
      position: 'Desarrollador full stack',
      period: '2022 — 2025',
      summary: 'Plataforma de atención médica y estudios de laboratorio a domicilio.',
      highlights: [
        'App móvil en React Native para atención médica y estudios de laboratorio a domicilio.',
        'CRM de gestión para el personal operativo y administrativo.',
        'Servidor de push notifications con Firebase Cloud Messaging.',
        'Automatización de eventos con Firebase Functions.',
      ],
      tags: ['React Native', 'React', 'Firebase', 'Travis CI', 'Xcode'],
    },
  ],
  projects: [
    {
      name: 'Kihap',
      context: 'Independiente',
      description:
        'App de escritorio para una escuela de Taekwondo: registro de alumnos y mensualidades, avisos por email antes de cada vencimiento y pase de lista con huella digital usando un lector DigitalPersona integrado vía FFI. Una segunda pantalla proyecta el ingreso de cada alumno.',
      tags: ['Electron', 'React', 'PostgreSQL', 'Nodemailer', 'DigitalPersona', 'Tailwind CSS'],
    },
    {
      name: 'MovicareMX',
      context: '2022 — 2025',
      description:
        'App móvil para atención médica y estudios de laboratorio a domicilio, CRM para el personal operativo y administrativo, servidor de push notifications con Firebase Cloud Messaging y automatización de eventos con Firebase Functions.',
      tags: ['React Native', 'React', 'Firebase', 'Travis CI'],
    },
    {
      name: 'App para investigación de Alzheimer',
      context: 'Investigación',
      description:
        'Apoyo a un colega que investiga el uso de inteligencia artificial para la detección temprana del Alzheimer: diseño de la interfaz e infraestructura para dejar la aplicación lista y conectada al modelo de IA.',
      tags: ['React Native', 'Firebase'],
    },
  ],
  evolution: [
    {
      year: '2022 — 2025',
      title: 'MovicareMX',
      description: 'App móvil de atención médica y estudios de laboratorio a domicilio, con CRM y automatización en Firebase.',
      stack: ['React Native', 'React', 'Firebase', 'Travis CI', 'Xcode'],
    },
    {
      year: '2023 — 2025',
      title: 'BBVA',
      description: 'Mantenimiento de las apps móviles de banca con web components.',
      stack: ['JavaScript', 'Cells', 'LitElement', 'Jira', 'CI/CD', 'JFrog'],
    },
    {
      year: '2025',
      title: 'Citi Banamex',
      description: 'Mantenimiento de los sistemas de crédito.',
      stack: ['Java', 'Spring', 'Jenkins'],
    },
    {
      year: '2025',
      title: 'Laboro',
      description: 'Backend con NestJS y DDD sobre MongoDB, frontends multitenant en Next.js e infraestructura en DigitalOcean.',
      stack: ['NestJS', 'Node.js', 'TypeScript', 'MongoDB', 'Domain-Driven Design', 'Next.js', 'DigitalOcean'],
    },
    {
      year: '2026',
      title: 'Desktop, e-commerce y mobile',
      description: 'Kihap en Electron, integraciones de Shopify para Laboro y apps móviles con Expo.',
      stack: ['Electron', 'Vite', 'Tailwind CSS', 'PostgreSQL', 'Shopify', 'Prisma', 'Cloudflare', 'Expo'],
    },
  ],
  stack: [
    {
      area: 'Backend',
      items: ['Node.js', 'NestJS', 'TypeScript', 'Domain-Driven Design', 'WebSockets'],
    },
    {
      area: 'Datos e infraestructura',
      items: ['MongoDB', 'Firebase', 'SQLite', 'DigitalOcean', 'Cloudflare'],
    },
    {
      area: 'Frontend',
      items: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'Vite'],
    },
    {
      area: 'Mobile y desktop',
      items: ['React Native', 'Expo', 'Electron'],
    },
  ],
};
