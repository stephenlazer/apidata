import React from "react";
import Table from "./Table";

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
            name: 'Aspan',
            age: 20,
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
          <h1>Data Table 1</h1>
          <Table dataTableValueSending={dataTableValue}/>  
        </div>
      )
    }

}

export default App;