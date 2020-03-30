import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';

class Navigation extends React.Component{
    render(){
        return(
            <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/profile">Your Profile</Nav.Link>
                <Nav.Link href="/messages">Announcements</Nav.Link>
                <Nav.Link href="/addUsers">Add Users</Nav.Link>
                <Nav.Link hre="/assignTask">Assign Task</Nav.Link>
                </Nav>
            </Navbar>
            </div>
        )
    }
}

export default Navigation;