import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

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
                <ul className="name hide media-481-show">
                    <li>
                    <a onClick={() => {handleClick("home")}}><h1>Vicky Sonne Thomsen</h1></a>
                    </li>
                </ul>
                <MobileNav />
                <DesktopNav />
            </nav>
        </header>
    );
}
 
export default NavBar;