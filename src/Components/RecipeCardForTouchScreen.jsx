import React, {useEffect, useState} from 'react';
import st from "../Style/card.module.css";
import {Link} from "react-router-dom";
import SelectedRecipesStore from "../Stores/SelectedRecipesStore";




const RecipeCardForTouchScreen = ({recipe, onContextMenuHandler}) => {
    const { selectRecipe } = SelectedRecipesStore();
    const [listSelectRecipe, setListSelectRecipe] = useState(selectRecipe);
    useEffect(()=>{
        setListSelectRecipe(selectRecipe)
    },[selectRecipe])

    function checkIfFieldExists(arr, fieldName, targetValue) {
        return arr.some(obj => obj[fieldName] === targetValue);
    }
    return (<div key={recipe.id}>
        <div className={st.card} key={recipe.id}>
            <div className={st.text}>
                <div className={st.information}>
                    <div className={st.title}>
                        {recipe.name}

                    </div>
                    {recipe.description.length < 120 ? (<div>{recipe.description}</div>) : (
                        <div>{recipe.description.slice(0, 120)}...</div>)}
                    <div className={st.blockButton}>
                        <button
                            className={'btn'}
                            onClick={(event) => {
                                onContextMenuHandler(event, recipe.id);
                            }}
                        >
                            { checkIfFieldExists(listSelectRecipe, 'id',recipe.id)?"Del":'Add'}
                        </button>

                        <Link className={st.link} to={`/recipe/${recipe.id}`}>Look</Link>
                    </div>
                </div>
            </div>
            <img className={st.imgBeer} src={recipe.image_url} alt="beer"/>
        </div>
    </div>);
};

export default RecipeCardForTouchScreen;
