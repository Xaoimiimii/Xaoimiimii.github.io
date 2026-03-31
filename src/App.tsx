import React, { useEffect, useRef, useState } from 'react';
import { Bird, CheckCircle2, Bug, Wrench, Code2, Database, Mail, Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './App.module.css';
import cloudHero from './assets/cloudy_hero.mp4';
import psmusic1 from './assets/psmusic_1.png';
import psmusic2 from './assets/psmusic_2.png';
import foodly1 from './assets/foodly_1.png';
import foodly2 from './assets/foodly_2.png';
import reco1 from './assets/reco_1.png';
import reco2 from './assets/reco_2.png';
import airbnb1 from './assets/airbnb_1.png';
import airbnb2 from './assets/airbnb_2.png';
import bugs from './assets/bugs.png';
import transporting from './assets/transporting.png';
import slice from './assets/slice.png';
import loupe from './assets/loupe.png';
import automation from './assets/automation.png';
import boundary from './assets/boundary.png';
import workflow from './assets/workflow.png';
import process from './assets/process.png';


const projectFoodlyImages = [foodly1, foodly2];
const projectRecoImages = [reco1, reco2];
const projectMusicImages = [psmusic1, psmusic2];
const projectAirbnbImages = [airbnb1, airbnb2];

export default function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [currentIndices, setCurrentIndices] = useState({
    foodly: 0,
    reco: 0,
    music: 0,
    airbnb: 0,
  });

  const prevImage = (project: keyof typeof currentIndices, images: string[]) => {
    setCurrentIndices((prev) => ({
      ...prev,
      [project]: prev[project] === 0 ? images.length - 1 : prev[project] - 1,
    }));
  };

  const nextImage = (project: keyof typeof currentIndices, images: string[]) => {
    setCurrentIndices((prev) => ({
      ...prev,
      [project]: prev[project] === images.length - 1 ? 0 : prev[project] + 1,
    }));
  };

  useEffect(() => {
    const updateSticky = () => {
      if (!heroRef.current) {
        return;
      }

      const navHeight = navRef.current?.offsetHeight ?? 0;
      const stickyOffset = 240;
      const threshold = heroRef.current.offsetHeight - navHeight - stickyOffset;
      setIsSticky(window.scrollY >= threshold);
    };

    updateSticky();
    window.addEventListener('scroll', updateSticky, { passive: true });
    window.addEventListener('resize', updateSticky);

    return () => {
      window.removeEventListener('scroll', updateSticky);
      window.removeEventListener('resize', updateSticky);
    };
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      layout: 'two',
      icon: Code2,
      items: [
        {
          label: 'C++',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
        },
        {
          label: 'JavaScript',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
          label: 'TypeScript',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
          label: 'Python',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        }
      ]
    },
    {
      title: 'Libraries & Frameworks',
      layout: 'two',
      icon: Code2,
      items: [
        {
          label: 'React',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          label: 'Next.js',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        }
      ]
    },
    {
      title: 'Tools & Platforms',
      layout: 'three',
      icon: Wrench,
      items: [
        {
          label: 'Playwright',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg'
        },
        {
          label: 'Postman',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
        },
        {
          label: 'JMeter',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg'
        },
        {
          label: 'Jira',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
        },
        {
          label: 'Git',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        {
          label: 'VS Code',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
        }
      ]
    },
    {
      title: 'Test Analysis & Design',
      layout: 'two',
      icon: CheckCircle2,
      items: [
        {
          label: 'Equivalence Partitioning',
          iconUrl: slice
        },
        {
          label: 'Boundary Value Analysis',
          iconUrl: boundary
        },
        {
          label: 'State Transition Testing',
          iconUrl: process
        },
        {
          label: 'User Scenario Testing',
          iconUrl: workflow
        }
      ]
    },
    {
      title: 'Testing Approaches',
      layout: 'two',
      icon: Bug,
      items: [
        {
          label: 'Data-driven Testing',
          iconUrl: automation
        },
        {
          label: 'Exploratory Testing',
          iconUrl: loupe
        }
      ]
    },
    {
      title: 'Databases',
      layout: 'two',
      icon: Database,
      items: [
        {
          label: 'PostgreSQL',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        {
          label: 'MySQL',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        {
          label: 'MongoDB',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },
        {
          label: 'Redis',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
        }
      ]
    }
  ];

  return (
    <div className={styles.page}>


      {/* Hero */}
      <section id="home" className={styles.hero} ref={heroRef}>
        <video
          className={styles.heroMedia}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={cloudHero} type="video/mp4" />
        </video>
        <nav
          className={`${styles.nav} ${isSticky ? styles.navSticky : ''}`}
          ref={navRef}
        >
          <div className={styles.logo}> <Bird size={24} /> Khanh Nhu</div>
          <div className={styles.navLinks}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#skills" className={styles.navLink}>Skills</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </div>
        </nav>
        <div className={styles.heroOverlay} />
        <div className={styles.heroCard}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Hi, I am Khanh Nhu</h1>
            <p className={styles.heroSubtitle}>Frontend Developer & Software Tester</p>
            <p className={styles.heroDescription}>
              I specialize in Software Testing and Frontend Development, leveraging my programming and problem-solving skills to deliver high-quality, detail-oriented software that prioritizes seamless user experiences.
            </p>
            <a href="#contact" className={styles.ctaButton}>
              Get In Touch <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.gradientOverlay} />
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                I am an IT student preparing for graduation, with a strong interest in software testing, quality assurance, and frontend development. I enjoy logical problem-solving, test case design, and ensuring software reliability, while also building user-friendly interfaces and responsive web applications through structured development practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={styles.skills}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsSection}>
            <div className={styles.skillsGrid}>
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div className={styles.skillCategory} key={category.title}>
                    <h4 className={styles.skillCategoryTitle}>
                      <Icon size={18} /> {category.title}
                    </h4>
                    <div
                      className={`${styles.skillItems} ${styles[`skillItems${category.layout}`]}`}
                    >
                      {category.items.map((item) => (
                        <div className={styles.skillItem} key={item.label}>
                          {item.iconUrl ? (
                            <img
                              src={item.iconUrl}
                              alt={item.label}
                              className={styles.skillIcon}
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <span className={styles.skillBadge}>{item.iconUrl}</span>
                          )}
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
          
          {/* Project 1 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagesRow}>
              <button
                className={`${styles.chevronBtn} ${styles.chevronLeft}`}
                onClick={() => prevImage("foodly", projectFoodlyImages)}
              >
                <ChevronLeft />
              </button>

              <img
                className={styles.projectImage}
                src={projectFoodlyImages[currentIndices.foodly]}
              />

              <button
                className={`${styles.chevronBtn} ${styles.chevronRight}`}
                onClick={() => nextImage("foodly", projectFoodlyImages)}
              >
                <ChevronRight />
              </button>
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Food Delivery System</h3>
              <p className={styles.projectDesc}>
                A food delivery system using a multi-database architecture.
              </p>
              <ul className={styles.projectBullets}>
                <li>Developed responsive components using React and styled with CSS Modules</li>
                <li>Used React Query for efficient data fetching and caching</li>
                <li>Designed and executed test cases using Equivalence Partitioning for core flows: cart, ordering</li>
                <li>Applied data-driven testing with various input combinations (valid, invalid, boundary cases)</li>
                <li>Applied State Transition Testing for order-delivery states (placed to canceled)</li>
                <li>Identified and reported bugs related to order processing, data mismatch, and UI issues</li>
                <li>Implemented multi-database architecture with PostgreSQL for relational and consistent data, MongoDB for flexible document storage, and Redis for caching in the backend</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techTag} style={{ backgroundColor: '#8884d8' }}>React</span>
                <span className={styles.techTag} style={{ backgroundColor: '#82ca9d' }}>PostgreSQL</span>
                <span className={styles.techTag} style={{ backgroundColor: '#ffc658' }}>MongoDB</span>
                <span className={styles.techTag} style={{ backgroundColor: '#8dd1e1' }}>Redis</span>
                <span className={styles.techTag} style={{ backgroundColor: '#ff7c7c' }}>Equivalence Partitioning</span>
                <span className={styles.techTag} style={{ backgroundColor: '#ffc658' }}>Data-driven Testing</span>
                <span className={styles.techTag} style={{ backgroundColor: '#a4de6c' }}>State Transition Testing</span>
              </div>
              <a href="https://github.com/ponponl/MDM-food-delivery" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <Github size={18} /> View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagesRow}>
              <button
                className={`${styles.chevronBtn} ${styles.chevronLeft}`}
                onClick={() => prevImage("music", projectMusicImages)}
              >
                <ChevronLeft />
              </button>

              <img
                className={styles.projectImage}
                src={projectMusicImages[currentIndices.music]}
              />

              <button
                className={`${styles.chevronBtn} ${styles.chevronRight}`}
                onClick={() => nextImage("music", projectMusicImages)}
              >
                <ChevronRight />
              </button>
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Music Streaming with Recommendation</h3>
              <p className={styles.projectDesc}>
                A music streaming system with a recommendation module based on user interaction.
              </p>
              <ul className={styles.projectBullets}>
                <li>Implemented frontend components using React and styled with CSS Modules</li>
                <li>Designed and executed test cases using Equivalence Partitioning in Authentication</li>
                <li>Applied data-driven testing with multiple user datasets</li>
                <li>Conducted exploratory testing to identify edge cases in streaming functionality</li>
                <li>Detected and reported bugs related to data inconsistency and UI behavior</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techTag} style={{ backgroundColor: '#8884d8' }}>React</span>
                <span className={styles.techTag} style={{ backgroundColor: '#82ca9d' }}>PostgreSQL</span>
                <span className={styles.techTag} style={{ backgroundColor: '#ffc658' }}>Data-driven Testing</span>
                <span className={styles.techTag} style={{ backgroundColor: '#ff7c7c' }}>Equivalence Partitioning</span>
                <span className={styles.techTag} style={{ backgroundColor: '#d084d0' }}>Exploratory Testing</span>
              </div>
              <a href="https://github.com/FlyingCat04/PSMusic" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <Github size={18} /> View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagesRow}>
              <button
                className={`${styles.chevronBtn} ${styles.chevronLeft}`}
                onClick={() => prevImage("reco", projectRecoImages)}
              >
                <ChevronLeft />
              </button>

              <img
                className={styles.projectImage}
                src={projectRecoImages[currentIndices.reco]}
              />

              <button
                className={`${styles.chevronBtn} ${styles.chevronRight}`}
                onClick={() => nextImage("reco", projectRecoImages)}
              >
                <ChevronRight />
              </button>
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Pluggable Recommendation System</h3>
              <p className={styles.projectDesc}>
                A configurable and pluggable recommendation tracking system.
              </p>
              <ul className={styles.projectBullets}>
                <li>Implemented frontend components using React and styled with CSS Modules</li>
                <li>Designed and executed test cases using Equivalence Partitioning in configuration flows</li>
                <li>Applied data-driven testing with multiple user datasets</li>
                <li>Detected and reported bugs related to data inconsistency, UI behavior</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techTag} style={{ backgroundColor: '#8884d8' }}>React</span>
                <span className={styles.techTag} style={{ backgroundColor: '#82ca9d' }}>PostgreSQL</span>
                <span className={styles.techTag} style={{ backgroundColor: '#ff7c7c' }}>Equivalence Partitioning</span>
                <span className={styles.techTag} style={{ backgroundColor: '#ffc658' }}>Data-driven Testing</span>
              </div>
              <a href="https://github.com/Xaoimiimii/recsys-tracker-web-config" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <Github size={18} /> View Project
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagesRow}>
              <button
                className={`${styles.chevronBtn} ${styles.chevronLeft}`}
                onClick={() => prevImage("airbnb", projectAirbnbImages)}
              >
                <ChevronLeft />
              </button>

              <img
                className={styles.projectImage}
                src={projectAirbnbImages[currentIndices.airbnb]}
              />

              <button
                className={`${styles.chevronBtn} ${styles.chevronRight}`}
                onClick={() => nextImage("airbnb", projectAirbnbImages)}
              >
                <ChevronRight />
              </button>
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Airbnb Clone - Room Booking</h3>
              <p className={styles.projectDesc}>
                A web application simulating Airbnb with a room auction system.
              </p>
              <ul className={styles.projectBullets}>
                <li>Implemented frontend components using React and styled with CSS Modules</li>
                <li>Designed and executed test cases using Equivalence Partitioning for booking and auction flows with multiple user roles</li>
                <li>Applied State Transition Testing to validate auction lifecycle and booking states</li>
                <li>Conducted exploratory testing to identify edge cases in bidding timing and concurrent actions</li>
                <li>Detected and reported bugs related to UI inconsistencies, logic errors, and data synchronization</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techTag} style={{ backgroundColor: '#8884d8' }}>React</span>
                <span className={styles.techTag} style={{ backgroundColor: '#82ca9d' }}>PostgreSQL</span>
                <span className={styles.techTag} style={{ backgroundColor: '#ffc658' }}>MongoDB</span>
                <span className={styles.techTag} style={{ backgroundColor: '#ff7c7c' }}>Equivalence Partitioning</span>
                <span className={styles.techTag} style={{ backgroundColor: '#a4de6c' }}>State Transition Testing</span>
                <span className={styles.techTag} style={{ backgroundColor: '#d084d0' }}>Exploratory Testing</span>
              </div>
              <a href="https://github.com/04nhatminh/rooms-auction-website" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <Github size={18} /> View Project
              </a>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Let's Work Together</h2>
          <p className={styles.contactText}>
            I am currently open to new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
          </p>
          <a href="mailto:tkhanhnhu04@gmail.com" className={styles.contactLink}>
            <Mail size={20} /> tkhanhnhu04@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>
            &copy; {new Date().getFullYear()} Khanh Nhu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
