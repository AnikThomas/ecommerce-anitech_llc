import React, { Component }  from 'react';
import logo from './assets/images/logo_red.png';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, 
         Modal, ModalHeader, ModalBody, 
         Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavbarComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
    render(){
        return( 
            <React.Fragment>
                <Navbar dark expand="md" className="fixed-top bg-dark">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/home"><img className="logo" src={logo} alt="logo"/></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg"/> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg"/> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/productlist">
                                        <i className="fa fa-list fa-lg"/> Products
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                    <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button className="btn btn-info text-white" onClick={this.toggleModal}>
                                    <i className="fa fa-user"/> Sign-In
                                </Button>
                            </span>
                        </Collapse>
                    </div>

                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> <i className="fa fa-user"/>  Account</ModalHeader>
                        <ModalBody container-fluid>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    <small className="text-muted">Remember me</small>
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="btn btn-info btn-block btn-md mt-2">Sign in</Button>
                            <p className="text-center m-2">Not a member? <a className="text-info" href="/">Register</a></p>
                        </Form>

                        </ModalBody>
                </Modal>
            </React.Fragment>
        );
        
    }
}


export default NavbarComponent;