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
                <div>
                    <a onClick={() => {handleClick("home")}}><h1>Vicky Sonne Thomsen</h1></a>
                </div>
                <div className="links">
                    <a onClick={() => {handleClick("about")}}>Om Mig</a>
                    <a onClick={() => {handleClick("skills")}}>Kompetencer</a>
                    <a onClick={() => {handleClick("contact")}}>Kontakt</a>
                    <a href=""><FaLinkedinIn size="1.5em" color="#FFF"/></a>
                    <a href="tel:+4542923630"><FaPhone size="1.5em" color="#FFF"/></a>
                    <a href="mailto:vst1996@live.dk"><FaEnvelope size="1.5em" color="#FFF"/></a>
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;