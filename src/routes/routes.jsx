import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../../layout/DefaultLayout'
import Detail from '../containers/Detail'
import Home from '../containers/Home'
import Movies from '../containers/Home/Movies'
import Series from '../containers/Home/Series'

function Router() {
    return (
        <Routes>

            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/filmes" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/Detalhe/:id" element={<Detail />} />
            </Route>

        </Routes>
    )
}
export default Router


