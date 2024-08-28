'use client'
import styles from './adminManage.module.css'
import { useEffect } from 'react';
import { deleteProject } from '@/lib/action';
import { useGetProjects } from '@/lib/hooks/useGetProjects';

export default function AdminManageProject() {
  const {projects, err, getProjects}= useGetProjects()
  useEffect(()=> {
    async function temp() {
      await getProjects()
    }
    temp()
  }, [])
  async function deleteHandler(id : string) {
    await deleteProject(id)
    await getProjects()
  }
  return <div className= {styles.container}>
    <div className={styles.heading}>
      Manage Projects
    </div>
    <div className={styles.cardContainer}>
        {projects.map((project) => {
          return (
            <div className={styles.card}>
              <div>
                <div>{project.title}</div>
              </div>
              <div className={styles.buttonGroup}>
                <button onClick={() => deleteHandler(project._id)}>Delete Project</button>
              </div>
            </div>
          )
        })}
    </div>
  </div>;
}
