import React, { Component } from "react";
import { Button } from "antd";
import EditForm from "./edit";

class Todos extends Component {
  state = {
    index: "",
    value: ""
  };

  deleteTodo = e => {
    this.props.removeTodo(e, this.props.allTodos);
  };

  EditTodo = (ind, val) => {
    this.setState({
      index: ind,
      value: val
    });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            fontWeight: "bold",
            padding: "40px",
            border: "red",
            fontSize: "30px"
          }}
        >
          <ol>
            <p>Added Items:</p>

            {this.props.allTodos.map((value, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <li>{value}</li>{" "}
                  <Button
                    type="danger"
                    onClick={e => {
                      this.deleteTodo(index);
                    }}
                    style={{ margin: "0 10px" }}
                  >
                    delete
                  </Button>
                  <Button
                    type="primary"
                    onClick={(e, a) => {
                      this.EditTodo(index, value);
                    }}
                    style={{ margin: "0 10px" }}
                  >
                    edit
                  </Button>
                  {this.props.allTodos.indexOf(value) === this.state.index ? (
                    <EditForm
                      todos={this.props.allTodos}
                      index={this.state.index}
                      value={this.state.value}
                      todofn={this.props.todofn}
                      removetodo={this.props.removeTodo}
                      addtodobyindex={this.props.addtodobyindex}
                    />
                  ) : null}
                </div>
              );
            })}
          </ol>
        </div>
        <div
          style={{
            fontWeight: "bold",
            padding: "40px",
            border: "red",
            fontSize: "30px",
            color: "lightgray"
          }}
        >
          <ul>
            Deleted Items:
            {this.props.removedTodos.map((value, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <li>{value}</li>{" "}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todos;
