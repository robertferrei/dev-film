import { getImages } from "../../containers/Home/utils/getimages"
import { Container, Titlee } from "./style"

function Credits({ credits }) {
    return (

        <>
            <Titlee>Créditos</Titlee>
            {credits && (
                <Container>
                    {credits.slice(0, 5).map(artista =>(
                        <div key={artista.id}>
                            <img src={getImages(artista.profile_path)} />
                            <p>{artista.original_name}</p>
                        </div>

                        
                    ))}
                </Container>

            )}
        </>
    )
}

export default Credits