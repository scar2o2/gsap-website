import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  const scrollRef= useRef();
  return ( 
    <div className="flex-center h-[100vh]">App</div>
  )
}

export default App