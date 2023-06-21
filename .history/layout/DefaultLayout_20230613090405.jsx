 
import { Outlet } from "react-router-dom";
import Header  from "../src/components/header";


function DefaultLayout(){
    return(
        <div>
        <Header/>
        <Outlet/>
        </div>
    )
}

export default DefaultLayout