import { Button, Background, Container, Logo } from "./styles/header"
import {Link as ReactRouterLink} from 'react-router-dom'

export default function Header({bg=true,children,...restProps}){

    return (bg?<Background {...restProps}>{children}</Background>:children)

}


Header.Frame= function HeaderFrame({bg=true,children, ...restProps}){

    return (<Container {...restProps}>{children}</Container>)
    
}

Header.Logo= function HeaderLogo({to,...restProps}){

    return ( <ReactRouterLink to={to}>
                    <Logo {...restProps} />
            </ReactRouterLink>   
)
}

Header.ButtonLink= function HeaderButtonLink({to,...restProps}){

    return (
    <ReactRouterLink to={to}>
        <Button {...restProps} />
    </ReactRouterLink>
    
    )
    }
