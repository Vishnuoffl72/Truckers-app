import React from "react";
import "./Mappopup.css"

const Mappopup = (props) => {
  return (
    <main className="popup">
      <div className="container col-6 inner-popup">
        <div className="row">
          <div className="col-6">
            <h3>vishnu</h3>
          </div>
          <div>
            <button onClick={()=> props.close(false)}>Close</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mappopup;
