import { useEffect, useState } from 'react'
import myPhoto from './assets/12302040701116_MohammadZaidMohammadSiddikPathan.jpg.jpeg'
import smartCityImg from './assets/projects/smart-city.png'
import swrasImg from './assets/projects/swras.jpg'
import serviceMgmtImg from './assets/projects/service-management.png'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowUp,
  Code2,
  Database,
  Download,
  GitBranch,
  GraduationCap,
  Link,
  Mail,
  Menu,
  Moon,
  Server,
  Sparkles,
  Sun,
  Terminal,
  X,
} from 'lucide-react'
import './App.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

const roles = ['MERN Stack Developer', 'Full Stack Developer', 'Computer Engineering Student']

const skillGroups = [
  { title: 'Frontend', icon: Code2, tone: 'tone-blue', skills: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { title: 'Backend', icon: Server, tone: 'tone-emerald', skills: ['Node.js', 'Express.js'] },
  { title: 'Database', icon: Database, tone: 'tone-violet', skills: ['MongoDB', 'SQL'] },
  { title: 'Programming', icon: Terminal, tone: 'tone-amber', skills: ['Python', 'JavaScript'] },
  { title: 'Tools', icon: GitBranch, tone: 'tone-slate', skills: ['Git', 'GitHub', 'REST APIs','Postman'] },
]

const projects = [
  {
    title: 'Smart City Management System',
    description:
      'A civic dashboard concept for managing services, complaints, resources, and city operations through a clean web interface.',
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    theme: 'from-neutral-700 via-neutral-800 to-black',
    image: smartCityImg,
    github: 'https://github.com/zaidpathann/smart_city_management_system',
  },
  {
    title: 'Smart Workforce Resource Allocation System',
    description:
      'A planning tool that helps allocate teams, track availability, and improve resource utilization for workforce operations.',
    tech: ['React', 'Express.js', 'SQL', 'JavaScript'],
    theme: 'from-neutral-700 via-stone-800 to-black',
    image: swrasImg,
  },
  {
    title: 'Service Management System',
    description:
      'A responsive system for service requests, status tracking, customer records, and admin-side workflow management.',
    tech: ['React', 'Node.js', 'MongoDB', 'GitHub'],
    theme: 'from-zinc-700 via-neutral-800 to-black',
    image: serviceMgmtImg,
    github: 'https://github.com/zaidpathann/service_management_system.git',
  },
  {
    title: 'AI Chatbot',
    description:
      'A modern chatbot UI focused on conversational flows, prompt handling, message states, and fast user interaction.',
    tech: ['React', 'JavaScript', 'REST APIs', 'CSS'],
    theme: 'from-stone-700 via-neutral-800 to-black',
  },
]

const socials = [
  { label: 'Email', href: 'mailto:zaidpathan622006@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zaidpathan6', icon: Link },
  { label: 'GitHub', href: 'https://github.com/zaidpathann', icon: GitBranch },
  { label: 'Instagram', href: 'https://www.instagram.com/zaid_62x?igsh=cWF0bWs2MDdhamJv', icon: Sparkles },
]

function useTyping(words) {
  const [wordIndex, setWordIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const doneTyping = !deleting && display === current
    const doneDeleting = deleting && display === ''
    const delay = doneTyping ? 1300 : deleting ? 40 : 85

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true)
        return
      }

      if (doneDeleting) {
        setDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
        return
      }

      setDisplay(current.slice(0, display.length + (deleting ? -1 : 1)))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [deleting, display, wordIndex, words])

  return display
}

