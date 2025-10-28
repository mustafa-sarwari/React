import './index.css';
import Employee from './component/Employee';
import {useState} from "react";
import { v4 as uuidv4 } from "uuid"; 
function App() {
  const [role, setRole] = useState("Dev");
  const [employees, setEmployees] = useState([
    {
      name: "Sarah",
      role:"CEO",
      img:"../../photo/img (1).jpg"
    },
    {
      name:"Deedee",
      role:"CTO",
      img:"../../photo/img (2).jpg"
    },
    {
       name:"Johon",
      role:"OTO",
      img:"../../photo/img (3).jpg"
    },
    {
      name: "Ana", 
      role: "Director",
      img:"../../photo/img (4).jpg"
    },
    {
      name: "Fatima",
      role:"General Manager",
      img:"../../photo/img (1).webp"
    },
    {
      name: "Martin",
      role: "General Product Manger",
      img: "../../photo/img (2).webp"
    },
    {
      name: "Ellie",
      role:"General Operation Manager", 
      img:"../../photo/img (3).webp"
    }

    ]);
  const showEmployees = true;

  return (
    <div className="App ">
      {console.log("inside the return")}
      {
       showEmployees ? (
      <>
         <input type="text" onChange={ (e) => {
            console.log(e.target.value);
            setRole(e.target.value);
            }} 
          />
          <div className='flex flex-wrap justify-center'>
            {
            employees.map((employees) => {
              console.log(uuidv4())
              return (<Employee
              key = {uuidv4()}
              name = {employees.name} 
              role = {employees.role}
              img = {employees.img}
              /> );
            })
            }
          </div>
      </>
      ):(
           <p>You cannot see all employees</p>
      )}  
    </div>
  );
}

export default App;
