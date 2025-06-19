import styles from "./page.module.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "This site built with Next.js and TypeScript.",
    link: "#",
  },
  {
    title: "Open Source Contributions",
    description: "Various contributions to React and Node.js projects.",
    link: "#",
  },
  {
    title: "CLI Tools",
    description: "Collection of productivity command line utilities.",
    link: "#",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>John Doe</h1>
        <p>Full-stack Developer</p>
      </header>

      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
          Passionate developer focused on building performant web applications
          with React and Node.js.
        </p>
      </section>

      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectsList}>
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className={styles.project}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        Contact: <a href="mailto:john@example.com">john@example.com</a>
      </footer>
    </div>
  );
}
