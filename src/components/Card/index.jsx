 
import { getImages } from "../../containers/Home/utils/getimages"
import { Caixa} from "./styles"
 

function card({ item}) {


    return (
        <Caixa>
             <img src={getImages(item.poster_path || item.profile_path || '')} alt="" />
                                <h3> {item.title || item.name || ''}</h3>
        </Caixa>
    )
}

export default card