import React from "react"
import FB from "../images/Facebook Icon.png"
import GH from "../images/GitHub Icon.png"
import IG from "../images/Instagram Icon.png"
import LI from "../images/Linkedin Icon.png"
import Twit from "../images/Twitter Icon.png"

export default function Footer() {
    return (
        <>
        <div id="socials">
            <img src={FB} alt="facebook" />
            <img src={Twit} alt="twitter" />
            <img src={LI} alt="LinkedIn" />
            <img src={IG} alt="instagram" />
            <img src={GH} alt="github" />

        </div>
        </>
    )
}