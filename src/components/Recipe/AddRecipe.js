import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addRecipe } from "../../actions/RecipeActions";


class AddRecipe extends Component {
    
    
    constructor(){
        super()
        this.state = {
            name: "",
            summary: "",
            cuisine: "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }
      
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const newRecipe = {
            name: this.state.name,
            summary: this.state.summary,
            cuisine: this.state.cuisine
        }
        
        this.props.addRecipe(newRecipe, this.props.history);
    }
    
    render() {
        const { errors } = this.state;
        return (

            <div className="addRecipe">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to ="/recipes" className="btn btn-light">
                            Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add Recipe</h4>

                            <form onSubmit= { this.onSubmit }>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" name="name" placeholder="Recipe Name" value={this.state.name} onChange={this.onChange}/>
                                </div>
                                <p>{errors.summary}</p>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Summary" name="summary" value={this.state.summary} onChange={this.onChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" name="cuisine" value={this.state.cuisine} onChange={this.onChange}>
                                        <option value="">Select Recipe type</option>
                                        <option value="Italian">Italian</option>
                                        <option value="Mexican">Mexican</option>
                                        <option value="American">American</option>
                                    </select>
                                </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

AddRecipe.propTypes = {
    addRecipe: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { addRecipe }) (AddRecipe);