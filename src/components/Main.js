import React from "react"
import LinkedIn from "../images/Linkedin Icon.png"

export default function Main() {
    return (
        <>
        <div id="mainContainer">

        <main>
            <h3>Laura Smith</h3>
            <h4>Frontend Developer</h4>
            <a href="www.pixalitephoto.com">My Awesome Website</a>
        </main>
        
        <div id="buttons">
            <a href="mailto:EMAILADDRESS">Email</a>
            <a href="mailto:EMAILADDRESS"><img src={LinkedIn} />LinkedIn</a>
        </div>

        <section id="text">
            <h6>About</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident nisi numquam fugiat sit excepturi possimus est dolores illum natus minima in ab, laboriosam pariatur, iure nemo magnam praesentium velit placeat qui vel corrupti quis sapiente maxime? Sequi expedita aliquid atque ratione repellendus illo, voluptas, repellat similique voluptatem suscipit consectetur iste.</p>
            <h6>Interests</h6>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis eaque porro dolorum officiis velit ducimus! Molestias explicabo nisi error odit ratione sit consequatur facere. Dolores?</p>
        </section>
       
        </div>
        </>
    )
}