import styled from "styled-components/macro";





export const Background=styled.div` 
    background-image: url(${({src})=>src?`../images/misc/${src}.jpg`:`../images/misc/home-bg.jpg`});
    background-size: cover;
    height: 80vh;
    border-bottom: 8px solid #222;
    
`

export const Container=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20px 50px;
    color: #fff;    
    

    @media (max-width:780px){
        padding:20px;
}
`

export const Logo=styled.img`
    fill: #e50914;
    width: 200px;
    height: auto;

@media (max-width:780px){
    width:100px;
}
`

export const Button=styled.button`
 background-color: #e50914;
    border: none;
    color: #fff;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

:hover {
    background-color: #b40611;
    }
 @media (max-width:780px){
    font-size: 14px;
    padding:12px;
}
`

