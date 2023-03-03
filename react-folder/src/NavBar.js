const NavBar = () => {
    return ( 
        <nav className="nav-bar">
            <div className="logo-wrapper">
                <img src="../images/sds-logo-light.png" alt="logo"></img>
                <a href="/"><h1>Vicky Sonne Thomsen</h1></a>
            </div>
            <div className="links">
                <a href="/about">About</a>
                <a href="/skills">Skills</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
}
 
export default NavBar;