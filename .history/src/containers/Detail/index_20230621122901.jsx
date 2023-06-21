import { useState } from "react"
import { useEffect } from "react"
import {
    getMovieByid,
    getMovieCredits, getMovieSimilar, getMovieVideos, getMovieVideosDetail
} from "../../../services/getData"
import { Background, Carrosel, Container, ContainerMovies, Cover, Info, } from "./styles"
import { useParams } from 'react-router-dom'
import Slider from '../../components/Slider'

import { getImages } from "../Home/utils/getimages"
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"


function Detail() {
    const { id } = useParams()


    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()
  

    useEffect(() => {

        async function getAllData() {
            console.log({ movieVideos })

            Promise.all([
                getMovieByid(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id),
                getMovieVideosDetail(id),



            ])
                .then(([movie, videos, credits, similar,detail ]) => {
                    console.log({  videos})
                    setMovie(movie)
                    setMovieVideos(videos)
                    setMovieCredits(credits)
                    setMovieSimilar(similar)
                    setMovieVideosDetail(detail)
                   


                })
                .catch((error) => console.error)



        }
        getAllData()
    }, [])


    return (
        <>
            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>

                        <Cover>
                            <img src={getImages(movie.poster_path)} alt="" />
                        </Cover>
                        <div>detalhe</div>

                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>

                            <Carrosel> 
                            <div><Credits credits={movieCredits} />
                            </div>
                            </Carrosel>
                        </Info>


                    </Container>

                    <ContainerMovies>

                        

                      



                    </ContainerMovies>
                    

{movieSimilar && <Slider info={movieSimilar} title={'filmes similares'} />}
                </>
            )}

        </>
    )
}

export default Detail