import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Skills from "./pages/Skills/Skills"
import Projects from "./pages/Projects/Projects"
import Admin from "./pages/Admin/Admin"
import Messages from "./pages/Messages/Messages"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {

const [dark,setDark] = useState(false)

useEffect(()=>{

if(dark){
document.body.classList.add("dark")
}else{
document.body.classList.remove("dark")
}

},[dark])

return (

<BrowserRouter>

<Navbar dark={dark} setDark={setDark}/>

<Routes>

<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/skills" element={<Skills />} />
<Route path="/projects" element={<Projects />} />
<Route path="/messages" element={<Messages />} />
<Route path="/admin" element={<Admin />} />

</Routes>

<Footer/>

</BrowserRouter>

)

}

export default App