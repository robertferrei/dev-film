import styled from 'styled-components'


export const Containerrr = styled.div`
    Background:#000;
    width: 50%;
    display: flex;
    justify-content:center;
    align-items:center;
    position: fixed;
    padding: 50px;
    max-width:1200px;

    border: none;
        @media (max-width: 1000px) {
           
            width: 400px;
            
        }

    iframe{
        border: none;
        @media (max-width: 1000px) {
           
            width: 400px;
           
            
        }

    }
    
    

`

export const Background = styled.div`
     display: flex;
     justify-content :center;
     align-items:center;
     height: 100vh;
     width: 100vw;
     background-color:rgba( 0, 0, 0, 0.7) ;
     position: absolute;
     z-index:999;

     @media (max-width: 1000px) {
           
            width: 550px;
     }
     div{
        color:blue;
        display: flex;
        flex-direction:column-reverse;
        margin-bottom:50px;
        
     }
     h3{
        color:blue;
        background: white;
        border-radius:30px;
        font-size:27px;
        font-weight:120;
        cursor:pointer;
        
        &:hover{
            opacity:0.2
        }

     }

`
