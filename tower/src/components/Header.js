import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {ReactDOM, mountNode}from 'react-dom';
import '../App.css';
import {Link} from 'react-router-dom';


class Header extends React.Component{

	render(){
		return (
			<Navbar inverse collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="/">Tower Eatery</a>
				</Navbar.Brand>
			<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<NavItem eventKey={1} href="#">Rooftop Vibes</NavItem>
					<NavItem eventKey={2} href="./wines"><Link to="/wines">Wine List</Link></NavItem>
						<NavDropdown eventKey={3} title="Menus!" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Cocktails</MenuItem>
							<MenuItem eventKey={3.2}>Happy Hour</MenuItem>
							<MenuItem eventKey={3.3}>Dinner</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3}>Home</MenuItem>
						</NavDropdown>
				</Nav>
			</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
