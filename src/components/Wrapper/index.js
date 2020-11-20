import React from "react";
import "./style.css";

function Wrapper(props) {
  const wrapperStyle = {
  
  }
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div className="wrapper" style={wrapperStyle}>
              {props.children}
            </div>
          </div>
        </div>
      </div>
      
        
  
    </div>
  )
}

export default Wrapper;
