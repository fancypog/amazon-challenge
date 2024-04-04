import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';


function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }


  return (
    <div className='header'>
      <a href="/">
        <img 
          className='header__logo' 
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </a>

      <div className='header__search'>
          <input 
          className='header__searchInput' type="text" name='searchInput' />
          <SearchIcon className="header__searchIcon" />
      </div>

      <div className='header__nav'>
        <a href={!user ? '/login' : undefined}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>{user ?'Sign Out' : 'Sign In'}</span>
          </div>
        </a>
        
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>      
        </div>
        
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        
        <a href='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>
                {basket?.length}
              </span>
          </div>
        </a>

        </div>
      </div>

  );
}

export default Header;
