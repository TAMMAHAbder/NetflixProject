import styled from "styled-components/macro";


export const FeatureContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#fff;
    margin:30px 0;
    
`


export const Title=styled.h1`
    font-size: 70px;
    font-weight: 700;
    text-align:center;
    @media (max-width:780px){
        font-size:35px;
    }
`    

export const Description=styled.h3`
    font-size: 48px;
    font-weight: 700;
    text-align:center;
    margin:0;
    @media (max-width:780px){
        font-size:20px;
    }
`

