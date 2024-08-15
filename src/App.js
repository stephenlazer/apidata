import React from "react";
import Table from "./Table";

class App extends React.Component{
    render(){
      return(
        <div className="header-container">
          <h1>Data Table 1</h1>
          <Table/>
            <h1>Data Table 2</h1>
          <Table/>
        </div>
      )
    }

}

export default App;