// import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Lottie from 'react-lottie';
import Animated_M from '../lotties/Animated_M.json';

const line1 = "Hi,"
const line2 = "I'm mart"
const line3 = "Engineer."

const sentence = {
    hidden: { opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.09,
        },
    },
}

const letter = {
    hidden: { opacity: 0, y: 50},
    visible: {
        opacity: 1,
        y:0,
    },
}

// const Loader = ({ setLoading }) => {

//     const draw = {
//         hidden: { pathLength: 0, opacity: 0 },
//         visible: (i) => {
//             const delay = i;
//             return {
//                 pathLength: 1,
//                 opacity: 1,
//                 transition: {
//                     pathLength: { delay, type: "spring", duration: 2.5, bounce: 0 },
//                     opacity: { delay, duration: 0.1 }
//                 }
//             };
//         }
//     };

//     const [showIntro, setShowIntro] = useState(false);

//     useEffect(() => {
//         let show = true
//         if(localStorage.getItem('showIntro')) {
//             const diffTime = Math.abs(Date.now() - localStorage.getItem('showIntro'))
//             const diffHours = Math.ceil(diffTime / (3600000));
//             show = (diffHours <= 1) ? false : true
//         }
//         setShowIntro(show)
//     }, [])
    
//     useEffect (() => {
//         if(showIntro){
//             localStorage.setItem('showIntro', Date.now());
//             setTimeout(() => {
//                 setShowIntro(false);
//                 setLoading(false);
//             }, 5000);
//         }
//     }, [showIntro]);

//     return (
//         showIntro
//         ? <motion.div className="intro" animate={{ opacity: 0 }} transition={{ delay: 4, duration: 1}} exit={{ opacity: 0 }}>
//             <div className="text">
//                 <motion.svg width="1000" height="20" viewBox="0 0 10 10" initial="hidden" animate="visible">
//                     <motion.line x1="200" y1="10" x2="-200" y2="10" stroke="white" variants={draw} custom={1.1}/>
//                 </motion.svg>
//                 <motion.h1 initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 2}} exit={{ opacity: 0 }}> Welcome.</motion.h1>
//                 <motion.svg width="1000" height="20" viewBox="0 0 10 10" initial="hidden" animate="visible">
//                     <motion.line x1="-200" y1="10" x2="200" y2="10" stroke="white" variants={draw} custom={0.9}/>
//                 </motion.svg>
//             </div>
//         </motion.div>
//         : null
//     )
// }

function Home() {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: Animated_M,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    // const [loading, setLoading] = useState(true);

    return(
        <div className="home">
            <span className="tags top-tags"> &lt;html&gt; </span>
            <span className="tags bottom-tags"> &lt;/html&gt; </span> 
            {/* { loading && <Loader setLoading= {setLoading} />} */}
                <div className="hometext">
                    <motion.h1
                        className="load-screen--message"
                        variants={sentence}
                        initial= "hidden"
                        animate= "visible">
                        {line1.split("").map((char, index) => {
                          return (
                            <motion.span key={char + "-" + index} variants={letter} whileHover={{ color: "#EE1D52" }}>
                                {char}
                            </motion.span>
                          )
                        })}
                        <br />
                        {line2.split("").map((char, index) => {
                          return (
                            <motion.span key={char + "-" + index} variants={letter} whileHover={{ color: "#EE1D52" }}>
                                {char}
                            </motion.span>
                          )
                        })}
                        <br />
                        {line3.split("").map((char, index) => {
                          return (
                            <motion.span key={char + "-" + index} variants={letter} whileHover={{ color: "#EE1D52" }}>
                                {char}
                            </motion.span>
                          )
                        })}
                    </motion.h1>
                </div>
                <div><Lottie options={defaultOptions}/>
            </div>
        </div>
    )
}


export default Home;