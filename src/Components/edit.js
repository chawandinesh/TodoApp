import React, { Component } from "react";
import { Button, Input } from "antd";
import _ from "lodash";

class Edit extends Component {
  state = {
    val: this.props.value,
    input: "something",
  };

  handleChange = (e) => {
    const todos = this.props.todos;
    todos[this.props.index] = e;
    if (_.uniq(todos).length !== todos.length) {
      alert("value Exists,Please enter different todo");
    } else {
      this.props.addtodobyindex(todos);
    }
    this.setState({
      val: "",
      input: "",
    });
  };
  render() {
    return this.state.input ? (
      <div>
        <Input
          placeholder="Basic usage"
          size="middle"
          style={{ width: "300px" }}
          value={this.state.val}
          onChange={(e) =>
            this.setState({
              val: e.target.value,
            })
          }
        />

        <Button
          type="primary"
          onClick={(e) => this.handleChange(this.state.val)}
        >
          add
        </Button>
      </div>
    ) : (
      ""
    );
  }
}

export default Edit;
