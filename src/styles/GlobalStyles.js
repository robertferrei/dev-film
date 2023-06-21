import {createGlobalStyle} from 'styled-components'  //estilos globais do nosso site 

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline:none;
        text-decoration:none;
        font-family: 'Montserrat', sans-serif;

        @media (max-width:900px){
                   max-width:900px;
                    

        }
    }

body{
    background:#000

    
}
`