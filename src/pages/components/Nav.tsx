import {motion} from 'framer-motion'
import logo from "/logo.png";
import { useState } from 'react'
import { useMediaQuery } from '../../util/useMediaQuery';
const navMotion = {
    visible: {
      opacity: 1,
  
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  }
  const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  

export default function Nav(){
    const [toggled, setToggled]=useState(false)
    const matches = useMediaQuery('(min-width: 1280px)')
    return (
        <nav className=" relative mx-8 mb-24 flex items-center justify-between pb-6 pt-12 font-medium md:mx-16 lg:mx-32">
      <div>
        <img src={logo} alt="Logo" width="40px"height="40px"/>
      </div>
      
      <div className="text-lg font-bold">
      <a  href="#">FinEdge</a>
      </div>
      {matches &&(
    <motion.div  variants={navMotion} animate="visible" initial="hiddden" className='flex gap-12'>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contactus">Contact Us</a>
    </motion.div>
    )}
    {!matches && (
      <div onClick={()=>setToggled((prevToggle)=>!prevToggle)} className='space-y-1.5 cursor-pointer z-50 '>
           <motion.span animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }} className="block h-0.5 w-8 bg-black"></motion.span>
           <motion.span className="block h-0.5 w-6 bg-black"></motion.span>
           <motion.span  animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0 ,width: toggled ? 32 : 24,}} className="block h-0.5 w-4 bg-black"></motion.span>
      </div>
           )}
                   {toggled && !matches &&(
                    <div className='fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center z-40'>
                        <motion.div  
                        variants={navMotion} 
                        animate="visible"
                    initial="hidden"
                    className='flex flex-col gap-24 text-lg'>
                    <motion.a variants={itemMotion} href="/">Home</motion.a>
                    <motion.a variants={itemMotion} href="/about">About Us</motion.a>
                    <motion.a variants={itemMotion} href="/services">Services</motion.a>
                    <motion.a variants={itemMotion} href="/contactus">Contact Us</motion.a>
                    </motion.div>
                    </div>
           )}
        </nav>
    )
}