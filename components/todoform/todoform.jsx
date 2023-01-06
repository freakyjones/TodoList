import React, { Component } from "react";
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      isActive: false,
    };
  }
  handleSubmit = () => {};
  handelChange = () => {};
  render() {
    return (
      <div className="todoform">
        <form onSubmit={this.handleSubmit}>
          <div className="todoform__control">
            <input
              type="text"
              placeholder="enter your task"
              onChange={this.handleChange}
            />
          </div>
          <button type="button">Add</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
