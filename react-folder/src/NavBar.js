import {FaEnvelope, FaLinkedinIn, FaPhone} from "react-icons/fa";

const NavBar = () => {
    
    const handleClick = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
        });
    }

    // const sectionAbout = document.querySelector('#about');
    // // // const sectionSkills = document.querySelector('#skills');
    // // // const sectionContact = document.querySelector('#contact');

    // // // const sectionArray = [sectionAbout, sectionSkills, sectionContact];

    // const options = {};

    // const observer = new IntersectionObserver(function(entries, observer){
    //         entries.forEach(entry => {
    //             console.log(entry);
    //         })
    // }, options);

    // // observer.observe(sectionAbout);


    return (
        <header>
            <nav className="nav-bar whitespace">
                <div className="name hide media-481-show">
                    <ul>
                        <li>
                        <a onClick={() => {handleClick("home")}}><h1>Vicky Sonne Thomsen</h1></a>
                        </li>
                    </ul>
                </div>
                <div >
                    <ul className="links">
                        <li>
                            <a className="menu-about" onClick={() => {handleClick("about")}}>om mig</a>
                        </li>
                        <li>
                            <a className="menu-skills" onClick={() => {handleClick("skills")}}>kompetencer</a>
                        </li>
                        <li>
                            <a className="menu-contact" onClick={() => {handleClick("contact")}}>kontakt</a>
                        </li>
                    </ul>
                </div>
                <div className="hide">
                    <ul className="icons">
                        <li>
                            <a href="https://www.linkedin.com/in/vicky-thomsen-8533ba239/" target="_blank" rel="noreferrer"><FaLinkedinIn size="1.5em" color="#FFF"/></a>
                        </li>
                        <li>
                            <a href="tel:+4542923630"><FaPhone size="1.5em" color="#FFF"/></a>
                        </li>
                        <li>
                            <a href="mailto:vst1996@live.dk"><FaEnvelope size="1.5em" color="#FFF"/></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;