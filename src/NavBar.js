import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () => {
    
    const handleClick = (id) => {
        const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches

        document.getElementById(id).scrollIntoView({
            behavior: smooth ? 'smooth' : 'auto',
        });
    }

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