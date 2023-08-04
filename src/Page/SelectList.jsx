import React, {useState, useEffect} from 'react';
import ls from '../Style/SelectList.module.css'
import SelectedRecipesStore from "../Stores/SelectedRecipesStore";
import {useStore} from 'zustand';
import st from "../Style/SelectList.module.css";


const SelectList = () => {
    const {selectRecipe, delSelectRecipe} = useStore(SelectedRecipesStore);

    let [selectList, setSelectList] = useState([])
    useEffect(() => {
        setSelectList(selectRecipe)
    }, [selectRecipe]);

    function del(id) {

        delSelectRecipe(id)
    }

    return (
        <div className={ls.sideList}>
            {selectList[0] ?
                selectList.map((item) => (
                    <div className={ls.card}
                         key={item.id}>
                        <div className={st.text}>
                            <div className={st.information}>
                                <div className={st.title}>{item.name}</div>
                                {item.description.length < 170
                                    ? <div>{item.description}</div>
                                    : <div>{item.description.slice(0, 170)}...</div>}
                                <button className={st.btn} onClick={() => del(item.id)}>Delete</button>
                            </div>

                        </div>
                        <img className={st.imgBeer} src={item.image_url} alt="beer"/>
                    </div>
                ))
                : <p className={ls.notItem}>No items selected yet</p>}

        </div>
    );
};

export default SelectList;
