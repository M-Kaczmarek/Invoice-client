import React from 'react';

const DataTable = (props) => {
    return (
        <tr>
            <th scope="row">{"X"}</th>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.invoices.lenght}</td>
            <td>{props.data.internationalTransport.toString()}</td>
        </tr>
    )
}
export default DataTable;