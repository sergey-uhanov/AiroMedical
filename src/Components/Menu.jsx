import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import st from '../Style/Menu.module.css';
import SelectedRecipesStore from '../Stores/SelectedRecipesStore'


const Menu = () => {

    const {selectRecipe} = SelectedRecipesStore()
    const [selectLIst, setSelectList] = useState(selectRecipe)

    useEffect(() => {
        setSelectList(selectRecipe);
    }, [selectRecipe]);
    return (

        <nav className={st.menuBlock}>
            <Link className={st.item} to={"/maine"}>Home page</Link>
            <Link className={st.item} to={"/select-list"}>Selected
                recipes {selectLIst.length ? `(${selectLIst.length})` : " "}</Link>

        </nav>

    );
};

export default Menu;
