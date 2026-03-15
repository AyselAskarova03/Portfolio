import type { Project } from "../../types/project"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import styles from "./ProjectCard.module.css"

interface Props{
project: Project
}

function ProjectCard({project}:Props){

return(

<div className={styles.card} data-aos="fade-up">

<div className={styles.imageWrapper}>
<img
src={project.image}
alt={project.title}
/>
</div>

<div className={styles.content}>

<h3>{project.title}</h3>

<p>{project.description}</p>

<span className={styles.tech}>{project.technologies}</span>

<div className={styles.links}>

<a href={project.github} target="_blank" rel="noopener noreferrer">
<FaGithub/>
</a>

<a href={project.demo} target="_blank" rel="noopener noreferrer">
<FaExternalLinkAlt/>
</a>

</div>

</div>

</div>

)

}

export default ProjectCard