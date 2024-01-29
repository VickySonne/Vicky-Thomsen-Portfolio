import NavLinks from "./NavLinks";
import {HiMenu} from "react-icons/hi";
import {useState} from 'react'
import {IoClose} from "react-icons/io5";

const MobileNav = () => {

    const [open, setOpen] = useState(false);

    const burgerMenuIcon = <HiMenu className="burger-menu-icon" size="2em" color="#FFF" onClick={() => setOpen(!open)}/>

    const burgerMenuCloseIcon = <IoClose className="burger-menu-icon" size="2em" color="#FFF" onClick={() => setOpen(!open)}/>

    const closeMobileNav = () => setOpen(false);

    return (
        <div className="mobile-nav">
            <div className="nav-icon">
                {open ? burgerMenuCloseIcon : burgerMenuIcon}
            </div>
            {open && <NavLinks isMobile={true} closeMobileNav={closeMobileNav}/>}
        </div>
    );
}
 
export default MobileNav;