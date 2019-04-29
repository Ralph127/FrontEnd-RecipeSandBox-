import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './css/RecipeBoard.css';
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        try {
            this.props.history.push("/recipes");
        } catch (e) {
            alert(e.message);
        }
    };

    render() {
        return (
            <div className="containerBoard" >
                <div className="heading">
                    <h1>Class Web Application</h1>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <h2> Email </h2>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup controlId="password" bsSize="large">
                        <h2> Password </h2>
                        
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"/>
                        </FormGroup>
                    
                    <Button
                        block
                        bsSize="large"
                        disabled={!(this.state.email.length > 0 && this.state.password.length > 0)}
                        type="submit">Login</Button>
                </form>
            </div>
        );
    }
}