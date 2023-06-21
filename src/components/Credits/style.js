import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
margin-top:30px ;
gap: 10px;
@media (max-width: 1000px) {
         
        min-width:10px;
          overflow:scroll;
           
            
    
           
            
        }

 
div{
    display: flex;
    flex-direction:column
}
p{
    color: #ffff;

}

img{
    height: 200px;
}
`

export const Titlee = Styled.h4`
    color: #fff;
    font-size:28px;
    font-weight:700 ;
`

