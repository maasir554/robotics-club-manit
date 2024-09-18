
import Image from "next/image"
import robotImage from "../assets/hero-robot.png"



export const Hero = () => (
    <section className="bg-[url('/herobg.png')] h-[200vh] bg-center bg-cover bg-no-repeat relative before:content-[''] before:h-full before:w-full before:bg-black before:flex before:-z-10 before:absolute before:top-0">
        
        {/* Our Mascot Robot */}
        <div className=" w-full sm:w-3/4 md:w-1/2 h-auto flex items-center justify-center absolute left-[50vw] -translate-x-1/2 bottom-[100vh] z-10">
            <Image className="w-full flex" src={robotImage} width={200} height="auto" />
        </div>
 
        {/* Big Heading */}
        <div className="w-full h-screen flex items-center justify-center text-[18vw] md:text-[20vw] tracking-widest font-bold">
            <h1  className="text-headingcolor text-center">
                ROBOTICS
            </h1>
        </div>
        {/* Button Box */}
        <div className="w-full h-screen flex items-center justify-center p-5">
            <div className="relative w-[90vw] md:w-[80vw] lg:w-[70vw] bg-white/15  h-[150px] sm:h-[35vw] md:h-[22vw] lg:h-[18vw] rounded-xl md:rounded-3xl overflow-visible flex flex-row justify-end items-end">
                <span className="absolute bottom-[100px] sm:bottom:12 md:bottom-8 left-4 text-[15vw] md:text-[10vw] text-[#B373FF] leading-[12vw] sm:leading-[12vw] md:leading-[8vw] font-bold">
                <h1>DIVE</h1>
                <h1>INTO</h1>
                <h1>ROBOTICS</h1>
                </span>
            <a className="mr-6 mb-4 rounded-full bg-headingcolor text-black font-bold text-xs sm:text-sm md:text-xl px-6 md:px-8 py-2 md:py-4 cursor-pointer border-4 border-transparent hover:border-[#B373FF]">
                REGISTER NOW 
            </a>
            </div>
        </div>
    </section>
   
)
