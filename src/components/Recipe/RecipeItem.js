import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteRecipe } from "../../actions/RecipeActions";

class RecipeItem extends Component {

    onDeleteClick(recipeId){

        this.props.deleteRecipe(recipeId);

    }

    render(){
        const { recipe } = this.props;
        return(
            <div className="card mb-1 bg-light">
            <div>
                <h2>
                    Name: {recipe.name}
                </h2>
            </div>
            <div className="card-header text-primary">
                ID: { recipe.id}
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">Summary: { recipe.summary }</h5>
                <p className="card-text text-truncate ">
                </p>
                <Link to='/AddRecipe' className="btn btn-primary" >
                    View / Update
                </Link>

                <button className="btn btn-danger ml-4"
                    onClick={this.onDeleteClick.bind(this, recipe.id)}
                    >
                    Delete
                </button>
            </div>
        </div>
        );
    }
}

RecipeItem.propTypes = {
    deleteRecipe: PropTypes.func.isRequired
}

export default connect(null, { deleteRecipe }) ( RecipeItem );