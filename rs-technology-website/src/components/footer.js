import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-black small text-center text-white-50">
                <div className="container">Copyright © 2016 R.S Technology.</div>
            </footer>
)
    }
}
export default Footer;