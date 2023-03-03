const NavBar = () => {
    return ( 
        <nav className="nav-bar">
            <div className="logo-wrapper">
                <img src="../images/sds-logo-light.png" alt="logo" />
                <a href="/"><h1>Vicky Sonne Thomsen</h1></a>
            </div>
            <div className="links">
                <a href="/about">Om mig</a>
                <a href="/skills">Kompetencer</a>
                <a href="/contact">Kontact</a>
            </div>
        </nav>
    );
}
 
export default NavBar;