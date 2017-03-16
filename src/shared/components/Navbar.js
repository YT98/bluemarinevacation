import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
    render() {
        return(
            <div id="navbar">
            <nav class="navbar navbar-new" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse navbar-right" id="navbar1">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/saint-martin">Saint-Martin</Link></li>
                            <li><Link to="/estates">Estates</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        );
    };
};
