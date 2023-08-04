import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import fetchRecipes from '../API/listBear';
import st from '../Style/recipeDetails.module.css';

const RecipeDetails = () => {
    const {id} = useParams();
    const [allDetails, setAllDetails] = useState({});
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetchRecipes().then((recipes) => setRecipe(recipes));
    }, []);

    useEffect(() => {
        setAllDetails(recipe.find((item) => item.id == id) || {});
    }, [recipe, id]);

    // Conditional rendering to ensure recipe is available before rendering
    if (!allDetails) {
        return <div>Loading...</div>;
    }



    return (
        <div className={st.container}>
            <div className={st.imgWrapper}>
                <img src={allDetails.image_url} alt={allDetails.name} className={st.image}/>
            </div>
            <div className={st.firstScreen}>

                <div className={st.info}>
                    <h2>{allDetails.name}</h2>
                    <p className={st.description}>{allDetails.description}</p>
                    <p>{allDetails.tagline}</p>

                    <p>ABV: {allDetails.abv}%</p>
                    <p>IBU: {allDetails.ibu}</p>
                    <p>First Brewed: {allDetails.first_brewed}</p>
                </div>


                <div className={st.ingredients}>
                    <h3>Ingredients:</h3>
                    <p>Malt:</p>
                    <ul>
                        {allDetails.ingredients &&
                            allDetails.ingredients.malt.map((malt,index) => (
                                <li key={malt.name +  index}>
                                    {malt.name} - {malt.amount.value} {malt.amount.unit}
                                </li>
                            ))}
                    </ul>
                    <p>Hops:</p>
                    <ul>
                        {allDetails.ingredients &&
                            allDetails.ingredients.hops.map((hop,index) => (
                                <li key={hop.name+  index}>
                                    {hop.name} - {hop.amount.value} {hop.amount.unit}, Add: {hop.add},
                                    Attribute: {hop.attribute}
                                </li>
                            ))}
                    </ul>
                    <p>Yeast: {allDetails.ingredients && allDetails.ingredients.yeast}</p>
                </div>

                <div className={st.foodPairing}>
                    <h3>Food Pairing:</h3>
                    <ul>
                        {allDetails.food_pairing &&
                            allDetails.food_pairing.map((food) => <li key={food}>{food}</li>)}
                    </ul>
                </div>

                <p>Brewer's Tips: {allDetails.brewers_tips}</p>
                <p>Contributed By: {allDetails.contributed_by}</p>
            </div>

        </div>
    );
};

export default RecipeDetails;
