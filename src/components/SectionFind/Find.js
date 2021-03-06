import React from 'react';
import DataTable from './DataTable/DataTable'

const API_ADDRESS = "http://localhost:8080/api/company/";
class Find extends React.Component {
    state = {
        companies: [],
        input: "",
    }

    change = (e) => {
        this.setState({ input: e.target.value });
    }

    findCompany = (e) => {
        e.preventDefault();
        this.setState({ input: e.target[0].value });
        fetch(API_ADDRESS + e.target[0].value)
            .then(response => response.json())
            .then(i => this.setState({
                companies: i,
                input: ""
            })).catch(() => { }).finally(this.setState({ input: "" }));
    }

    render() {
        return (
            <>
                <form onSubmit={this.findCompany} className="form-inline mt-3">
                    <input type="number" class="form-control" placeholder="ID" value={this.state.input} onChange={this.change} />
                    <button type="submit" className="btn btn-primary ">SEARCH</button>
                </form>
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
                        {this.state.companies.length === 0 ? "There is nothing" :
                            <DataTable data={this.state.companies} />
                        }
                    </tbody>
                </table>
            </>
        );
    }
}

export default Find;