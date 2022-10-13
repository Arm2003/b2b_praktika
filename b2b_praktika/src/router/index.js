import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "../components/menu"
import Utest_baxadrich from "../components/utest_baxadrich"

function Router() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Utest_baxadrich />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
    </>)
}

export default Router