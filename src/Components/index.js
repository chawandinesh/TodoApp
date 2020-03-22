import { connect } from "react-redux";
import Form from "./form";
import {
  changeInput,
  removeTodo,
  addTodoByIndex
} from "../redux/actions/formAction";

const mapStateToProps = store => {
  return {
    state: store
  };
};

const mapDispatchToProps = dispatch => {
  return {
    todo: e => dispatch(changeInput(e)),
    removetodo: (e, allTodos) => dispatch(removeTodo(e, allTodos)),
    addtodobyindex: todo => dispatch(addTodoByIndex(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
