import styles from "./About.module.css"
import profile from "../../assets/images/profile.jpeg"

function About(){

return(

<section className={styles.about}>

<h1 data-aos="fade-up">About Me</h1>

<div className={styles.container}>

<div className={styles.image} data-aos="zoom-in">

<img src={profile} alt="profile"/>

</div>

<div className={styles.content} data-aos="fade-left">

<p>
Hello! My name is <strong>Aysel Askarova</strong>. I was born on May 8, 2003,
and currently live in Pirallahi district, Baku, Azerbaijan. I am a fourth-year
student at Azerbaijan Technical University.
</p>

<p>
I am passionate about Frontend Development and building modern,
responsive, and user-friendly web applications using technologies
such as HTML, CSS, JavaScript, React, and TypeScript.
</p>

<div className={styles.cards}>

<div className={styles.card} data-aos="fade-up">
<h3>Education</h3>
<p>Azerbaijan Technical University</p>
</div>

<div className={styles.card} data-aos="fade-up" data-aos-delay="200">
<h3>Courses</h3>
<p>CodeAcademy & CodeWord Frontend Program</p>
</div>

<div className={styles.card} data-aos="fade-up" data-aos-delay="400">
<h3>Goal</h3>
<p>Become a professional Frontend Developer and study abroad.</p>
</div>

</div>

</div>

</div>

</section>

)

}

export default About