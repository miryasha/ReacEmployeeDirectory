import React, {useState} from 'react'
import EmployeeInfo from "./EmployeeInfo";
import employees from "./employees.json";


function EmployeeList(props) {

    const employeeListStyle = {
        colborder: {border: '1px solid lightgrey'},
        listtype: {listStyleType: 'none'},
        imgcontainer: {},
        img: {height: '50%', border: '1px solid blue'}
    }

    const [searchInput, setSearchInput] = useState( {search:''} );
    const [displayEmployeeList, setDisplayEmployeeList] = useState(  employees );

    function handleInputChange (e) {
        e.preventDefault();
        const newInput = e.target.value
        setSearchInput({search: newInput})
                   
        if( newInput.length>1){
            // console.log(displayEmployeeList);
            // console.log(employeename);
            const filteredEmployeeList = employees.filter((employee) => {
                return employee.name.toLowerCase().indexOf( searchInput.search.toLowerCase() ) === 0;
            })
            // console.log(filteredEmployeeList);    
            setDisplayEmployeeList( filteredEmployeeList );
        } else {
                setDisplayEmployeeList( [] );
        }
    };

    function handleSort(e){
        e.preventDefault();
        console.log( 'i am clicked')
        let employeeList = [ ...displayEmployeeList ];
        setDisplayEmployeeList(employeeList.reverse())
        console.log(displayEmployeeList);
    }
    
    return (

        <div>
            <form>
                <div class="input-group p-3">
                    <input type="text" class="form-control" value={searchInput.search} placeholder="Search Employee by Name" onChange={handleInputChange} />
                </div> 
            </form>
            <div class="row justify-content-center">
                 <div class="col-2">
                    <button style={{backgroundColor: "blue", padding:"5px", paddingLeft:"5px"}} onClick={handleSort}>Sort By Id</button>
                 </div>       
            </div>
            
            {/* <div>
                
            </div> */}
            <EmployeeInfo displayEmployeeList={displayEmployeeList} />
        </div>    

    );
}


export default EmployeeList
