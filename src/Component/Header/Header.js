import React from 'react';
import { Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar 
                fluid={true}
                rounded={true}
                
            >
                <Navbar.Brand href="https://flowbite.com/">
                    
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Quiz Hunter
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/topics'>Topics</NavLink>
                    <NavLink to='/statistic'>Statistic</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;