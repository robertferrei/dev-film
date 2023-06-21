import  styled from 'styled-components'


export const Container = styled.div`
    display: flex;
  margin-top: 30px;
  gap: 10px;

  @media (max-width: 1000px) {
    display: none;
        
        }
  

  span{
    padding: 8px 17px;
    border:  2px solid #fff;
    border-radius:30px;
    font-size:12px;
    font-weight: 600;
    background-color:#0f0f0f;
    display: flex;
    align-items:center;
    justify-content:center;
    color: #fff;
  
  }
`

 
 