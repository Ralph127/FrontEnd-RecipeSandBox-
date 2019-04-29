import { GET_RECIPES, DELETE_RECIPE, GET_RECIPE } from "../actions/types";

const initialState = {
    recipes: [],
    recipe: {}
};

export default function(state = initialState, action) {
    switch(action.type){
        
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            };

        case GET_RECIPE:
            return {
                ...state,
                recipe: action.payload
            };

        case DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter(recipe =>
                    recipe.id !== action.payload
                    )
            };

        

        default:
        
            return state;
    }
}