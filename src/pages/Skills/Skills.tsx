import styles from "./Skills.module.css"
import {
FaHtml5,
FaCss3Alt,
FaJs,
FaReact
} from "react-icons/fa"
import { SiTypescript } from "react-icons/si"

function Skills(){

const skills = [
{icon:<FaHtml5/>, name:"HTML", level:95},
{icon:<FaCss3Alt/>, name:"CSS", level:90},
{icon:<FaJs/>, name:"JavaScript", level:80},
{icon:<FaReact/>, name:"React", level:75},
{icon:<SiTypescript/>, name:"TypeScript", level:70}
]

return(

<section className={styles.skills}>

<h1 data-aos="fade-up">My Skills</h1>

<div className={styles.grid}>

{skills.map((skill,index)=>{

const degree = (skill.level/100)*360

return(

<div
key={index}
className={styles.card}
data-aos="zoom-in"
>

<div
className={styles.circle}
style={{
background:`conic-gradient(#3b82f6 ${degree}deg,#e5e7eb ${degree}deg)`
}}
>

<div className={styles.inner}>

<div className={styles.icon}>
{skill.icon}
</div>

<span>{skill.level}%</span>

</div>

</div>

<h3>{skill.name}</h3>

</div>

)

})}

</div>

</section>

)

}

export default Skills