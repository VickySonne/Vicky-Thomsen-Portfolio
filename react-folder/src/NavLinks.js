import {FaEnvelope, FaLinkedinIn, FaPhone} from "react-icons/fa";

const NavLinks = (props) => {

    const handleClick = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
        });
    }

    return (
        <div className="nav-links">
            <ul className="links burger-menu-left">
                <li onClick={() => props.isMobile && props.closeMobileNav()}>
                    <a id="nav-about" className="" onClick={() => {handleClick("about")}}>om mig</a>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileNav()}>
                    <a id="nav-skills" onClick={() => {handleClick("skills")}}>kompetencer</a>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileNav()}>
                    <a id="nav-contact" onClick={() => {handleClick("contact")}}>kontakt</a>
                </li>
            </ul>
            <ul className="nav-icons burger-menu-left">
                <li>
                    <a href="https://www.linkedin.com/in/vicky-thomsen-8533ba239/" target="_blank" rel="noreferrer"><FaLinkedinIn size="1.5em" color="#FFF" /></a>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileNav()}>
                    <a href="tel:+4542923630"><FaPhone size="1.5em" color="#FFF" /></a>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileNav()}>
                    <a href="mailto:vst1996@live.dk"><FaEnvelope size="1.5em" color="#FFF" /></a>
                </li>
            </ul>
        </div>
    );
}
 
export default NavLinks;