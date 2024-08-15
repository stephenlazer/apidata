
import React from "react"

// Functional Component or Simple Component
const TableHeader = ()=>{
    return(
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
        </tr>
    </thead>
    )
}
const TableBody = ()=>{
    return(
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>28</td>
            <td>Software Engineer</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>34</td>
            <td>Graphic Designer</td>
        </tr>
        <tr>
            <td>Emily Johnson</td>
            <td>25</td>
            <td>Data Analyst</td> 
        </tr>
    </tbody>
    )
}
// Class Component
class Table extends React.Component {
    render(){
        return(
            <table className="data-table" border="0" cellpadding="5" cellspacing="0">
               <TableHeader/> 
                <TableBody/>
            </table>

        )
    }
}
export default Table;