"use client";

import styles from "./ProjectSection.module.css";
import { useGetProjects } from "@/lib/hooks/useGetProjects";
import Image from "next/image";
import { useEffect } from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectSection() {
  const { projects, err, getProjects } = useGetProjects();

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Personal Experiments</h2>
      <div className={styles.projectsWrapper}>
        {projects?.map((project, index) => (
          <div key={index} className={styles.projectContainer}>
            <div className={styles.left}>
              <Image
                src={project.thumbnail}
                alt={project.title}
                layout="responsive"
                width={800}
                height={600}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.right}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.projectTechs}>
                {project.technology?.map((tech, idx) => (
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
