import SdsLogoLight from './images/sds-logo-light.png'

const NavBar = () => {
    return ( 
        <nav className="nav-bar">
            <a href="/"><h1>Vicky Sonne Thomsen</h1></a>
            <div className="links">
                <a href="/about">Om Mig</a>
                <a href="/skills">Kompetencer</a>
                <a href="/contact">Kontakt</a>
            </div>
        </nav>
    );
}
 
export default NavBar;