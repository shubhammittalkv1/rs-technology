import React, { Component } from 'react';
import Logo from '../assets/img/logo4.png';
import { Link, animateScroll as scroll } from "react-scroll";
 
class Header extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top rs-tech" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/" onClick={this.scrollToTop}>
                        <img className="img-fluid" src={Logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link
                                className="nav-link js-scroll-trigger"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >ABOUT</Link></li>
                            <li className="nav-item">
                            <Link
                                className="nav-link js-scroll-trigger"
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >SERVICES</Link></li>
                            <li className="nav-item">
                            <Link
                                className="nav-link js-scroll-trigger"
                                activeClass="active"
                                to="technology"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >TECHNOLOGY WE USE</Link></li>
                            <li className="nav-item">
                            <Link
                                className="nav-link js-scroll-trigger"
                                activeClass="active"
                                to="signup"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
    }
}
export default Header;