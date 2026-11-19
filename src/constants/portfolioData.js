import aboutIcon from '../assets/question-pixel.webp';
import skillsIcon from '../assets/crazy-pixel.webp';
import projectsIcon from '../assets/heart-pixel.webp';
import contactIcon from '../assets/naughty-pixel.webp';

export const phrases = [
  "Building computer vision & web systems.",
  "1st Prize · School Science Fair for Driver Drowsiness Detector.",
  "Martian EVA mission platform for NASA Space Apps 2026.",
  "Crafting quiet interfaces and pixel-art experiments.",
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
    year: 'Science Fair',
    highlight: 'Awarded First Prize for real-time safety vision',
    desc: 'Real-time computer vision system that monitors driver facial landmarks and eye aspect ratios via webcam, sounding an alert upon fatigue detection.',
    tech: ['Python', 'OpenCV', 'Computer Vision'],
    category: 'personal',
    featured: true,
    link: 'https://github.com/PartishThero/Driver-Drowsiness',
  },
  {
    id: 2,
    title: 'ARES — Mars Mission Planner',
    year: 'NASA Space Apps 2026',
    highlight: 'Planetary science & 8-directional A* routing platform',
    desc: 'Planetary science and EVA decision-support platform built for the NASA Space Apps Challenge 2026. Integrates NASA WMTS satellite maps with an 8-directional A* routing engine to navigate Gale Crater.',
    tech: ['React', 'Leaflet', 'A* Algorithm', 'NASA APIs'],
    category: 'professional',
    featured: true,
    link: 'https://github.com/PartishThero/ares',
  },
  {
    id: 3,
    title: 'The Archivist',
    year: 'Study System',
    highlight: 'Aesthetic digital study workplace & clause tracker',
    desc: 'Personal knowledge management and digital workspace featuring custom subject archives, modular clause tracking, active-recall review, and an AI study assistant.',
    tech: ['React', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
    category: 'personal',
    featured: false,
    link: 'https://github.com/PartishThero/The-Archivist',
  },
  {
    id: 4,
    title: 'Laya',
    year: 'Spatial Audio',
    highlight: 'Infinite spatial canvas with range-based audio streaming',
    desc: 'Tactile spatial music exploration platform presenting vinyl records on an infinite 2D canvas with pan-and-zoom controls, crate organization, and range-based HTTP 206 audio streaming.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'personal',
    featured: false,
    link: 'https://github.com/PartishThero/laya',
  },
  {
    id: 5,
    title: 'Orators Society',
    year: 'Web Platform',
    highlight: 'Kinetic typography with WebGL & Lenis smooth scrolling',
    desc: 'Interactive web experience for The Orators Society featuring fluid kinetic typography, WebGL/OGL shaders, Lenis smooth scrolling, and Supabase-backed event archives.',
    tech: ['React', 'WebGL', 'GSAP', 'Lenis', 'Supabase'],
    category: 'professional',
    featured: false,
    link: 'https://github.com/PartishThero/orators-society',
  },
];

export const emptyProjectState = {
  title: 'Caught me :3',
  message: 'Come back soon - Nothing here. YET.',
};

export const filters = ['All', 'Professional', 'Personal'];

export const skills = {
  'Interface & Frontend': [
    { name: 'React' },
    { name: 'Tailwind CSS' },
    { name: 'Framer Motion' },
    { name: 'HTML5 / CSS3' },
  ],
  'Systems & Backend': [
    { name: 'Node.js' },
    { name: 'Express' },
    { name: 'MongoDB' },
    { name: 'Supabase' },
    { name: 'REST APIs' },
  ],
  Languages: [
    { name: 'Python' },
    { name: 'JavaScript' },
    { name: 'Java' },
  ],
  'Vision & Graphics': [
    { name: 'OpenCV' },
    { name: 'Computer Vision' },
    { name: 'WebGL / Shaders' },
    { name: 'Leaflet' },
  ],
  'Tools & Workflow': [
    { name: 'Git' },
    { name: 'Vite' },
    { name: 'Figma' },
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
