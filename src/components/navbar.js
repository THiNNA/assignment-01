import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { BsFillBellFill } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import "./navbar.css";

function NavHeader() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#134B8A", }} variant="dark" fixed="top" sticky="top">

            <div className="logo-img"><img src="./images/logo.png" alt="" /></div>
            <div className="menu-img"><img src="./images/profile.jpg" alt="" /></div>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">  </Nav>
                <Nav>
                    <Nav.Link href="#"><BsFillBellFill /> <icon className="status"><BsFillCircleFill /> </icon></Nav.Link>
                    <Nav.Link href="#"><img src="./images/profile.jpg"
                        style={{
                            display: "flex",
                            borderRadius: "50%",
                            height: "35px",
                            width: "35px",
                            marginRight: "-10px",
                            marginTop: "-5px"
                        }} /></Nav.Link>
                    <NavDropdown title="Thinnapat" style={{ marginRight: "10px" }} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

        </Navbar >
    );
}

export default NavHeader;