function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-90px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-10 max-w-2xl">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
        </div>
        {children}
      </motion.div>
    </section>
  )
}

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white">
          <span className="logo-mark">
            <Code2 size={18} />
          </span>
          Portfolio
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle dark and light theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="primary-pill">
            Connect
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle dark and light theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-button mobile-menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="mobile-link" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const typed = useTyping(roles)

  return (
    <section id="home" className="hero-shell">
      <div className="hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="availability-badge">
            <Sparkles size={16} />
            Available for Work
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Hi!<br />
            I&apos;m <span className="gradient-text">Zaid</span>
          </h1>

          <div className="mt-5 min-h-10 text-2xl font-semibold text-slate-200 md:text-3xl">
            <span>{typed}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I create clean web experiences with modern technologies, fast interfaces, and maintainable full-stack code.
          </p>

          <p className="role-line">Python | MERN Stack | Backend</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="primary-button">
              View My Work
            </a>
            <a href="/Resume.pdf" className="secondary-button" target="_blank" rel="noreferrer">
              View My Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="hero-visual"
        >
          <div className="profile-card">
            <div className="profile-avatar">
              <img
              src={myPhoto}
              alt="Zaid Pathan"
              className="h-full w-full object-cover h-full w-full object-cover hover:scale-105 transition duration-500"
               />
            </div>
            <p className="profile-name">Final Year Computer Engineering Student</p>
            <p className="profile-copy">Focused on React, Node.js, APIs, databases, and production-ready project work.</p>
          </div>
          <div className="stats-strip">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  const items = [
    'Building responsive and scalable web applications using modern technologies.',
  'Focused on clean UI, backend systems, APIs, and performance-oriented development.',
  'Continuously improving through projects, learning, and practical development experience.',
  ]

  return (
    <Section id="about" eyebrow="About" title="Focused on modern web development.">
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        I’m a final year Computer Engineering student passionate about full-stack web development and modern web technologies. I enjoy building responsive and user-focused applications while continuously improving my skills through projects and practical development experience.
      </p>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <motion.div key={item} whileHover={{ y: -6 }} className="surface-card">
            <p className="text-slate-300">{item}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technology stack I work with.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map(({ title, icon: Icon, tone, skills }) => (
          <motion.article key={title} whileHover={{ y: -7 }} className={`skill-card ${tone}`}>
            <div className="skill-icon">
              <Icon size={21} />
            </div>
            <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -9, rotateX: 1.5, rotateY: -1.5 }}
      className="project-card"
    >
      <div className="project-image overflow-hidden rounded-2xl">
  <img
    src={project.image}
    alt={project.title}
    className="h-full w-full object-cover transition duration-500 hover:scale-105"
  />
</div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 min-h-24 leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
            <GitBranch size={17} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="My Projects">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background.">
      <div className="timeline-card hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-500/40 hover:shadow-indigo-500/20 transition-all duration-300">
        <div className="timeline-marker">
          <GraduationCap size={22} />
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-200">2023 - 2027</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Bachelor of Engineering - Computer Engineering </h3>
          <p className="mt-2 text-slate-300">Madhuben And Bhanubhai Patel Institute Of Technology</p>
          <p className="mt-4 text-slate-400">CGPA: 7.97 / 10.00 (After 5th Sem)</p>
        </div>
      </div><br />
      <div className="timeline-card hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-500/40 hover:shadow-indigo-500/20 transition-all duration-300">
        <div className="timeline-marker">
          <GraduationCap size={22} />
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-200">2023</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">12th - Gujarat Board </h3>
          <p className="mt-2 text-slate-300">M.Y High School</p>
          <p className="mt-4 text-slate-400">53.69%</p>
        </div>
      </div><br />
      <div className="timeline-card hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-500/40 hover:shadow-indigo-500/20 transition-all duration-300">
        <div className="timeline-marker">
          <GraduationCap size={22} />
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-200">2021</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">10th - Gujarat Board </h3>
          <p className="mt-2 text-slate-300">M.Y High School</p>
          <p className="mt-4 text-slate-400">64.83%</p>
        </div>
      </div>
    </Section>
  )
}

function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Professional Resume.">
      <div className="resume-panel">
        <div>
          <p className="text-slate-300">
            A concise overview of my projects, technical skills, and development experience.
          </p>
          <a href="/Resume.pdf" download className="primary-button mt-7 inline-flex">
            <Download size={18} />
            Download Resume
          </a>
        </div>
        <div className="resume-preview">
          <div className="resume-accent" />
          <div className="mt-7 space-y-3">
            <span />
            <span />
            <span className="short" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's connect.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-card">
          <h3 className="text-2xl font-semibold text-white">Contact details</h3>
          <div className="mt-6 grid gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="contact-link" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <Icon size={19} />
                {label}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form">
          <div className="grid gap-4 md:grid-cols-2">
            <input type="text" placeholder="Your name" aria-label="Your name" />
            <input type="email" placeholder="Email address" aria-label="Email address" />
          </div>
          <input type="text" placeholder="Subject" aria-label="Subject" />
          <textarea rows="5" placeholder="Message" aria-label="Message" />
          <button type="button" className="primary-button w-fit">
            Send Message
          </button>
        </form>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Zaid Pathan. Built with React & Tailwind CSS.</p>
        <div className="flex flex-wrap gap-4">
          {navLinks.slice(0, 4).map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-200">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <a href="#home" className="back-top" aria-label="Back to top">
      <ArrowUp size={19} />
    </a>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.25 })
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar theme={theme} onToggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
