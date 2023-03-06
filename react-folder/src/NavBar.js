

const NavBar = () => {
    

    const handleClick = (props) => {
        const { id } = props;
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
        });
    }

    return (
        <header>
            <nav className="nav-bar whitespace">
                <div>
                    <a href="/"><h1>Vicky Sonne Thomsen</h1></a>
                </div>
                <div className="links">
                    <p onClick={handleClick()}>Om Mig</p>
                    <a href="#skills">Kompetencer</a>
                    <a href="#contact">Kontakt</a>
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;