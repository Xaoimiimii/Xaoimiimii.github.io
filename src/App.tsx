import React, { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import {
  CheckCircle2,
  Bug,
  Wrench,
  Code2,
  Database,
  Mail,
  Github,
  ArrowRight
} from 'lucide-react';
import cloudHero from './assets/cloudy_hero.mp4';
import psmusic1 from './assets/psmusic_1.png';
import psmusic2 from './assets/psmusic_2.png';
import foodly1 from './assets/foodly_1.png';
import foodly2 from './assets/foodly_2.png';
import reco1 from './assets/reco_1.png';
import reco2 from './assets/reco_2.png';
import airbnb1 from './assets/airbnb_1.png';
import airbnb2 from './assets/airbnb_2.png';

export default function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

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
      title: 'Software Testing',
      layout: 'two',
      icon: CheckCircle2,
      items: [
        {
          label: 'Test Case Design',
          iconName: 'TC'
        },
        {
          label: 'Test Checklist Design',
          iconName: 'CL'
        },
        {
          label: 'Data-driven Testing',
          iconName: 'DD'
        },
        {
          label: 'Exploratory Testing',
          iconName: 'EX'
        },
        {
          label: 'Equivalence Partitioning',
          iconName: 'EP'
        },
        {
          label: 'Boundary Value Analysis',
          iconName: 'BV'
        },
        {
          label: 'State Transition',
          iconName: 'ST'
        },
        {
          label: 'Decision Table',
          iconName: 'DT'
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
          <div className={styles.logo}>Khanh Nhu</div>
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
                            <span className={styles.skillBadge}>{item.iconName}</span>
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
              <img 
                src={foodly1}
                alt="Food Delivery System 1" 
                className={styles.projectImage}
              />
              <img 
                src={foodly2}
                alt="Food Delivery System 2" 
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Food Delivery System</h3>
              <p className={styles.projectDesc}>
                A food delivery system using a multi-database architecture.
              </p>
              <ul className={styles.projectBullets}>
                <li>Designed test cases for core flows: cart, ordering, payment</li>
                <li>Applied State Transition Testing for order states (placed to canceled)</li>
                <li>Performed API testing and validated data consistency across multiple databases</li>
                <li>Applied data-driven testing with various input combinations</li>
                <li>Identified and reported bugs related to order processing, data mismatch, and UI issues</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techTag}>PostgreSQL</span>
                <span className={styles.techTag}>MongoDB</span>
                <span className={styles.techTag}>Redis</span>
                <span className={styles.techTag}>Neo4j</span>
              </div>
              <a href="https://github.com/ponponl/MDM-food-delivery" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <Github size={18} /> View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagesRow}>
              <img 
                src={psmusic1}
                alt="Music Streaming 1" 
                className={styles.projectImage}
              />
              <img 
                src={psmusic2}
                alt="Music Streaming 2" 
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Music Streaming with Recommendation</h3>
              <p className={styles.projectDesc}>
                A music streaming system with a recommendation module based on user interaction.
              </p>
              <ul className={styles.projectBullets}>
                <li>Designed and executed test cases using Equivalence Partitioning and State Transition Testing</li>
                <li>Applied data-driven testing with multiple user datasets</li>
                <li>Performed API testing (Postman) to validate recommendation logic and user tracking</li>
                <li>Conducted exploratory testing to identify edge cases in personalized flows</li>
                <li>Detected and reported bugs related to incorrect suggestions, data inconsistency, and UI behavior</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techTag}>API Testing</span>
                <span className={styles.techTag}>Postman</span>
                <span className={styles.techTag}>Exploratory Testing</span>
              </div>
              <a href="https://github.com/FlyingCat04/PSMusic" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <Github size={18} /> View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagesRow}>
              <img 
                src={reco1}
                alt="Pluggable Recommendation System 1" 
                className={styles.projectImage}
              />
              <img 
                src={reco2}
                alt="Pluggable Recommendation System 2" 
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Pluggable Recommendation System</h3>
              <p className={styles.projectDesc}>
                A configurable recommendation tracking system.
              </p>
              <ul className={styles.projectBullets}>
                <li>Designed and executed test cases using Equivalence Partitioning and State Transition Testing</li>
                <li>Applied data-driven testing with multiple user datasets</li>
                <li>Performed API testing (Postman) to validate param and response</li>
                <li>Conducted exploratory testing to identify edge cases in personalized flows</li>
                <li>Detected and reported bugs related to data inconsistency, UI behavior</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techTag}>Postman</span>
                <span className={styles.techTag}>Data-driven Testing</span>
              </div>
              <a href="https://github.com/Xaoimiimii/recsys-tracker-web-config" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <Github size={18} /> View Project
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagesRow}>
              <img 
                src={airbnb1}
                alt="Airbnb Clone 1" 
                className={styles.projectImage}
              />
              <img 
                src={airbnb2}
                alt="Airbnb Clone 2" 
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Airbnb Clone - Room Booking</h3>
              <p className={styles.projectDesc}>
                A web application simulating Airbnb with a room auction system.
              </p>
              <ul className={styles.projectBullets}>
                <li>Designed and executed test cases for booking and auction flows with multiple user roles</li>
                <li>Applied State Transition Testing to validate auction lifecycle and booking states</li>
                <li>Conducted exploratory testing to identify edge cases in bidding timing and concurrent actions</li>
                <li>Performed API testing (Postman) for booking, authentication, and bidding processes</li>
                <li>Detected and reported bugs related to UI inconsistencies, logic errors, and data synchronization</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techTag}>API Testing</span>
                <span className={styles.techTag}>State Transition Testing</span>
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
            I am currently open to new opportunities. Whether you have a question or just want to
            say hi, I will try my best to get back to you!
          </p>
          <a href="mailto:tkhanhnhu04@gmail.com" className={styles.contactLink}>
            <Mail size={20} /> tkhanhnhu04@gmail.com
          </a>
        </div>
      </section>

    </div>
  );
}
