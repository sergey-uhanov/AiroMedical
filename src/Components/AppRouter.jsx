import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainePage from "./MainePage";
import RecipeDetails from "./RecipeDetails";
import SelectList from "./SelectList";


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/maine' element={<MainePage/>}/>
            <Route path='/recipe/:id' element={<RecipeDetails/>}/>
            <Route path='/select-list' element={<SelectList/>}/>
            <Route path='/*' element={<MainePage/>}/>
        </Routes>
    );
};

export default AppRouter;
