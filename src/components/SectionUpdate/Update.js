import React from 'react';
import UpdateData from './UpdateData/UpdateData';
import Form from '../SectionAdd/Form/Form'

const API_ADDRESS = "http://localhost:8080/api/company/";

class Update extends React.Component {
    state = {
        companies: [],
        id: "",
        idInvoices: "",
        click: false,
        name: "",
        Amount: "",
        nameI: "",
        surrName: "",
        internationalTransport: false
    }

    componentDidMount() {
        fetch(API_ADDRESS)
            .then(response => response.json())
            .then(i => this.setState({ companies: i }))
            .catch(() => { });
    }

    change = (type, e) => {
        switch (type) {
            case "name":
                this.setState({
                    name: e.target.value
                });
                break;
            case "Amount":
                this.setState({
                    Amount: e.target.value
                });
                break;
            case "nameI":
                this.setState({
                    nameI: e.target.value
                });
                break;
            case "surrName":
                this.setState({
                    surrName: e.target.value
                });
                break;
            case "internationalTransport":
                this.setState({
                    internationalTransport: !e.target.value.checked
                });
                break;
            default:
                break;
        }
    }

    addElement = (e) => {
        e.preventDefault();
        fetch(API_ADDRESS + this.state.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "name": this.state.name,
                    "invoices": [
                        {
                            "id": this.state.idInvoices,
                            "amount": this.state.Amount,
                            "name": this.state.nameI,
                            "surrName": this.state.surrName,
                        }
                    ], "internationalTransport": this.state.internationalTransport,
                })
        }
        ).then(this.setState({
            companies: [],
            name: "",
            Amount: "",
            nameI: "",
            surrName: "",
            internationalTransport: false,
            click: false,
        })
        ).then(() => fetch("API_ADDRESS").then(response => response.json()).then(i => this.setState({ companies: i }))
        ).catch(() => { });
    }

    click = (id) => {
        let index = 0;
        for (let i = 0; i < this.state.companies.length; i++) {
            if (this.state.companies[i].id === id) {
                index = i;
            }
        }

        this.setState({
            id: this.state.companies[index].id,
            name: this.state.companies[index].name,
            idInvoices: this.state.companies[index].invoices[0].id,
            Amount: this.state.companies[index].invoices[0].amount,
            nameI: this.state.companies[index].invoices[0].name,
            surrName: this.state.companies[index].invoices[0].surrName,
            internationalTransport: this.state.companies[index].internationalTransport.toString(),
            click: true
        });
    }

    render() {
        return (
            <>
                {
                    this.state.click ?
                        <Form submitFn={this.addElement} data={this.state} change={this.change} type={"update"} /> :
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
                                {this.state.companies.length === 0 ? "There is nothing " : this.state.companies.map(item => (

                                    <UpdateData
                                        data={item}
                                        click={this.click.bind(this, item.id)}
                                    />))
                                }
                            </tbody>
                        </table>
                }
            </>
        );
    }
}

export default Update;