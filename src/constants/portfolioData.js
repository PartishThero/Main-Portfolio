import aboutIcon from '../assets/question-pixel.webp';
import skillsIcon from '../assets/crazy-pixel.webp';
import projectsIcon from '../assets/heart-pixel.webp';
import contactIcon from '../assets/naughty-pixel.webp';

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
    desc: 'Real-time computer vision system that monitors driver facial landmarks and eye aspect ratios via webcam, sounding an alert upon fatigue detection. Awarded 1st Prize at Science Fair.',
    tech: ['Python', 'OpenCV', 'Computer Vision'],
    category: 'personal',
    link: 'https://github.com/PartishThero/Driver-Drowsiness',
  },
  {
    id: 2,
    title: 'The Archivist',
    desc: 'Aesthetic personal knowledge management and digital workspace featuring custom subject archives, modular clause tracking, active-recall review, and an AI study assistant.',
    tech: ['React', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
    category: 'personal',
    link: 'https://github.com/PartishThero/The-Archivist',
  },
  {
    id: 3,
    title: 'ARES — Mars Mission Planner',
    desc: 'Planetary science and EVA decision-support platform built for the NASA Space Apps Challenge 2026. Integrates NASA WMTS satellite maps with an 8-directional A* routing engine to navigate Gale Crater.',
    tech: ['React', 'Leaflet', 'A* Algorithm', 'NASA APIs'],
    category: 'professional',
    link: 'https://github.com/PartishThero/ares',
  },
  {
    id: 4,
    title: 'Laya',
    desc: 'Tactile spatial music exploration platform presenting vinyl records on an infinite 2D canvas with pan-and-zoom controls, crate organization, and range-based HTTP 206 audio streaming.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'personal',
    link: 'https://github.com/PartishThero/laya',
  },
  {
    id: 5,
    title: 'Orators Society',
    desc: 'Interactive web experience for The Orators Society featuring fluid kinetic typography, WebGL/OGL shaders, Lenis smooth scrolling, and Supabase-backed event archives.',
    tech: ['React', 'WebGL', 'GSAP', 'Lenis', 'Supabase'],
    category: 'professional',
    link: 'https://github.com/PartishThero/orators-society',
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
