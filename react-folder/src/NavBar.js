// import { useState } from 'react'

const NavBar = () => {
    // const [id, setId] = useState();

    // const handleClick = () => {
    //     setId(idtest);
    // }

    return (
        <header>
            <nav className="nav-bar whitespace">
                <div>
                    <a href="/"><h1>Vicky Sonne Thomsen</h1></a>
                </div>
                <div className="links">
                    <a href={NavBar("#about")}>Om Mig</a>
                    <a href={NavBar("#skills")}>Kompetencer</a>
                    <a href={NavBar("#contact")}>Kontakt</a>
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;