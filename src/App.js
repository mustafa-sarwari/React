import './index.css';
import Employee from './component/Employee';
import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from './component/AddEmployee';
import EditEmployee from './component/EditEmployee';
import Header from "./component/Header";

function App() {
  const [role, setRole] = useState("Dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sarah",
      role:"CEO",
      img:"../../photo/img (1).jpg"
    },
    {
      id: 2,
      name:"Deedee",
      role:"CTO",
      img:"../../photo/img (2).jpg"
    },
    {
      id: 3,
      name:"Johon",
      role:"OTO",
      img:"../../photo/img (3).jpg"
    },
    {
      id: 4,
      name: "Ana", 
      role: "Director",
      img:"../../photo/img (4).jpg"
    },
    {
      id: 5,
      name: "Fatima",
      role:"General Manager",
      img:"../../photo/img (1).webp"
    },
    {
      id: 6,
      name: "Martin",
      role: "General Product Manger",
      img: "../../photo/img (2).webp"
    },
    {
      id: 7,
      name: "Ellie",
      role:"General Operation Manager", 
      img:"../../photo/img (3).webp"
    }

    ]);

  function updateEmployee(id, newName, newRole){
    const updatedEmployee = employees.map((employee) => {
      if(id == employee.id) {
        return  {...employee, name: newName, role: newRole};
      }
      return employee;
    });
    setEmployees(updatedEmployee);
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;

  return (
    <div className="App bg-gray-300 min-h-screen ">
      <Header />
      {
       showEmployees ? (
      <>
          <div className='flex flex-wrap justify-center my-2'>
            {
            employees.map((employee) => {
              const editEmployee = <EditEmployee
              id = {employee.id}
              name = {employee.name}
              role = {employee.role}
              updateEmployee = {updateEmployee}
               />
              return (
              <Employee
              key = {employee.id}
              id= {employee.id}
              name = {employee.name} 
              role = {employee.role}
              img = {employee.img}
              editEmployee = {editEmployee}
              /> );
            })
            }
          </div>
          <AddEmployee  newEmployee = {newEmployee}/>
      </>
      ):(
           <p>You cannot see all employees</p>
      )}  
    </div>
  );
}

export default App;
