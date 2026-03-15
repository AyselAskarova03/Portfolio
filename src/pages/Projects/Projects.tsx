import { useEffect, useState } from "react"
import { getProjects } from "../../utils/storage"
import type { Project } from "../../types/project"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import styles from "./Projects.module.css"

function Projects(){

const [projects,setProjects] = useState<Project[]>([])
const [search,setSearch] = useState("")

useEffect(()=>{
setProjects(getProjects())
},[])

const filtered = projects.filter(p =>
p.title.toLowerCase().includes(search.toLowerCase())
)

return(

<section className={styles.projects}>

<h1>My Projects</h1>

<input
className={styles.search}
placeholder="Search project..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<div className={styles.grid}>

{filtered.map(project=>(
<ProjectCard key={project.id} project={project}/>
))}

</div>

</section>

)

}

export default Projects