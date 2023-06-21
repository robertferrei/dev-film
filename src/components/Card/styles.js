import styled from 'styled-components'

export const Caixa = styled.div`

    display: flex;
    flex-direction:column ;
    justify-content:center;
    align-items:center;
    margin-left:20px;


    @media (max-width:1000px){
      margin-top:60px ;

      max-width:50%;
   
        
     }

            img{
                width: 300px;
                border-radius:30px;
                height: 100%;

                @media (max-width:1000px){
                    width: 200px;
                    height: 50%;
   
        
    }
            }

            h3{
            color: #fff;
            margin-top:15px;

            @media (max-width:1000px){
                    width: 200px;
            }
        }
`
