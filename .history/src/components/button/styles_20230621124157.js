import styled, { css } from 'styled-components'

const buttonStyles = css`
    border: 3px solid #fff;
        background-color:transparent ;
        color: white;
        border-radius:30px;
        padding: 10px 20px;
        cursor:pointer;
        font-size:20px;
        font-weight:500;
        margin-top:30px ;
        margin-left:30px ;


 
           
        &:hover{
            color:red;
            background: #fff;

           
        }

       
`


export const ButtonWhite = styled.button`
${buttonStyles}
 
`

export const ButtonRed = styled.button`
@media (max-width:1000px){
       
    display:flex ;
    justify-content:center;
   width: 200px;
   margin-right:20px;
    
     }

    ${buttonStyles}

    

    background: red;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 /30%);

    &:hover{
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 /30%);
        background: red;
        color:#fff;
    }
`