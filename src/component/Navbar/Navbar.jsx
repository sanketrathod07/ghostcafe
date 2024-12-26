import React from 'react';
import './navbar.css';
import logo from '../../images/cafe img/logo-cut.png';
import User from '../../images/cafe img/userNotLoggedIn.png';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { SignedIn, SignedOut, useClerk, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();

  const handleSignInClick = () => {
    openSignIn();
  };
  // console.log()

  return (
    <div className="NavbarMainContainer">
      <div className="logoContainer">
        <Link to='/'>
          <img src={logo} alt="Logo Error" className='NavbarLogo' />
        </Link>
      </div>
      <div className="Googlediv">
        <Link to='/cart'>
          <div className="NavbarBtn">
            <ShoppingBag />
          </div>
        </Link>
        <SignedOut redirect='/'>
          {/* <SignInButton /> */}
          <img
            className='UserImageNavbar'
            src={User}
            alt="User Not Logged In"
            onClick={handleSignInClick}
          />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;