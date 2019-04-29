import axios from "axios";
import { GET_ERRORS, GET_RECIPES, DELETE_RECIPE, GET_RECIPE } from './types';

export const addRecipe = ( recipe, history ) => async dispatch => {
    try{
        await axios.post("http://localhost:8080/api/board", recipe);
        history.push("/recipes");

        dispatch({
            type:GET_ERRORS,
            payload: {}
        });

    } catch(error){
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data
        });
    }

};

export const getRecipes = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/board/all")

    dispatch({
        type: GET_RECIPES,
        payload:res.data
    });

};

export const deleteRecipe = recipeId => async dispatch => {
    if(window.confirm(`You are deleting Recipe ${recipeId}, are you sure you want to do this?`)) {

        await axios.delete(`http://localhost:8080/api/board/${recipeId}`);
        dispatch({
            type: DELETE_RECIPE,
            payload: recipeId
        });

    } 
};

export const getRecipe = (recipeId, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/board/${recipeId}`);
        
        dispatch ({
            type: GET_RECIPE,
            payload : res.data
        });

    } catch(error){
        history.push("/recipes")
    }
    
};


    

    