import React from 'react';
import DataTable from './DataTable/DataTable'


class Find extends React.Component {
    state = {
        companies: [],
    }
    componentDidMount() {
        fetch("http://localhost:9090/api/company")
            .then(response => response.json())
            .then(i => this.setState({ companies: i }));
    }

    render() {


        return (
            <>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">Count invoices</th>
                            <th scope="col">International Transport</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.companies.length === 0 ? "Nic" : this.state.companies.map(item => (
                            <DataTable
                                data={item}
                            />))}

                    </tbody>
                </table>

            </>
        )
    }
}

export default Find;