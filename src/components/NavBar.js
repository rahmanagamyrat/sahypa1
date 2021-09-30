import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Antakya 326 Döner
                    </NavLink>
                    <div className='navnav'></div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Anasayfa
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/menu" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Menü
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Hakkımızda
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/gallery" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Galeri
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>
                                İletişim
                            </NavLink>
                        </li>

                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
