import React from 'react';
import style from './css/ExternalRecipe.module.css';
const ExternalRecipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.ExternalRecipe}>
            <h1 >{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories {calories}</p>
            <img className={style.image}src={image}/>
        </div>
    );
}

export default ExternalRecipe;