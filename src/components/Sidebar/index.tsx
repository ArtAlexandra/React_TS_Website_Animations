import React from "react";
import {Link, NavLink} from "react-router-dom"
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome,faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faGithub} from '@fortawesome/free-brands-svg-icons'
export default function Sidebar(){
    return(
       <div className="nav-bar">
        <Link className="logo" to="/">
        <img src={LogoS} alt="logo"/>
        <img  className="sub-logo" src={LogoSubtitle} alt="LogoSubtitle"/>
        </Link>

        <nav>
            <NavLink to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink to="/about">
                <FontAwesomeIcon icon={faUser} className="about-link" />
            </NavLink>
            <NavLink to="/contact">
                <FontAwesomeIcon icon={faEnvelope} className="contact-link" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel="noreferrer"
                href="https://github.com/ArtAlexandra">
                 <FontAwesomeIcon icon={ faGithub}  className="anchor-icon" />
                 </a>
            </li>
        </ul>
        </div>
    )
}