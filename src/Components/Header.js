import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";
class Header extends React.Component {

    constructor(props) {
        super();
    }

    render() {

        return (
            <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand className="centered" href="#home">
                    Covid Tracker
            </Navbar.Brand>
            </Navbar>


        );
    }
}

export default Header;