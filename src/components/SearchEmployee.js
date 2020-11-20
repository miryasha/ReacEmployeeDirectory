import React, {useState} from 'react'
import EmployeeList from './EmployeeList';
import employees from "./employees.json";


function SearchEmployee() {
    

    const [mySearch, setMySearch] = useState ( {search: "" });
  
        
    return (
        <div>
             <form class="row">
                 <div class="col-12">
                    { }
                        <EmployeeList />
                 </div>
                    
            </form> 
            {}
        </div>
    )
}

export default SearchEmployee
// onKeyDown={}
