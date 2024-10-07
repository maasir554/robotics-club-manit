
export const About = () => (
    <section className="w-screen min-h-screen h-full bg-black flex flex-col justify-center items-center ">
        <div className="bg-[url('/herobg.png')] bg-cover w-full h-full p-10 flex items-center justify-center flex-1">
            <article className="w-full max-w-6xl grid grid-cols-2 gap-5 content-center items-center ">
                <div className="col-span-1">
                    <h1 className="text-8xl text-headingcolor mb-20 font-bold ">
                        ABOUT
                    </h1>
                    <p className="text-white/70 text-2xl">
                    Lorem Ipsum is simply dummy text of the printing and typesetttting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised inthe 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="bg-yellow-300 flex flex-col gap-5 col-span-1"> 
                    <div className="w-full flex gap-5 items-baseline justify-center">
                        <span className="w-[62%] aspect-[320/230] bg-red-800 rounded-xl"/>
                        <span className="w-[38%] aspect-[200/280] bg-red-800 rounded-xl"/>
                    </div>
                    
                    <div className="w-full flex gap-5 items-start justify-center">
                        <span className="w-[38%] aspect-[200/280] bg-red-800 rounded-xl"/>
                        <span className="w-[62%] aspect-[320/230] bg-red-800 rounded-xl"/>
                    </div>
                    
                </div>
                <div className="bg-yellow-300 h-20 col-span-2"> </div>
            </article>
        </div>
    </section>
)

// manitian v/s non-manitian form difference
