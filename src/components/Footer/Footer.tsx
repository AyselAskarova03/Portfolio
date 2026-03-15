import styles from "./Footer.module.css"
import { FaGithub, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa"

function Footer(){

return(

<footer className={styles.footer}>

<div className={styles.container}>

<div className={styles.grid}>

{/* About */}

<div className={styles.col}>

<h3>Aysel Askarova</h3>

<p>
Frontend Developer passionate about building
modern and responsive web applications using
React and TypeScript.
</p>

</div>

{/* Links */}

<div className={styles.col}>

<h3>Navigation</h3>

<ul>

<li><a href="/">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/skills">Skills</a></li>
<li><a href="/projects">Projects</a></li>

</ul>

</div>

{/* Contact */}

<div className={styles.col}>

<h3>Contact</h3>

<p>Email: aysel@example.com</p>

<p>Location: Baku, Azerbaijan</p>

<div className={styles.icons}>

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

</div>

<hr className={styles.line}/>

<p className={styles.copy}>
© 2026 Aysel Askarova — All Rights Reserved
</p>

</div>

</footer>

)

}

export default Footer