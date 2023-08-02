const fetchRecipes = async (page = 1) => {
    try {
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
};

export default fetchRecipes;
