import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loggIn, loggOut } from "./slice/loginSlice";
import store from './store/configureStore';

const Root = ({ store }) => {
  return ( // Adicione o return aqui
    <Provider store={store}>
      <Router>
        <Route path="/" component={App}></Route> {/* Corrija a prop para "component" */}
      </Router>
    </Provider>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root store={store}></Root>
  </React.StrictMode>
);

