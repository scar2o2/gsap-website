import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'


const Hero = () => {
    useGSAP(()=>{
        const heroSplit= new SplitText('.title',{type: 'chars,words'})
        const paragraphSplit= new SplitText('.subtitle',{type: 'lines'})
        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
        // paragraphSplit.lines.forEach((line)=>{line.classList.add('')})
        gsap.fromTo(heroSplit.chars,{
            y: 100,
            opacity:0
        },{
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.06,
        });

        gsap.fromTo(paragraphSplit.lines,{
            y: 100,
            opacity:0
        },{
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.08,
            delay: 1
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
        .to('.right-leaf',{y: 200},0)
        .to('.left-leaf',{y: -200},0);

    },[])
  return (
    <>
        <section id='hero' className='noisy flex justify-center'>
            <h1 className='title text-[120px]'>MOJITO</h1>
            <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf'/>
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf'/>
            <div className='body'>
                <div className='content'>
                    <div className='space-y-5 hidden md:block'>
                        <p>Cool. Crisp. Classic.</p>
                        <p className='subtitle cl'>
                            Sip the spirit <br /> of Summer
                        </p>
                    </div>
                    <div className='view-cocktails'>
                        <p className='subtitle'>
                            Every cocktail on our menu is a blend of
                            premium ingredients, creative flair, and
                            timeless recipes — designed to delight 
                            your senses. 
                        </p>
                        <a href="#cocktails">View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero