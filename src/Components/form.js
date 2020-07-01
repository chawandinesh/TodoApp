import React, { Component } from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import "../App.css";

import Todos from "./todos";
class Form extends Component {
  state = {
    inputValue: "",
  };
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  addTodo = () => {
    const todos = this.props.state.todos;
    if (todos.indexOf(this.state.inputValue) !== -1) {
      alert("value Exists,Please enter different todo");
    } else {
      this.props.todo(this.state.inputValue);
    }
    this.setState({
      inputValue: "",
    });
  };
  render() {
    return (
      <div style={{ padding: "40px" }}>
        <Input
          placeholder="Basic usage"
          size="middle"
          style={{ width: "300px" }}
          onChange={(e) => {
            this.handleChange(e);
          }}
          value={this.state.inputValue}
        />

        <Button type="primary" onClick={this.addTodo}>
          add
        </Button>

        <div>
          <Todos
            allTodos={this.props.state.todos}
            removedTodos={this.props.state.removedTodos}
            removeTodo={this.props.removetodo}
            todofn={this.props.todo}
            addtodobyindex={this.props.addtodobyindex}
          />
        </div>
      </div>
    );
  }
}

export default Form;
