import Image from "next/image"
import menuIcon from "../assets/menu.svg"
import { useState } from "react"

const NAV_OPTIONS = [
    {name:"Home",link:"#home"},
    {name:"About",link:"#about"},
    {name:"Contact",link:"#contact"},
    {name:"Sponsor",link:"#sponsor"},
  ];

const MenuToggleButton = ({expanded, onClick}) => (
    <button onClick={onClick} className={"px-4 sm:px-6 md:px-10 py-1 sm:py-2 md:py-3 flex bg-[rgba(240,240,240,.7)] hover:bg-white transition-colors active:scale-95 gap-3 items-center justify-center rounded-full backdrop-blur-lg"}>
            <Image className="w-2 sm:w-3 md:w-4 lg:w-5" src={menuIcon} width={20} height={20} />
            <span className="text-xs sm:text-sm md:text-lg lg:text-xl text-[#3F2352]">{expanded?("close"):("menu")}</span>
    </button>
);


export const NavBar = () => {
    
    const [isNavExpanded, setIsNavExpanded] = useState(0);
    
    const handleMenuToggle = () => isNavExpanded? setIsNavExpanded(0) : setIsNavExpanded(1); 

    return(
    <nav className={"fixed top-0 flex w-full justify-center items-center z-20 py-5 px-2 " }>
        {!isNavExpanded?(
            <><MenuToggleButton expanded={isNavExpanded} onClick={handleMenuToggle} /></>
        ):(
        <div className="px-10 py-2 h-auto rounded-xl md:rounded-full bg-white w-full max-w-xl flex justify-evenly items-center flex-wrap gap-4">
            {NAV_OPTIONS.map((option,idx) => (
                <a key={idx} className="text-xl text-[#3F2352] min-h-12 font-semibold flex items-center justify-center w-full md:w-auto text-center hover:underline" href={option.link}>{option.name}</a>
            ))}
            <button className="bg-transparent border-2 border-[#3F2352] rounded-full py-1 px-4" onClick={handleMenuToggle}>Close</button>
        </div>)
        }
    </nav>
    )
}

