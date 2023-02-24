
import React, {  createContext, useContext, useState } from "react";
import {Container , Inner, Title, Frame, Item, Header, Body} from './styles/accordion'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';


const toggleContext = createContext();

export default function Accordian({children,...restProps}){
    return (<Container {...restProps}>
                <Inner>
                    {children}
                </Inner>
            </Container>)
}

Accordian.Title= function AccordianTitle({children,...restProps}){
    return (<Title {...restProps}>{children}</Title>)
}

Accordian.Frame= function AccordianFrame({children,...restProps}){
    return (<Frame {...restProps}>{children}</Frame>)
}

Accordian.Item= function AccordianItem({children,...restProps}){
    const [toggleShow,setToggleShow]=useState(false)

    return (<toggleContext.Provider value={{toggleShow,setToggleShow}}>
                <Item {...restProps}>{children}</Item>
            </toggleContext.Provider>)
}

Accordian.Header= function AccordianHeader({children,...restProps}){
    const { toggleShow,setToggleShow }=useContext(toggleContext)

    return (<Header onClick={()=>setToggleShow((prevState)=>!prevState)} {...restProps}>
                {children}
                {toggleShow?(<CloseIcon style={{ fontSize: 35 }}/>):(<AddIcon style={{ fontSize: 35 }}/>)}
            </Header>)
}

Accordian.Body= function AccordianBody({children,...restProps}){
    const { toggleShow }=useContext(toggleContext)
    return toggleShow? (<Body {...restProps}>{children}</Body>) : null
}