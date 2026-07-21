import aboutIcon from '../assets/Question Pixel.webp';
import skillsIcon from '../assets/Crazy Pixel.webp';
import projectsIcon from '../assets/heart pixel.webp';
import contactIcon from '../assets/Naughty Pixel.webp';

export const phrases = [
  "I build digital experiences.",
  "FrontEnd Developer.",
  "Full Stack Developer.",
];

export const sections = ['home', 'about', 'skills', 'projects', 'contact'];

export const pageConfig = {
  about: { icon: aboutIcon, message: "Ah, curious about me? Good taste!" },
  skills: { icon: skillsIcon, message: "Time to get nerdy. Let's gooo." },
  projects: { icon: projectsIcon, message: "These are my babies. Handle with care." },
  contact: { icon: contactIcon, message: "Let's build something awesome together!" },
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const projects = [
  {
    id: 1,
    title: 'Driver Drowsiness Detector',
    desc: 'The project aims to provide a simple solution by monitoring the drivers eyes and triggering an alert if signs of drowsiness are detected.',
    tech: ['Python'],
    category: 'personal',
    link: 'https://github.com/PartishThero/Driver-Drowsiness',
  },
];

export const filters = ['All', 'Professional', 'Personal'];

export const skills = {
  Frontend: [
    { name: 'React', icon: 'fa-brands fa-react' },
    { name: 'Framer', icon: 'fa-brands fa-flutter' },
    { name: 'HTML', icon: 'fa-solid fa-code' },
    { name: 'CSS', icon: 'fa-brands fa-css3' },
    { name: 'Tailwind', icon: 'fa-solid fa-wind' },
  ],
  Backend: [
    { name: 'REST APIs', icon: 'fa-brands fa-quinscape' },
  ],
  'Tools & DevOps': [
    { name: 'Git', icon: 'fa-brands fa-github' },
    { name: 'Vite', icon: 'fa-brands fa-vimeo-v' },
    { name: 'Figma', icon: 'fa-brands fa-figma' },
  ],
  Languages: [
    { name: 'JavaScript', icon: 'fa-brands fa-square-js' },
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'Java', icon: 'fa-brands fa-java' },
  ],
};

export const contactInfo = {
  email: 'partish.palkritwar07@gmail.com',
  location: 'Bangalore, India',
  web3formsKey: 'ebef00c6-caeb-4f1d-8265-4ec3b0f4e5d4',
  socials: [
    { label: 'GitHub', href: 'https://github.com/PartishThero' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/partish-palkritwar-b74a74376/' },
  ],
};
