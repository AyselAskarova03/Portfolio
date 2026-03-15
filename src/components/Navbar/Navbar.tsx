import { Link } from "react-router-dom"
import {
FaSearch,
FaEnvelope,
FaUserShield,
FaBars,
FaMoon,
FaSun
} from "react-icons/fa"

import { useState } from "react"
import styles from "./Navbar.module.css"

function Navbar({dark,setDark}:any){

const [showSearch,setShowSearch] = useState(false)
const [showForm,setShowForm] = useState(false)
const [menuOpen,setMenuOpen] = useState(false)

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [message,setMessage] = useState("")
const [success,setSuccess] = useState(false)

function handleSubmit(e:React.FormEvent){

e.preventDefault()

if(!name || !email || !message){
alert("Please fill all fields")
return
}

const newMessage = {
name,
email,
message,
date:new Date().toLocaleString()
}

const oldMessages = JSON.parse(localStorage.getItem("messages") || "[]")

oldMessages.push(newMessage)

localStorage.setItem("messages", JSON.stringify(oldMessages))

setSuccess(true)

setName("")
setEmail("")
setMessage("")

setTimeout(()=>{
setShowForm(false)
setSuccess(false)
},1500)

}

return(

<header className={styles.header}>

<div className={styles.logo}>
Portfolio
</div>

<button
className={styles.burger}
onClick={()=>setMenuOpen(!menuOpen)}
>
<FaBars/>
</button>

<nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/skills">Skills</Link>
<Link to="/projects">Projects</Link>

</nav>

<div className={styles.actions}>

<button
className={styles.icon}
onClick={()=>setShowSearch(!showSearch)}
>
<FaSearch/>
</button>

<button
className={styles.icon}
onClick={()=>setShowForm(true)}
>
<FaEnvelope/>
</button>

<Link to="/admin" className={styles.icon}>
<FaUserShield/>
</Link>
<button
className={styles.icon}
onClick={()=>setDark(!dark)}
>
{dark ? <FaSun/> : <FaMoon/>}
</button>

</div>

{showSearch && (

<input
className={styles.searchInput}
placeholder="Search project..."
/>

)}

{showForm && (

<div className={styles.overlay}>

<div className={styles.modal}>

<h2>Contact Me</h2>

<form onSubmit={handleSubmit} className={styles.form}>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<textarea
placeholder="Message"
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<button type="submit">
Send
</button>

</form>

{success && (
<p className={styles.success}>
Message sent successfully ✓
</p>
)}

<button
className={styles.close}
onClick={()=>setShowForm(false)}
>
Close
</button>

</div>

</div>

)}

</header>

)

}

export default Navbar