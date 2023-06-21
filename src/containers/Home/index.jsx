
import { Background, Container, Info, Poster, } from './styles.js'
import { useState, useEffect } from 'react'
import Button from '../../components/button'
import Slider from '../../components/Slider'
import { getImages } from './utils/getimages'
import Modal from '../../components/Modal'
import { useNavigate } from 'react-router-dom'
import { getPeople, getPopularSeries, gettMovies, getTopMovies, getTopSeries } from '../../../services/getData'


function Home() {


    const [showModal, setShowmodal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setTopopularSeries] = useState()
    const [People, setPeople] = useState()
    const navigate = useNavigate()



    useEffect(() => {
        //async function getAllData() {
        //importação filme popular servidor
        //chamadas api

        //console.time('time')
        //setMovie(await gettMovies())
        //setTopMovies(await getTopMovies())
        //setTopSeries(await getTopSeries())
        //setTopopularSeries(await getPopularSeries())
        //setPeople(await getPeople())

        //console.timeEnd('time')
        async function getAllData() {
            //importação filme popular servidor
            //chamadas api

            Promise.all([
                gettMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getPeople()

            ])
                .then(([movie, topMovies, topSeries, popularSeries, People]) => {

                    setMovie(movie)
                    setTopMovies(topMovies)
                    setTopSeries(topSeries)
                    setTopopularSeries(popularSeries)
                    setPeople(People)


                })
                .catch(error => console.error)



        }
        getAllData()
    }, [])




    return (


        <>
            {movie && (

                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowmodal={setShowmodal}></Modal>}

                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <div>
                                <Button onClick={() => navigate(`/Detalhe/${movie.id}`)} red={false}>Assista agora</Button>
                                <Button onClick={() => setShowmodal(true)} red={true} >


                                    Assista o trailer

                                </Button>
                            </div>

                        </Info>
                        <Poster>
                            <img alt="capa-do-filme" src={getImages(movie.poster_path)} />

                        </Poster>
                    </Container>
                </Background>
            )}


            {topMovies && <Slider info={topMovies} title={'top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'top Series'} />}
            {popularSeries && <Slider info={popularSeries} title={'Series Populares'} />}
            {People && <Slider info={People} title={'Pessoas populares'} />}



        </>
    )
}

export default Home


//https://image.tmdb.org/t/p/original/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg

