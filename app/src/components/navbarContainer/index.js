import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

//COMPONENTS

/*function NavbarContainer({ logo, children }) {
    return (
        <>
        <nav className="navbar">
            <p> {logo} </p> {children}{" "}
            <MenuContainer>
            <MenuOption liName={"Inicio"} /> <MenuOption liName={"Conocenos"} />{" "}
            <MenuOption liName={"Productos"} /> <MenuOption liName={"Contacto"} />{" "}
            </MenuContainer>{" "}
        </nav>{" "}
        </>
    );
}*/

const NavbarContainer = ({ logo, children }) => {
    return (
        <nav className="navbar">
            <p> {logo} </p>{" "}
            <ul className="List-ul">
                <NavLink
                to="/"
                className="NavLink"
                >
                Home{" "}
                </NavLink>{" "}
                <NavLink
                to="/about"
                className="NavLink"
                >
                About{" "}
                </NavLink>{" "}
                <NavLink
                to="/contact"
                className="NavLink"
                >
                Contact{" "}
                </NavLink>{" "}
            </ul>{" "}
            {children}
        </nav>
    );
};

export default NavbarContainer;
