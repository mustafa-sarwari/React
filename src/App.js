import './index.css';
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
