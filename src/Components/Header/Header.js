import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link} from 'react-router-dom'
import { useStateValue } from '../StateProvider/StateProvider';
import {auth} from "../../firebase"

function Header() {

    const [{basket, user}, dispatch]  = useStateValue();

    const handleAuthentication = () => {
            if (user){
                auth.signOut();
            }
    }

    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo"  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon" type="text"/>      
             </div>

            <div className="header__nav">
               
                
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">
                        {user ? user.email : 'Hello Guest'}
                    </span>
                    <Link to="/login">
                    <span style={{color: 'white'}} className="header__optionLineTwo">
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                    </Link>
                </div>

                
                <div className="header__option">
                <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Your 
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
