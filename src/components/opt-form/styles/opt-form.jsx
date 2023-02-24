
import styled from 'styled-components/macro';



export const Container= styled.div`
    display: flex;
    flex-direction:column;
    margin:0 auto;
    justify-content:center;
    align-items:center;
    padding-bottom:70px;
    
    `
export const Frame= styled.div`
    display:flex;
    width:60%;
    justify-content:center;
    max-width:1100px;
    align-items:center;
    
    @media(max-width:780px) {
            flex-direction:column;
    }
`

export const Title= styled.h2`
        color: #fff;
        font-size:20px;
        font-weight:400;
        text-align:center;
        @media(max-width:780px) {
        padding:0 10px; 
    }
    
`



export const Button=styled.button`
    border:none;
    background-color:#db0510;
    box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
    color: #fff;
    font-size:26px; 
    border-radius:5px;
    width:20%;
    padding:20px 0;
    font-weight:700;
    :hover{
        cursor:pointer;
        background-color:#f10b16;
    }
    :active{
        background-color:#bd111a;
    }
    
    @media(max-width:780px) {
        width:100%; 
        margin-top:5px;
    }
    
`


export const Input=styled.input`
    font-size:24px;
    border-color: #444444;
    border:1px solid;
    background-color: #44444494;
    color:white;
    height: 48px;
    padding: 10px 20px;
    margin:2%;
    border-radius:5px;
    width:40%;
    @media(max-width:780px) {
        width:100%; 
    }

`
