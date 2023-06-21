import styled from "styled-components";

export const Containerr = styled.div`
    min=height: 100px;
    z-index:99;
    position: fixed;
    top: 0;
    display: flex;
    background: black;
    width: 100%;
    
    justify-content:flex-end;
    align-items:flex-end;
    padding: 10px 50px;

    background-color:${props => props.changeBackground ? '#000':'transparent'} ;
    transition: background-color 0.5s ease-in-out;

    @media (max-width:1000px){
                    width: 100%;
                    display: flex;
                    justify-content:center;
                    align-items:center;

                    
                     }

     

`

export const Menu = styled.ul`
    display: flex;
    gap:50px;
 

    

   
    
    
    
`

export const Li = styled.li`
   list-style:none;
    font-size: 26;
   cursor:pointer;
   font-weight:50px;
position: relative;

   a{
        text-decoration:none;
        color: #fff;
    }

    &::after{
        content:'';
        height: 3px;
        width: ${(props) => (props.isActive ? '100%' : 0)};
        background:	#FF0000 ;
        position: absolute;
        bottom: -10px;
        left:0px;
        transition:width 0.5s ease-in-out;
        
 
    }

    &:hover::after{
        width: 100%;
    }
`



