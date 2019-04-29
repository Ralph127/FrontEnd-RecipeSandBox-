import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeItem from "./Recipe/RecipeItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipes } from "../actions/RecipeActions";
import './css/RecipeBoard.css';
class RecipeBoard extends Component {

    constructor(props){
        super(props);
        this.state = {
            recipes : props.recipes
        }
    }
    componentWillMount(){
        this.props.getRecipes();
    }

    compountDidMount(){
        this.props.getRecipes();
    }

    render(){
        
        const { recipes } = this.props.recipes;
        let mexican = [];
        let italian = [];
        let american = [];

        const BoardAlgorithm = recipes => {
            if(recipes.length < 1) {
                return (
                    <div>
                        No Recipes
                    </div>
                )
            } else {
                
                const toRecipes = recipes.map(recipe => (
                    <RecipeItem key ={ recipe.id } recipe = { recipe }/>
                ));

                for(let i = 0; i < toRecipes.length; i++){
                    if(toRecipes[i].props.recipe.cuisine === "Italian"){
                        italian.push(toRecipes[i]);
                    } else if (toRecipes[i].props.recipe.cuisine === "American") {
                        american.push(toRecipes[i]);
                    } else if (toRecipes[i].props.recipe.cuisine === "Mexican"){
                        mexican.push(toRecipes[i]);
                    }
                }

                return (
                    <React.Fragment>
                    </React.Fragment>
                )
            }
        }

        BoardAlgorithm(recipes);

        return(
            <div>
            <Link to ="/addRecipe" className="btn btn-primary mb-3">
            <i> Create Recipe</i>
            </Link>
            <br />
            <hr />
            <div className="containerBoard">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>Italian</h3>
                            </div>
                        </div>
                        
                        {
                            italian
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>Mexican</h3>
                            </div>
                        </div>
                        {
                            mexican
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>American</h3>
                            </div>
                        </div>
                        {
                            american
                        }
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


RecipeBoard.propTypes = {

    getRecipes: PropTypes.func.isRequired,
    recipes: PropTypes.object.isRequired

};

const mapStateToProps = (state) => ({

    recipes: state.recipe

});

export default connect( mapStateToProps , { getRecipes }) ( RecipeBoard );