import { useEffect, useState } from "react"
import type { Project } from "../../types/project"
import { getProjects, saveProjects } from "../../utils/storage"
import styles from "./Admin.module.css"

interface Message{
name:string
email:string
message:string
date:string
}

function Admin(){

const [projects,setProjects] = useState<Project[]>([])
const [messages,setMessages] = useState<Message[]>([])
const [editId,setEditId] = useState<number | null>(null)

const [form,setForm] = useState({
title:"",
description:"",
technologies:"",
github:"",
demo:"",
image:""
})

useEffect(()=>{

setProjects(getProjects())

const data = localStorage.getItem("messages")

if(data){
setMessages(JSON.parse(data))
}

function handleStorage(){

const updated = localStorage.getItem("messages")

if(updated){
setMessages(JSON.parse(updated))
}

}

window.addEventListener("storage",handleStorage)

return()=>window.removeEventListener("storage",handleStorage)

},[])

function handleChange(e:React.ChangeEvent<HTMLInputElement>){

setForm({
...form,
[e.target.name]: e.target.value
})

}

function addProject(e:React.FormEvent){

e.preventDefault()

if(!form.title || !form.description){
alert("Fill required fields")
return
}

if(editId){

const updated = projects.map(p =>
p.id === editId ? {...p,...form} : p
)

setProjects(updated)
saveProjects(updated)
setEditId(null)

}else{

const newProject:Project = {
id:Date.now(),
...form
}

const updated = [...projects,newProject]

setProjects(updated)
saveProjects(updated)

}

setForm({
title:"",
description:"",
technologies:"",
github:"",
demo:"",
image:""
})

}

function deleteProject(id:number){

const updated = projects.filter(p => p.id !== id)

setProjects(updated)
saveProjects(updated)

}

function editProject(project:Project){

setForm({
title:project.title,
description:project.description,
technologies:project.technologies,
github:project.github,
demo:project.demo,
image:project.image
})

setEditId(project.id)

}

function deleteMessage(index:number){

const updated = messages.filter((_,i)=> i !== index)

setMessages(updated)

localStorage.setItem("messages", JSON.stringify(updated))

}

return(

<div className={styles.admin}>

<h1 className={styles.title}>Admin Panel</h1>

<form onSubmit={addProject} className={styles.form}>

<input name="title" placeholder="Project title" value={form.title} onChange={handleChange}/>
<input name="description" placeholder="Description" value={form.description} onChange={handleChange}/>
<input name="technologies" placeholder="Technologies" value={form.technologies} onChange={handleChange}/>
<input name="github" placeholder="GitHub link" value={form.github} onChange={handleChange}/>
<input name="demo" placeholder="Live demo" value={form.demo} onChange={handleChange}/>
<input name="image" placeholder="Image URL" value={form.image} onChange={handleChange}/>

<button type="submit">
{editId ? "Update Project" : "Add Project"}
</button>

</form>

<h2 className={styles.subtitle}>Projects</h2>

<div className={styles.list}>

{projects.map(project =>(

<div key={project.id} className={styles.card}>

<h3>{project.title}</h3>

<p>{project.description}</p>

<span>{project.technologies}</span>

<div className={styles.actions}>

<button onClick={()=>editProject(project)}>
Edit
</button>

<button onClick={()=>deleteProject(project.id)}>
Delete
</button>

</div>

</div>

))}

</div>

<h2 className={styles.subtitle}>Contact Messages</h2>

{messages.length === 0 && <p>No messages yet</p>}

<div className={styles.list}>

{messages.map((msg,index)=>(

<div key={index} className={styles.messageCard}>

<div className={styles.messageHeader}>
<h3>{msg.name}</h3>
<span>{msg.date}</span>
</div>

<p className={styles.email}>{msg.email}</p>

<p className={styles.message}>{msg.message}</p>

<button onClick={()=>deleteMessage(index)}>
Delete
</button>

</div>

))}

</div>

</div>

)

}

export default Admin