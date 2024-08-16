
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
const TableBody = (props) =>{
    const {dataTableValueSending} = props;
    const rows = dataTableValueSending.map((dataValue, index) =>{
        return (
        <tr key={index}>
            <td>{dataValue.name}</td>
            <td>{dataValue.age}</td>
            <td>{dataValue.occupation}</td>
        </tr>
        );
    });
    return <tbody>{rows}</tbody>;
};
// Class Component
class Table extends React.Component {
    render(){
        const {dataTableValueSending} = this.props;
        return(
            <table className="data-table"> 
               <TableHeader/> 
                <TableBody dataTableValueSending={dataTableValueSending}/> 
            </table>

        )
    }
}
export default Table;