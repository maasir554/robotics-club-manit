
import Image from "next/image"

export const About = () => (
    <section className="w-screen min-h-screen h-full bg-gradient-to-b from-purple-950 to-black flex flex-col justify-center items-center ">
        <div className="bg-[url('/herobg.png')] bg-fixed bg-bottom bg-cover w-full h-full p-10 pt-24 flex items-center justify-center flex-1">
            <article className="w-full max-w-6xl grid grid-cols-2 gap-14 content-center items-center ">
                <div className="col-span-2 md:col-span-1">
                    <h1 className="text-center md:text-left text-6xl md:text-7xl lg:text-8xl text-headingcolor mb-20 font-bold ">
                        ABOUT
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl text-center md:text-left lg:text-2xl">
                    Lorem Ipsum is simply dummy text of the printing and typesetttting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised inthe 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="flex flex-col gap-5 col-span-2 md:col-span-1"> 
                    <div className="w-full flex gap-5 items-baseline justify-center">
                        <span className="w-[62%] aspect-[320/230] bg-red-800 rounded-3xl overflow-hidden flex about-1">
                            <Image src={'/about-1.png'} alt='about-image' width={319} height={233} className="w-full flex" />
                        </span>
                        <span className="w-[38%] aspect-[200/280] bg-red-800 rounded-3xl overflow-hidden flex about-2">
                            <Image src={'/about-2.png'} alt='about-image' width={203} height={283} className="w-full flex" />
                        </span>
                    </div>
                    
                    <div className="w-full flex gap-5 items-start justify-center">
                        <span className="w-[38%] aspect-[200/280] bg-red-800 rounded-3xl overflow-hidden flex about-3">
                            <Image src={'/about-3.png'} alt='about-image' width={203} height={283} className="w-full flex" />
                        </span>
                        <span className="w-[62%] aspect-[320/230] bg-red-800 rounded-3xl overflow-hidden flex about-4">
                            <Image src={'/about-4.png'} alt='about-image' width={315} height={233} className="w-full flex delay-300" />
                        </span>
                    </div>
                    
                </div>
                <div className="col-span-2 p-10 flex gap-10 flex-wrap justify-center items-stretch">
                     <a className=" cursor-pointer flex-1 p-5 bg-white rounded-lg min-w-[200px] max-w-[400px] grow-0 shrink-0 basis-0 flex items-center justify-center h-[100px] " href="https://madeeasy.com" >
                        <Image src="/sponsors/spn-1.png" width={296} height={48}/>
                     </a>
                     <a className=" cursor-pointer flex-1 p-5 bg-white rounded-lg min-w-[200px] max-w-[400px] grow-0 shrink-0 basis-0 flex items-center justify-center h-[100px] " href="https://techanalogy.com" >
                        <Image src="/sponsors/spn-2.png" width={306} height={74}/>
                     </a>
                     <a className=" cursor-pointer flex-1 p-5 bg-white rounded-lg min-w-[200px] max-w-[400px] grow-0 shrink-0 basis-0 flex items-center justify-center h-[100px] " href="https://navduniya.in" >
                        <Image src="/sponsors/spn-3.png" width={327} height={77}/>
                     </a>
                     <a className=" cursor-pointer flex-1 p-5 bg-white rounded-lg min-w-[200px] max-w-[400px] grow-0 shrink-0 basis-0 flex items-center justify-center h-[100px] " href="https://robonauts.in" >
                        <Image src="/sponsors/spn-4.png" width={366} height={77}/>
                     </a>
                </div>
            </article>
        </div>
    </section>
)

// manitian v/s non-manitian form difference
