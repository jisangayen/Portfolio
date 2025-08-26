// components
import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Review from "./components/Review"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
// node module 
import { ReactLenis} from 'lenis/react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
//gsap pluging
// gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useGSAP(()=>{
    const elements = gsap.utils.toArray('.reveal-up')
    elements.forEach((element)=>{
      gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          scrub: true,
          start:'-200 bottom',
          end: 'bottom -80%'
        },
        y:0,
        opacity: 1,

        duration: 1,
        ease: 'power2.out'
      })
    })
  })
  return (
    <ReactLenis root>
       <Header/>
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Review/>
      <Contact/>
    </main>
    <Footer/>

    </ReactLenis>
  )
}