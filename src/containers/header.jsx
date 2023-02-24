import React from 'react'
import Header from '../components/header'
import * as ROUTES from "../constants/routes"
import logo from "../Netflix_2015_logo.svg"

const HeaderContainer = ({children}) => {
  return (
    <Header>
        <Header.Frame>
            <Header.Logo to={ROUTES.HOME} alt="NETFLIX" src={logo}/>
            <Header.ButtonLink to={ROUTES.SIGN_IN}>SIGN IN</Header.ButtonLink>
        </Header.Frame>
        {children}
    </Header>
  )
}

export default HeaderContainer