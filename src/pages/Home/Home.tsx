import styles from "./Home.module.css"
import profile from "../../assets/images/profile.jpeg"
import { FaGithub, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"

function Home(){

return(

<section className={styles.hero}>

<div className={styles.container}>

<div className={styles.left} data-aos="fade-right">

<h1 className={styles.name}>
Aysel Askarova
</h1>

<h2 className={styles.title}>

<TypeAnimation
sequence={[
"Frontend Developer",
2000,
"React Developer",
2000,
"TypeScript Developer",
2000,
]}
speed={50}
repeat={Infinity}
/>

</h2>

<p className={styles.desc}>
I build modern, responsive and user-friendly web
applications using React and TypeScript.
</p>

<div className={styles.buttons}>

<a href="/projects" className={styles.primary}>
View Projects
</a>

<a href="/about" className={styles.secondary}>
About Me
</a>

</div>

<div className={styles.social}>

<a href="https://github.com/AyselAskarova03" target="_blank">
<FaGithub/>
</a>

<a href="https://www.linkedin.com/in/aysel-asgerova-676684321/" target="_blank">
<FaLinkedin/>
</a>

<a href="https://instagram.com/" target="_blank">
<FaInstagram/>
</a>

<a href="tel:+994501234567">
<FaPhone/>
</a>

</div>

</div>

<div className={styles.right} data-aos="zoom-in">

<div className={styles.imageWrapper}>
<img src={profile} alt="profile"/>
</div>

</div>

</div>

</section>

)

}

export default Home