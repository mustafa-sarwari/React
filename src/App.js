import './App.css';
import Employee from './component/Employee';
import {useState} from "react";
function App() {
  const [role, setRole] = useState("dev");
  const showEmployees = true;

  return (
    <div className="App">
      {console.log("inside the return")}
      {
       showEmployees ? (
        <>
         <input type="text" onChange={ (e) => {
            console.log(e.target.value);
            setRole(e.target.value);
        }}></input>
       <Employee name = "Mustafa" role="intern"/>
        <Employee name= "Ahmad" role={role}/>
         <Employee name="Jhon"/>
          <Employee/>
           <Employee/>
           </>
      ):(
           <p>You cannot see all employees</p>
      )}  
    </div>
  );
}

export default App;
