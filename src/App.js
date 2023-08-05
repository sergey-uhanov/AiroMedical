import './reset.css';
import MainePage from "./Page/MainePage";
import {BrowserRouter} from 'react-router-dom';
import RecipeDetails from "./Page/RecipeDetails";
import AppRouter from "./Components/AppRouter";
import Menu from "./Components/Menu";
import React, {useEffect, useState} from 'react';
import Loader from "./Page/Loader";
import fetchRecipes from "./API/listBear";
import useBeerStore from "./Stores/BeerStore";




function App() {
    const [isLoading, setIsLoading] = useState(true);
    const {recipe, setRecipe} = useBeerStore();
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            fetchRecipes().then((data) => {
                setRecipe(data)})
        }, 3000);
    }, []);

    return (
        <div>
            {isLoading ? <Loader />
                : <BrowserRouter>
                    <Menu/>
                    <AppRouter/>
                </BrowserRouter> }
        </div>


    );
}

export default App;
