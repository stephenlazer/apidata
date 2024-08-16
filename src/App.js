import React from "react";
import Table from "./Table";
import User from "./User";

// Pass Function as Props
function getData(){
  alert("User data display");
}

class App extends React.Component{
    render(){
      const dataTableValue = [
        {
            name: 'Johen',
            age: 8,
            occupation: 'Software Engineer'
        },
        {
            name: 'Jerome',
            age: 12,
            occupation: 'Frontend Developer'
        },
        {
            name: 'Imran',
            age: 34,
            occupation: 'Backend Developer'
        },
        {
          name: 'Husain',
          age: 32,
          occupation: 'AI Developer'
      }
    ];
    

      return(
        <div className="header-container">
          <h1>Data Table</h1>
          <Table dataTableValueSending={dataTableValue}/>  
          <User userDataPassing={getData}/>
        </div>
      )
    }

}



export default App;