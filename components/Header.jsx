import {useState, useEffect} from 'react'
import Image from 'next/image'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HeaderLink from "./HeaderLink";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import { useTheme } from 'next-themes';
import {motion } from 'framer-motion'


const spring = {
    type:'spring',
    stiffness:700,
    damping: 30
}


function Header() {

    const [mounted, setMounted] = useState(false)
    const {  setTheme ,resolvedTheme, theme} = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])


    if (!mounted) return null
        

    return (
        <header className=" sticky flex justify-around top-0 z-40 bg-white dark:bg-[#1D2226]
         items-center py-1.5 px-3 focus-within:shadow-lg">
            <div className="flex items-center space-x-2 w-full max-w-xs">
                {mounted && (
                    <>
                        {resolvedTheme === "dark" ? (
                        <Image src="https://rb.gy/bizvqj" alt='' width={45} height={45} />
                        ) : (
                        <Image src="https://rb.gy/dpmd9s" alt='' width={55} height={55} />
                        )}
                    </>
                )}
                {/* <Image src="https://rb.gy/dpmd9s" alt='' width={55} height={55} /> */}

                <div className="flex items-center space-x-1 dark:md:bg-gray-700
                py-2.5 px-4 rounded w-full">
                    <SearchRoundedIcon />
                    <input type="text" placeholder='search' 
                    className="hidden md:inline-flex bg-transparent text-sm focus:outline-none
                    placholder-black-70 dark:placeholder-white/75 flex-grow" />
                </div>
            </div>

            
            <div className="flex items-center space-x-6">
                <HeaderLink Icon={HomeRoundedIcon} text="Home" feed active />
                <HeaderLink Icon={GroupIcon} text="My Network" feed />
                <HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed hidden />
                <HeaderLink Icon={ChatIcon} text="Messaging" feed />
                <HeaderLink Icon={NotificationsIcon} text="Notifications" feed />
                <HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
                <HeaderLink Icon={AppsOutlinedIcon} text="Work" feed hidden />

                {/* darkMode toggle */}
                {mounted && (
                    <div className={`bg-gray-600 flex items-cneter px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative
                     ${resolvedTheme === 'dark' ? " justify-end" : " justify-start"}`}
                     onClick={() => setTheme(resolvedTheme === 'dark' ? "light" : "dark") }>
                        <span className="absolute left-0">🌜</span>
                          {/* motion */}
                          <motion.div layout transition={spring}
                          className="w-6 h-6 bg-white rounded-full z-40" />
                        <span className="absolute right-0.5">🌞</span>
                    </div>
                )}
                

            </div>


        </header>
    )
}

export default Header