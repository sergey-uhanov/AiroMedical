import React from 'react';
import st from "../Style/card.module.css";

import {Link} from "react-router-dom";

const RecipeCardForTouchScreen = ({recipe, onContextMenuHandler}) => {
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
                            Add
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
