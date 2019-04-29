import React, { Component } from "react";

export default class Home extends Component {


    handleBoard(event) {
        event.preventDefault();
        this.props.history.push("/recipes");
    }

    render() {
        return (
            <div className="Home">
                <h1>IST 361 Project</h1>
                <div className="buttons">
                    <form onSubmit={this.handleBoard}>
                        <input className='produceSelect' type='submit' value='Fruits'/>
                    </form>

            </div>
        </div>
        );
    }
}