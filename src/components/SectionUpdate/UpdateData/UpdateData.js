import React from 'react';

const UpdateData = ({ data, click }) => {

    return (
        <tr>
            <th scope="row"  > <button className="btn btn-primary" onClick={click}>{"+"}</button></th>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.invoices.length}</td>
            <td>{data.internationalTransport.toString()}</td>
        </tr>
    )
}

export default UpdateData;