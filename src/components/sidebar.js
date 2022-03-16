import { Navbar } from 'react-bootstrap'
import { FaRegListAlt } from 'react-icons/fa';
import "./sidebar.css";
function Sideheader() {

    return (
        <Navbar fixed="top" sticky="top">
            <div className="sidebar">
                <div className="container">
                    <div className="sidebar-content">
                        <div className="logo-sidebar">
                            <a href="#"><img src="./images/logo.png" /></a>
                        </div>
                        <hr />
                        <div className="menu-sidebar">

                            <a>
                                <p className="button-icon">
                                    <icon><FaRegListAlt /></icon></p>
                                <p className="button-text">Place</p>
                            </a>



                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </Navbar>
    );



}

export default Sideheader;
