import React from 'react';

const DataTable = ({ data }) => {
    return (
        <tr>
            <th scope="row" > </th>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.invoices.length}</td>
            <td>{data.internationalTransport.toString()}</td>
        </tr>
    )
}
export default DataTable;