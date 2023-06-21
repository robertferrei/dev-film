import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    
    from{
        transform: scale(0)
    }
    to{
        transform: scale(1)
    }
`

export const Background = styled.div`
   background-image:url(${(props) => props.image});
   height:50vh;
   background-position:center ;
   background-size:cover ;
   background-repeat:no-repeat;
   position: relative;

   border: none;
        @media (max-width: 1000px) {
          
        }
   

   &::before{
    content: '';
    position:absolute ;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0, 0.5); 

    
   
   }

   &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image:linear-gradient( to top,#0f0f0f,rgba(0,0,0,0)) ;

    
   }
`


export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items:flex-start;
    height: 100%;
    max-width:1500px;
    margin-top:-100px;


    @media (max-width: 1000px) {
              display: block;
              margin-top:-110px;
               
                
           
            
        }
 `


export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items:flex-start;
    height: 100%;
    z-index:99;
    
     
     img{
        
        width: 420px;
        border-radius:50px;
        box-shadow:rgb(100 100 111/20%) 0px 7px  29px 0px;
         
        animation: ${scale} 0.6s linear;
 
        @media (max-width: 1000px) {
          width: 200px;
          z-index:99;
            
        }
     }
`

export const Info = styled.div`
        padding: 20px;
        width: 50%;
        z-index:99;
        display: flex;
        align-items:flex-start;
        flex-direction:column ;

        @media (max-width: 1000px) {
           overflow: scroll;
           width: 100%;

            
        }
         
           
           
      

        h2{
            font-size:50px;
            font-weight:700;
            color: #fff;

            @media (max-width: 1000px) {
                font-size:50px;
               
                
           
            
        }
        }

        p{
            font-weight:700 ;
            color: #fff;
            margin-top:20px ;
            margin-bottom:20px ;

            @media (max-width: 1000px) {
            font-size:10px;
            
        }

        }

`

export const ContainerMovies = styled.div`
    display: flex;
    flex-direction:column ;
    align-items:center;
    justify-content:center;
    padding: 20px;
    width: 100%;

    div{
        display: flex;
        flex-direction:column ;
        max-width:1000px
        width: 100%;
        height: 100%;
        margin: 20px 0;

        @media (max-width: 1000px) {
          overflow:scroll;
          width: 100%;
           
            
        }
    }
    h4{
        color: #fff;
        font-size:20px;
        font-weight: 700;
        margin-bottom:10px;

        
    }

    iframe{
        border: none;

    }

`

export const Carrosel= styled.div`
    @media (max-width: 1000px) {
           overflow: scroll;
           width: 100%;

            
        }

`



