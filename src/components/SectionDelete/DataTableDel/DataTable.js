import React from 'react';


const DataTableDel = ({ data, fun }) => {

    return (
        <tr>
            <th scope="row"  > <button className="btn btn-primary" onClick={fun}>{"X"}</button></th>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.invoices.length}</td>
            <td>{data.internationalTransport.toString()}</td>
        </tr>
    )
}

export default DataTableDel;