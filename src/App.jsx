import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  const scrollRef= useRef();
  return ( 
    <main>
      <Navbar/>
      <Hero/>
      <div className="h-[100vh] bg-black"></div>
    </main>
  )
}

export default App