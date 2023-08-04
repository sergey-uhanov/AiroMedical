import React, {useEffect, useState} from 'react';
import useBeerStore from "../Stores/BeerStore";
import fetchRecipes from '../API/listBear';
import SelectedRecipesStore from "../Stores/SelectedRecipesStore";
import {handleScroll} from '../Function/scrollUtils';
import handleContextMenu from '../Function/handleContextMenu';
import st from '../Style/card.module.css';
import RecipeCardForMouseCursor from '../Components/RecipeCardForMouseCursor'
import RecipeCardForTouchScreen from "../Components/RecipeCardForTouchScreen";


const Cards = () => {
    const {recipe, setRecipe} = useBeerStore();
    const [listBear, setListBear] = useState([]);
    const [visibleItems, setVisibleItems] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    const [isScrolling, setIsScrolling] = useState(false);
    const {pushSelectRecipe} = SelectedRecipesStore();
    const hasTouchScreen = 'ontouchstart' in window

    useEffect(() => {
        fetchRecipes().then((data) => {
            setRecipe(data);
        });


    }, []);

    useEffect(() => {
        setListBear(recipe);
    }, [recipe]);

    useEffect(() => {
        if (currentPage > 1) {
            fetchRecipes(currentPage).then((data) => {
                setRecipe([...recipe, ...data]);
            });
        }
    }, [currentPage]);

    function onContextMenuHandler(event, id) {
        handleContextMenu(event, id, pushSelectRecipe, listBear);
    }


    function handleScrollEvent(event) {
           handleScroll(event, setVisibleItems, setCurrentPage, recipe, visibleItems);

    }

    return (
        <div className={st.wrapper}>
            <div className={st.customScrollbar} id="maine" onScroll={handleScrollEvent}
                 style={{overflowY: 'scroll', height: '93vh'}}>
                {listBear
                    .filter((recipe, indexItem) => visibleItems - 15 <= indexItem && visibleItems > indexItem)
                    .map((recipe) => (
                        hasTouchScreen
                            ? <RecipeCardForTouchScreen key={recipe.id} recipe={recipe}
                                                        onContextMenuHandler={onContextMenuHandler}/>
                            : <RecipeCardForMouseCursor key={recipe.id} recipe={recipe}
                                                        onContextMenuHandler={onContextMenuHandler}/>
                    ))}
            </div>
        </div>
    );
};

export default Cards;

