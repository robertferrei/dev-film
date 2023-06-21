import Styled, { styled, keyframes } from 'styled-components'

const scale = keyframes`
    
    from{
        transform: scale(0)
    }
    to{
        transform: scale(1)
    }
`

export const Background = Styled.div`
    background-image:url( ${(props) => props.img}  ) ;
    height:100vh;
    background-position:center ;
    background-size:cover ;
    display:flex;
    align-items:center;
    justify-content:center;

    @media (max-width: 1000px) {
        background-size:400% ;
        background-repeat: no-repeat;
        width: 100%;
        
       
      
             

}
     

    &::before{
        content: '';
        position: absolute;
        top:0;
        left:0;

        width:100%;
        height:100%;

        background-color:rgba(0,0,0,0.5) ;

        @media (max-width: 1000px) {
            width:10px ;
        }
    }

`
export const Container = Styled.div`
        display: flex;
        justify-content:space-around;
        align-items:center
        height: 100%;
        max-width:1500px;

        @media (max-width:1000px){
                  display: ;
                     }

      

`
export const Info = Styled.div`
        z-index:1;
        padding:20px;
        width: 50%;

        @media (max-width:1000px){
                    display: flex;
                     
                     }
        

    h1{
        font-size: 45px;
        font-weight:700 ;
        color: #fff;

        @media (max-width:1000px){
                    display: none;
                     
                     }

         
    }
    p{
        font-size: 20px ;
        font-weight:500;
        color: #fff;
        margin-top:30px
        margin-bottom:21px;

        @media (max-width:1000px){
                display: none;
                min-width:300px;
                margin-left:300px
            
                    
                     
                     }
    }

    
    
`
export const Poster = styled.div`

 
z-index:99;
     img{
         width: 400px;
          
         border-radius:30px;
        
         
         animation: ${scale} 0.6s linear;

         @media (max-width:1000px){
                    width: 150px;
                    
                   
                    
                    
                     }
     }

   

`