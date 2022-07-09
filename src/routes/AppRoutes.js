import React from 'react'
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';

import Inicio from '../pages/Inicio'
import FormBus from '../pages/FormBusHab'
import ReservaR from '../pages/ReservaRealizada'




function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} ></Route>
                <Route path='/busquedaHab' element={<FormBus />} ></Route>
                <Route path='/reservaRealizada' element={<ReservaR />} ></Route>

               
                <Route path='/VirtuosaCrud/*' element={<Navigate to="/" />}></Route>

                <Route path='/VirtuosaCrud/home' element={<Navigate to={"/VirtuosaCrud/"} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes