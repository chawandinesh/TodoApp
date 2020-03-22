import React from "react";
import "./App.css";
import Form from "./Components";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Form />
      </Provider>
    );
  }
}

export default App;
