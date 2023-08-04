import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import st from '../Style/card.module.css';
import hover from "../Style/withHoverForCard.module.css";
import SelectedRecipesStore from "../Stores/SelectedRecipesStore";

const combinedClassNames = `${st.card} ${hover.card}`;





const RecipeCardForMouseCursor = ({recipe, onContextMenuHandler}) => {
    const { selectRecipe, pushSelectRecipe } = SelectedRecipesStore();
    const [listSelectRecipe, setListSelectRecipe] = useState(selectRecipe);
    useEffect(()=>{
        setListSelectRecipe(selectRecipe)
    },[selectRecipe])

    function checkIfFieldExists(arr, fieldName, targetValue) {
        return arr.some(obj => obj[fieldName] === targetValue);
    }

    return (
        <Link
                key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className={combinedClassNames} key={recipe.id}
                 onContextMenu={(event) => onContextMenuHandler(event, recipe.id)}

            >
                <div className={st.text}>
                    <div className={st.information}>
                        <div className={ checkIfFieldExists(listSelectRecipe, 'id',recipe.id)?st.select:st.noSelect}>{recipe.name} </div>
                        {recipe.description.length < 170
                            ? <div>{recipe.description}</div>
                            : <div>{recipe.description.slice(0, 270)}...</div>}
                    </div>
                </div>
                <img className={st.imgBeer} src={recipe.image_url} alt="beer"/>
            </div>
        </Link>
    );
};

export default RecipeCardForMouseCursor;
