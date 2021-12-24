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
                <a href="mailto:EMAILADDRESS"><img src={LinkedIn} alt="grumble grumble"/>Email</a>
                <a href="mailto:EMAILADDRESS"><img src={LinkedIn} alt="grumble grumble"/>LinkedIn</a>
            </div>

            <section id="text">
                <h6>About</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident nisi numquam fugiat sit excepturi possimus est dolores illum natus minima in ab, laboriosam pariatur, iure nemo magnam.</p>
                <h6>Interests</h6>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis eaque porro dolorum officiis velit ducimus!</p>
            </section>
       
        </div>
        </>
    )
}