import React, { Component } from "react";
import { Button, Input } from "antd";
import _ from "lodash";

class Edit extends Component {
  state = {
    val: this.props.value,
    input: "something"
  };

  handleChange = e => {
    const todos = this.props.todos;
    todos[this.props.index] = e;
    console.log(todos);
    if (_.uniq(todos).length !== todos.length) {
      alert("value Exists,Please enter different todo");
    } else {
      this.props.addtodobyindex(todos);

      console.log(todos);
    }
    this.setState({
      val: "",
      input: ""
    });
  };
  render() {
    console.log(this.props.index, this.props.value);
    return this.state.input ? (
      <div>
        <Input
          placeholder="Basic usage"
          size="middle"
          style={{ width: "300px" }}
          value={this.state.val}
          onChange={e =>
            this.setState({
              val: e.target.value
            })
          }
        />

        <Button type="primary" onClick={e => this.handleChange(this.state.val)}>
          add
        </Button>
      </div>
    ) : (
      ""
    );
  }
}

export default Edit;
