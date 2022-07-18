import React from "react"
import Lottie from 'react-lottie';
import Wave_animation from '../lotties/Me_Wave_Animation.json';

function About() {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: Wave_animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
    <div className="home_about">
        <div className="about_text">
            <h2>Me, Myself &amp; I</h2>
            <p>✨ 4e Jaars mechanical engineering's student aan de HvA ✨. Ik vind klimmen/boulderen super leuk om te doen. Daarnaast loop ik ook veel hard (vooral 5 of 13km). 🏃 </p>
            <p>Hoewel ik Mechatronica &amp; Robotica super leuk vind. Vind ik websites bouwen en me creativiteit daarin te uiten ook super leuk. (Daarom ook deze site 😉)</p>
            <p>Tot slot heb ik me het laaste jaar vooral bezig gehouden met Python / AI 🧠, en C++ en microcontrollers (meer hardware 🦾).</p>
        </div>
        <div>
            <Lottie options={defaultOptions} height={400} width={400}/>
        </div>
    </div>
    )
}


export default About;