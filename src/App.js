import './App.css';
import Employee from './component/Employee';
function App() {
  const showEmployees = true;

  return (
    <div className="App">
      {console.log("inside the return")}
      {
       showEmployees ? (
        <>
       <Employee/>
        <Employee/>
         <Employee/>
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
