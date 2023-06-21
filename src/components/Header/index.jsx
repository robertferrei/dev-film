import { Containerr, Li, Menu } from "./styles"
import { Link, useLocation } from 'react-router-dom'
import { useState } from "react"
function Header() {
    const { pathname } = useLocation()
    const[changeBackground, setChangeBachround] = useState(false)
    window.onscroll = () => {
        if( !changeBackground &&  window.pageYOffset> 150 ){
            setChangeBachround(true)
        }
        if(changeBackground && window.pageYOffset <=150){
            setChangeBachround(false)
        }
    }
    return (
        <Containerr changeBackground={changeBackground}>

            <h2></h2>
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/">home </Link>
                </Li>

                <Li isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Filmes</Link>
                </Li>

                <Li isActive={pathname.includes('series')}>
                    <Link to="/series">Series</Link>
                </Li>
            </Menu>
        </Containerr>
    )
}

export default Header