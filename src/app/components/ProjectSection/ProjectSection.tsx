import { connectDb } from "@/lib/mongodb";
import styles from "./ProjectSection.module.css";
import Image from "next/image";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Project } from "@/models/Project"; // Assuming you have a Project model

interface ProjectInterface {
  title: string;
  description: string;
  thumbnail: string;
  technology?: string[];
  github?: string;
  livelink?: string;
}

export default async function ProjectSection() {
  await connectDb();

  const projects = await Project.find().lean<ProjectInterface[]>();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Personal Experiments</h2>
      <div className={styles.projectsWrapper}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectContainer}>
            <div className={styles.left}>
              <Image
                src={project.thumbnail}
                alt={project.title}
                layout="fill"
                objectFit="contain"
                
                className={styles.projectImage}
              />
            </div>
            <div className={styles.right}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.projectTechs}>
                {project.technology && project.technology.map((tech, idx) => (
                  <span key={idx} className={styles.projectTech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <GitHubIcon />
                    <span>GitHub</span>
                  </a>
                )}
                {project.livelink && (
                  <a
                    href={project.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <InsertLinkIcon />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
