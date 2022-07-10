import React from 'react';
import styled from 'styled-components';

import Logo from './Navbar/Logo';
// import ButtonNew from './Navbar/ButtonNew';
// import NavTabs from './Navbar/NavTabs';
// import NavSelect from './Navbar/NavSelect';
import NavbarContainer from './Navbar/NavbarContainer';
// import ButtonMDB from 'mdbReactMfe/Button';

import ButtonMDB from 'tableMfe/Button';

const NavItem = styled.ul`
  margin: 0;
  padding: 0;

  &.optional {
    @media screen and (max-width: 479px) {
      display: none!important;
    }
  }
`

const NavItemMd = styled.div`
  @media screen and (min-width: 767px) {
    display: inline-block!important;
  }

  @media screen and (max-width: 766px) {
    display: none!important;
  }
`

const NavItemSm = styled.div`
  @media screen and (min-width: 767px) {
    display: none!important;
  }

  @media screen and (max-width: 766px) {
    display: inline-block!important;
  }
`

export default function Header({ isSignedIn, onSignOut }) {
  const onClick = () => {
    // && onSignOut function is ALWAYS TRUE
    if (isSignedIn && onSignOut) {
      onSignOut();
      console.log(isSignedIn)
      //localStorage.clear();
      localStorage.removeItem('sidebar-collapsed');
    }
  };

  const linkMap = [
    ["All Companies", "/companies"],
    ["Company Profile", "/companies/last"], // BEM TO DO: change to dropdown 
    ["Settings", "/user/settings"]
  ];

  return (  
    <NavbarContainer isSignedIn={isSignedIn} >

        <NavItem>
          <Logo />
        </NavItem>

        <NavItem>

        </NavItem>
        {/* <NavItem>
          <NavItemMd>{isSignedIn ? <NavTabs linkMap={linkMap} /> : ''}</NavItemMd>
          <NavItemSm>{isSignedIn ? <NavSelect linkMap={linkMap} /> : ''}</NavItemSm>
        </NavItem>

        <NavItem className='optional'>
          <ButtonNew to={isSignedIn ? '/' : '/auth/signin'} onClick={onClick}>{isSignedIn ? 'Logout' : 'Login'}</ButtonNew>
          {(isSignedIn || location.pathname.includes('auth/')) ? '' : <ButtonNew to='/earlyaccess'>Early Access ➝</ButtonNew>}
          <ButtonMDB />
        </NavItem> */}

    </NavbarContainer>
  );
}
