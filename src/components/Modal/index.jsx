import { useState } from "react";
import { useEffect } from "react";
import api from "../../../services/api";
import { getMovieVideos, } from "../../../services/getData";
import { Background } from "./styles";
import { Containerrr } from "./styles";

function Modal({ movieId, setShowmodal }) {
    const [movie, setMovie] = useState()
    useEffect(() => {


        async function getTopMovies() {
          setMovie (await getMovieVideos(movieId))
        }
       
        getTopMovies()
    }, [])


    return (
        <Background onClick={() => setShowmodal(false)}>

            {movie && (
                < Containerrr >
                    <iframe src={`https://www.youtube.com/embed/${movie.key}`}
                        title='youtube video player'
                        height="500px"
                        width="100%"
                       
                    ></iframe>

                    <div>
                        <h3 onClick={() =>setShowmodal(false)}>X</h3>
                    </div>
                </Containerrr >
            )}
        </Background>
    )
}

export default Modal