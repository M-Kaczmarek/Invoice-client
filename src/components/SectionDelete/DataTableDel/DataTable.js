import React from 'react';


const DataTableDel = (props) => {

    return (
        <tr>
            <th scope="row"  > <button className="btn btn-primary" onClick={props.fun}>{"X"}</button></th>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.invoices.length}</td>
            <td>{props.data.internationalTransport.toString()}</td>
        </tr>
    )
}

export default DataTableDel;