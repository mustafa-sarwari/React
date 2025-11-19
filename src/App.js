import './index.css';
import Employee from './component/Employee';
import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from './component/AddEmployee';
import EditEmployee from './component/EditEmployee';
import Header from "./component/Header";
import Employees from './pages/Employees';
import { BrowserRouter, Routers, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Header>
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Employees/>} />
        </Routes>
      </BrowserRouter>
    </Header>
  );
}

export default App;
