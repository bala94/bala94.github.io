import React, { Component } from 'react';
import { Link } from 'react-router';
import "./Sidebar.css";
import Collapsible from 'react-collapsible';

class Sidebar extends Component {
    render() {
        return (
            <div className="gt-demo-sidebar">
                <Link to="/home"> Graph </Link>
                <Collapsible trigger="Start here">
                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                    <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>
            </div>
        );
    }
}

export default Sidebar;