import { useState } from "react"

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPopularSeries, getTopAiring, getTopSeries } from "../../../../services/getData"
import Slider from "../../../components/Slider"
import { Container } from "./styles"



function Series() {

    const { id } = useParams()

    const [topSeriesSeries, setTopSeriesSeries] = useState(id)
    const [topPopularesSeries, setTopPopularesSeries] = useState(id)
    const [topAring, setTopAring] = useState(id)

    useEffect(() => {

        async function getAllData() {


            Promise.all([
                getTopSeries(id),
                getPopularSeries(id),
                getTopAiring(id)


            ])



                .then(([serie, popular, aring]) => {


                    setTopSeriesSeries(serie)
                    setTopPopularesSeries(popular)
                    setTopAring(aring)

                })


                .catch((error) => console.error)


        }
        getAllData()


    }, [])





    return (

        <>
            <Container>


            </Container>



            {topSeriesSeries && <Slider info={topSeriesSeries} title={'top series'} />}
            {topPopularesSeries && <Slider info={topPopularesSeries} title={'Series populares'} />}

            {topAring && <Slider info={topAring} title={'exibindo hoje'} />}




        </>


    )
}

export default Series


