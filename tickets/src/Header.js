import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

export default function Header() {
    return (
        <nav className="header">

        <Link to="/">
        <img className ="header_logo" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fglobaltassels.org%2Ffiles%2F2016%2F03%2Fgt-product-logo-ticket.gif&f=1&nofb=1" alt="logo"/>
        </Link>
        <div className="header_searchbar">
            <input type="text" className="header_search" />
            <SearchIcon className='header_search_icon' />
        </div>
        
        <div className="header_navigation">
            <Link to='/ticket' className='header_link'>
                <div className="header_options">
                    <span className="h">My Tickets</span>
                    
                </div>
                
            </Link>
            <Link to='/create' className='header_link'>
                <div className="header_options">
                    <span className="h">Create</span>
                    
                </div>
                
            </Link>
            {/* <Link to='/login' className='header_link'>
                <div className="header_options">
                    <span className="h">Sell</span>
                    
                </div>
                
            </Link> */}
            <Link to='/market' className='header_link'>
                <div className="header_options">
                    <span className="h">Market</span>
                    
                </div>
                
            </Link>
            {/* <Link to='/login' className='header_link'>
                <div className="header_options">
                    <span className="h">Login</span>
                    
                </div>
                
            </Link> */}
            {/* <Link to='/login' className='header_link'>
                <div className="header_options">
                    <span className="h">Sell</span>
                    
                </div>
                
            </Link> */}


        </div>
        </nav>
    )
}
