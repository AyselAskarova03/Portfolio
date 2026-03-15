import { useEffect, useState } from "react"
import styles from "./Messages.module.css"

interface Message{
name:string
email:string
message:string
date:string
}

function Messages(){

const [messages,setMessages] = useState<Message[]>([])

useEffect(()=>{

const data = localStorage.getItem("messages")

if(data){
setMessages(JSON.parse(data))
}

},[])

function deleteMessage(index:number){

const updated = messages.filter((_,i)=> i !== index)

setMessages(updated)

localStorage.setItem("messages", JSON.stringify(updated))

}

function clearAll(){

localStorage.removeItem("messages")

setMessages([])

}

return(

<div className={styles.container}>

<h1>Messages</h1>

{messages.length === 0 && (
<p>No messages yet</p>
)}

{messages.length > 0 && (
<button className={styles.clear} onClick={clearAll}>
Clear All
</button>
)}

<div className={styles.list}>

{messages.map((msg,index)=>(

<div key={index} className={styles.card}>

<h3>{msg.name}</h3>

<p>{msg.email}</p>

<p>{msg.message}</p>

<span>{msg.date}</span>

<button
className={styles.delete}
onClick={()=>deleteMessage(index)}
>
Delete
</button>

</div>

))}

</div>

</div>

)

}

export default Messages