import React, { useEffect, useState } from 'react';
import ExternalRecipe from './ExternalRecipe';
import "./css/ExternalApi.css";
const Edamam = () => {


    const APP_ID = 'cc8877b9';
    const APP_KEY = 'cddc2186b9bd5dd8bc351df1cfc33e5b';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect( () => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    } 

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return(
        <div className="Edamam">
        <form onSubmit={getSearch} className="search-form">
            <input type="text" value={search} onChange={updateSearch}/>
            <button type ="submit">
                Search
            </button>
            </form>
            <div className="ExternalRecipes">
            
            {recipes.map(recipe => (
                <ExternalRecipe
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                />
            ))}
            </div>
        </div>
    )
}

export default Edamam;