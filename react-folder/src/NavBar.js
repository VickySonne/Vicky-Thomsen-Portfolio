

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
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;