import React from 'react';
import DataTableDel from './DataTableDel/DataTable'


class Delete extends React.Component {
    state = {
        companies: [],
    }
    componentDidMount() {

        fetch("http://localhost:9090/api/company")
            .then(response => response.json())
            .then(i => this.setState({ companies: i }));

    }

    deleteElement = (x) => {
        fetch("http://localhost:9090/api/company/" + x, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            }
        })

        let tab = [];
        for (let i = 0; i < this.state.companies.length; i++) {
            if (this.state.companies[i].id !== x) {
                tab.push(this.state.companies[i])
            }
        }

        this.setState({
            companies: tab
        });

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
                            <DataTableDel
                                data={item}
                                fun={this.deleteElement.bind(this, item.id)}
                            />))}
                    </tbody>
                </table>

            </>
        )
    }
}
export default Delete;