
import { Container } from "./styles"
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from '../Card'

function Slider({ info, title }) {

   
    return (
        <>
            <Container>
                <h2>{title}</h2>

                <Swiper grabCursor   //cursor de rolagem para direita 
                    spaceBetween={10}
                    slidesPerView={'auto'}  //quantidade de slides na tela como "automatico"
                    className="swiper"
                >
                    {info.map((item, index) => (

                        <SwiperSlide key={index}>
                            <Card  item={item}/>


                        </SwiperSlide>
                    ))}


                </Swiper>
            </Container>

        </>
    )
}

export default Slider