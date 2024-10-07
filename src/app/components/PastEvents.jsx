
import Image from "next/image"

export const PastEvents = () => (
    <section className="w-full py-10 bg-purple-800 flex flex-col items-start justify-center overflow-hidden">
        <span id="past-events" className="flex text-[100px] sm:text-[200px] md:text-[250px] lg:text-[300px] overflow-hidden flex-nowrap text-white whitespace-nowrap font-bold">
            <span className="pr-20 min-w-screen text-center">PAST EVENTS.</span>
            <span className="pr-20 min-w-screen text-center">PAST EVENTS.</span>
            <span className="pr-20 min-w-screen text-center">PAST EVENTS.</span>
            <span className="pr-20 min-w-screen text-center">PAST EVENTS.</span>
            <span className="pr-20 min-w-screen text-center">PAST EVENTS.</span>
        </span>
        <span id="past-images" className="w-[200vw] flex flex-nowrap">
            <span className="flex w-screen  items-center justify-around">
                <Image className="w-1/5 h-auto" src={'/pe-1.png'} width={315} height={380} />
                <Image className="w-1/5 h-auto" src={'/pe-2.png'} width={315} height={380} />
                <Image className="w-1/5 h-auto" src={'/pe-3.png'} width={315} height={380} />
                <Image className="w-1/5 h-auto" src={'/pe-4.png'} width={315} height={380} />
            </span>
            <span className="flex w-screen  items-center justify-around">
                <Image className="w-1/5 h-auto" src={'/pe-1.png'} width={315} height={380} />
                <Image className="w-1/5 h-auto" src={'/pe-2.png'} width={315} height={380} />
                <Image className="w-1/5 h-auto" src={'/pe-3.png'} width={315} height={380} />
                <Image className="w-1/5 h-auto" src={'/pe-4.png'} width={315} height={380} />
            </span>
        </span>
    </section>
)
