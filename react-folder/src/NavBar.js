const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo-wrapper">
                <img src="../images/sds-logo-light.png" alt="logo"></img>
                <a href="/">Vicky Sonne Thomsen</a>
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