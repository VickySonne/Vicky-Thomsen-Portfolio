import {FaEnvelope, FaLinkedinIn, FaPhone} from "react-icons/fa";

const NavBar = () => {
    
    const handleClick = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
        });
    }

    return (
        <header>
            <nav className="nav-bar whitespace">
                <div className="name hide media-481-show">
                    <a onClick={() => {handleClick("home")}}><h1>Vicky Sonne Thomsen</h1></a>
                </div>
                <div className="links">
                    <a onClick={() => {handleClick("about")}}>om mig</a>
                    <a onClick={() => {handleClick("skills")}}>kompetencer</a>
                    <a onClick={() => {handleClick("contact")}}>kontakt</a>
                </div>
                <div className="icons hide">
                    <a href="https://www.linkedin.com/in/vicky-thomsen-8533ba239/" target="_blank"><FaLinkedinIn size="1.5em" color="#FFF"/></a>
                    <a href="tel:+4542923630"><FaPhone size="1.5em" color="#FFF"/></a>
                    <a href="mailto:vst1996@live.dk"><FaEnvelope size="1.5em" color="#FFF"/></a>
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;