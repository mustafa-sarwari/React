import './index.css';
import Employee from './component/Employee';
import {useState} from "react";

/**
 * Main App component that manages employee data
 * Displays a list of employees with editable information
 * @returns {JSX.Element} The main application component
 */
function App() {
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

  /**
   * Updates an employee's information
   * @param {number} id - The unique identifier of the employee
   * @param {string} newName - The new name for the employee
   * @param {string} newRole - The new role for the employee
   */
  function updateEmployee(id, newName, newRole){
    const updatedEmployee = employees.map((employee) => {
      if(id === employee.id) {
        return  {...employee, name: newName, role: newRole};
      }
      return employee;
    });
    setEmployees(updatedEmployee);
  }


  const showEmployees = true;

  return (
    <div className="App ">
      {
       showEmployees ? (
      <>
          <div className='flex flex-wrap justify-center'>
            {
            employees.map((employee) => {
              return (
              <Employee
              key = {employee.id}
              id= {employee.id}
              name = {employee.name} 
              role = {employee.role}
              img = {employee.img}
              updateEmployee = {updateEmployee}
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
