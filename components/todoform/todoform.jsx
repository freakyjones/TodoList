import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { createTodo } from "../../slices/todoSlice";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      description: "",
      isActive: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("happening");
    this.props.dispatch(createTodo(this.state));
    this.setState({ id: "", description: "", isActive: false });
  };
  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, description: value, id: uuidv4() });
  };

  render() {
    console.log(this.props.todoList);
    return (
      <div className="todoform mt-6 ">
        <form
          onSubmit={this.handleSubmit}
          className="flex gap-3 justify-center my-auto"
        >
          <div className="todoform__control">
            <input
              type="text"
              name="description"
              placeholder="enter your task"
              value={this.state.description}
              onChange={this.handelChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todo.todoList,
});

export default connect(mapStateToProps)(TodoForm);
