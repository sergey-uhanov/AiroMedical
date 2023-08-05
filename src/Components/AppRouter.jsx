import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Route, Routes} from "react-router-dom";
import MainePage from "../Page/MainePage";
import RecipeDetails from "../Page/RecipeDetails";
import SelectList from "../Page/SelectList";


const AppRouter = () => {
    return (
                <Routes>
                    <Route  path='/maine' element={<MainePage/>}/>
                    <Route  path='/recipe/:id' element={<RecipeDetails/>}/>
                    <Route  path='/select-list' element={<SelectList/>}/>
                    <Route path='/*' element={<MainePage/>}/>
                </Routes>

    );
};

export default AppRouter;
