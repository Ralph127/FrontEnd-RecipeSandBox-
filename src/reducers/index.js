import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import RecipeReducer from "./RecipeReducer";

export default combineReducers ({
    //
    errors: errorsReducer,
    recipe: RecipeReducer
});