import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  border-bottom: 1px solid #0c0a89;
  margin-bottom: 0;
`

const StyledToolbar = styled(Toolbar)`
  height: 75px;

  background-color: ${props => props.isonpath === 1 ? '#ffd343' : '#fff'};

  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 1;
  font-family: Barlow, sans-serif;

  @media screen and (max-width: 991px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0px 3%;
    webkitBoxPack: center;
    webkitJustifyContent: center;
    msFlexPack: center;
    justifyContent: center;
    webkitBoxAlign: center;
    webkitAlignItems: center;
    msFlexAlign: center;
    alignItems: center;
  }
`

const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: none;
  min-height: auto;
  margin-right: 0px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 0%;
  padding-left: 0%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  opacity: 1;
  font-family: Barlow, sans-serif;

  @media screen and (max-width: 991px) {
    width: 100%;
    max-height: 65px;
    max-width: 100%;
    min-height: 65px;
    padding-right: 0%;
    padding-left: 0%;
  }

  @media screen and (max-width: 767px) {
    min-height: auto;
  }
`

export default function NavbarContainer(props) {
  const location = useLocation();
  console.log('here')
  console.log(location.pathname)
  const path = location.pathname;
  const isOnPath = +((path == '/') || (path == '/learn') || (path == '/earlyaccess'));
  
  return (
    <StyledAppBar               
        position="sticky"
        elevation={0}
      >
        <StyledToolbar isonpath={isOnPath}>
          <Container>{props.children}</Container>
        </StyledToolbar>
    </StyledAppBar>
  )
}