import React, { Component } from 'react';
import Logo from '../assets/img/logo4.png';
 
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top rs-tech" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <img className="img-fluid" src={Logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">ABOUT</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">SERVICES</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#technology">TECHNOLOGY WE USE</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
    }
}
export default Header;