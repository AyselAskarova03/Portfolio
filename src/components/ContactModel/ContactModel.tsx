import { useState } from "react"
import styles from "./ContactModel.module.css"

function ContactModal({close}:{close:()=>void}){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [message,setMessage] = useState("")

function handleSubmit(e:React.FormEvent){

e.preventDefault()

if(!name || !email || !message){
alert("Please fill all fields")
return
}

const contactData = {
name,
email,
message,
date:new Date().toLocaleString()
}

const oldMessages = JSON.parse(localStorage.getItem("messages") || "[]")

oldMessages.push(contactData)

localStorage.setItem("messages", JSON.stringify(oldMessages))

alert("Message sent successfully!")

setName("")
setEmail("")
setMessage("")

close()

}

return(

<div className={styles.overlay}>

<div className={styles.modal}>

<h2>Contact Me</h2>

<form onSubmit={handleSubmit} className={styles.form}>

<input
type="text"
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

<button type="submit" className={styles.send}>
Send
</button>

</form>

<button className={styles.close} onClick={close}>
Close
</button>

</div>

</div>

)

}

export default ContactModal