"use client"

import Image from "next/image"
import robotImage from "../assets/hero-robot.png"
import { useState, useEffect } from "react"



export const Hero = () => {
    
    const [roboIsFixed,setRoboIsFixed] = useState(true);
    useEffect(()=>{
        const HeroSection = document.getElementById('hero-section');
        const robotImage = document.getElementById('robot-image');
        
        const handleScroll = () => {
            const sectionTop = HeroSection.getBoundingClientRect().top;
            const sectionBottom = HeroSection.getBoundingClientRect().bottom;
            if (HeroSection) {
                if (sectionTop <= 0 && sectionBottom > window.innerHeight) {
                // Fix the robot when the section is in view
                  setRoboIsFixed(true);
                } else {
                  // Unfix the robot when outside the section
                  setRoboIsFixed(false);
                    }
                 }

            }
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
    },[])
    
    return(
    <section id="hero-section" className="bg-[url('/herobg.png')] h-auto md:h-[200lvh] bg-top bg-portrait sm:bg-landscape bg-no-repeat bg-fixed relative before:content-[''] before:h-full before:w-full before:bg-black before:flex before:-z-10 before:absolute before:top-0 ">
        
        {/* Our Mascot Robot */}
        <div id="robot-image" className=" max-w-[400px] md:max-w-[1000px] w-full sm:w-3/4 md:w-1/2 h-auto flex items-center justify-center fixed left-1/2 -translate-x-1/2 bottom-0 "
             style={{
                position:roboIsFixed?"fixed":"absolute",
                bottom:roboIsFixed?"":"0",
                top:roboIsFixed?"":'unset',
                left:roboIsFixed?"":'50%',
                transform: roboIsFixed?"":'translate(-50%,0)',
             }}   
        >
            <Image className="w-full flex z-10" src={robotImage} width={200} height="auto" />
        </div>
 
        {/* Big Heading */}
        <div className="w-full h-auto min-h-lvh flex items-center justify-center text-[18vw] md:text-[20vw] tracking-widest font-bold z-0">
            <div className="overflow-hidden h-auto">
                <h1 className="text-headingcolor text-center mb-8 leading-[17vw] z-0">
                ROBOTICS
                </h1>
            </div>
        </div>
        {/* Button Box */}
        <div id="hero-register" className="w-full h-hull min-h-[70lvh] md:h-lvh flex items-center justify-center p-10 ">
            <div className="relative w-[90vw] md:w-[80vw] lg:w-[70vw] bg-gradient-to-b from-transparent to-white/30 backdrop-blur-sm  h-[200px] sm:h-[35vw] md:h-[22vw] lg:h-[18vw] rounded-xl md:rounded-3xl overflow-visible flex flex-row justify-end items-end z-20">
                <span className="absolute bottom-[100px] sm:bottom:12 md:bottom-8 left-4 text-[15vw] md:text-[10vw] text-[#B373FF] leading-[12vw] sm:leading-[12vw] md:leading-[8vw] font-bold">
                <h1>DIVE</h1>
                <h1>INTO</h1>
                <h1>ROBOTICS</h1>
                </span>
            <a className="mr-6 mb-4 rounded-full bg-headingcolor text-black font-bold text-xs sm:text-sm md:text-xl px-6 md:px-8 py-2 md:py-4 cursor-pointer border-4 border-transparent hover:border-[#B373FF] z-20">
                REGISTER NOW 
            </a>
            </div>
        </div>
    </section>
   
)}
