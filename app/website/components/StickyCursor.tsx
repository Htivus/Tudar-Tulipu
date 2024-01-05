"use client"
import React, { useEffect } from 'react'
import { motion ,useMotionValue,useSpring} from 'framer-motion'
const StickyCursor = () => {
    const mouse={
        x:useMotionValue(0),
        y:useMotionValue(0),
    }
    const manageMouse=(e: { clientX: any; clientY: any })=>{
        const {clientX, clientY} = e;
        mouse.x.set(clientX-25)
        mouse.y.set(clientY-25);
    }
    const smoothMouse =  {
        x:useSpring(mouse.x),
        y:useSpring(mouse.y)
        
    }
    useEffect(()=>{
        window.addEventListener('mousemove', manageMouse)
        return ()=>{window.removeEventListener('mousemove', manageMouse)}
    })
  return (
    <motion.div
      className="cursor"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate="default "></motion.div>
  );
}

export default StickyCursor
