import EditEmployee from "./EditEmployee";

/**
 * Employee component that displays individual employee card
 * @param {Object} props - Component props
 * @param {number} props.id - Employee ID
 * @param {string} props.name - Employee name
 * @param {string} props.role - Employee role
 * @param {string} props.img - Employee image URL
 * @param {Function} props.updateEmployee - Function to update employee data
 * @returns {JSX.Element} Employee card component
 */
function Employee(props){
    return (
    <div className="min-w-[350px] max-w-[350px] m-2 py-8 px-8 max-w-sm space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
        
        <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" 
        src={props.img} alt={props.name} />

        <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                    {props.name}
                    </p>
                    <p className="text-slate-500 font-medium">
                    {props.role}
                    </p>
                </div>
                <EditEmployee 
                id = {props.id}
                name ={props.name} 
                role = {props.role}
                updateEmployee = {props.updateEmployee}/>
        </div>
    </div>
    )
}

export default Employee;