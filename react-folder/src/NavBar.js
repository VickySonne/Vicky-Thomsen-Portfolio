const NavBar = () => {
    return (
        <header>
            <nav className="nav-bar whitespace">
                <div>
                    <a href="/"><h1>Vicky Sonne Thomsen</h1></a>
                </div>
                <div className="links">
                    <a href="/about">Om Mig</a>
                    <a href="/skills">Kompetencer</a>
                    <a href="/contact">Kontakt</a>
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;