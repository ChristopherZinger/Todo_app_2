import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {TodoWrapper} from './components/TodoWrapper';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div>
    <TodoWrapper />
    </div>
  );
};


export default App;
