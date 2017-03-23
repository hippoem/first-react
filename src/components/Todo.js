import React, {Component} from 'react';

export class Todo extends Component {

    state = {
        inputText: '',
    }

    handleChangeText = (event) => {
        this.setState({inputText: event.target.value});
    }

    render() {
        return (
            <div className="card clearfix">
                <div className="to-do-box">
                    <h1 className="title">To-do-list</h1>
                    <div className="form-box">
                        <input
                            className="input-todo"
                            onChange={this.handleChangeText}
                            value={this.state.inputText}
                            placeholder="what do you want to do?"
                            type="text"/>
                        <button className="bb-input button">Add</button>
                    </div>
                    <h2>{this.state.inputText}</h2>
                </div>
            </div>

        )
    }
}