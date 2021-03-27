import React, { Component } from 'react';
import './Header.scss'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="search-box">
                    <input type="text" className="input" placeholder="Type to search"/>
                    <a href="#" className="search-btn">
                       <i class="fas fa-search" style={{color:'orange'}}></i>  
                    </a>
                </div>
                <div className="btn-Menu">
                     <i class="far fa-clock"></i>
                     <i class="far fa-bell"></i>
                </div>
            </div>
        );
    }
}

export default Header;