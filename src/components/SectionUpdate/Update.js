import React from 'react';
import UpdateData from './UpdateData/UpdateData';
import Form from '../SectionAdd/Form/Form'

class Update extends React.Component {
    state = {
        companies: [],
        id: "",
        click: false,
        name: "",
        Amount: "",
        nameI: "",
        surrName: "",
        internationalTransport: false
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/company")
            .then(response => response.json())
            .then(i => this.setState({ companies: i }));
    }
    componentDidUpdate() {
        fetch("http://localhost:8080/api/company")
            .then(response => response.json())
            .then(i => this.setState({ companies: i }))
    }

    change = (type, e) => {
        switch (type) {
            case "name":
                this.setState({
                    name: e.target.value
                })
                break;
            case "Amount":
                this.setState({
                    Amount: e.target.value
                })
                break;
            case "nameI":
                this.setState({
                    nameI: e.target.value
                })
                break;
            case "surrName":
                this.setState({
                    surrName: e.target.value
                })
                break;
            case "internationalTransport":
                this.setState({
                    internationalTransport: e.target.value.checked
                })
                break;
            default:
                break;
        }
    }
    addElement = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target[0].value,
            Amount: e.target[1].value,
            nameI: e.target[2].value,
            surrName: e.target[3].value,
            internationalTransport: e.target[4].checked,
        })
        fetch("http://localhost:8080/api/company/" + this.state.id, {
            method: "PUT"
            , headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(
                {
                    "name": this.state.name
                    ,
                    "invoices": [
                        {
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
        )

    }

    click = (id) => {
        let index = 0;
        for (let i = 0; i < this.state.companies.length; i++) {
            if (this.state.companies[i].id === id) {
                index = i
            }
        }
        console.log(this.state.companies[index].invoices[0])
        this.setState({

            id: this.state.companies[index].id,
            name: this.state.companies[index].name,
            Amount: this.state.companies[index].invoices[0].amount,
            nameI: this.state.companies[index].invoices[0].name,
            surrName: this.state.companies[index].invoices[0].surrName,
            internationalTransport: this.state.companies[index].internationalTransport,
            click: true
        })

    }


    render() {
        return (
            <>
                {this.state.click ?
                    <Form submitFn={this.addElement} data={this.state} change={this.change} /> :
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

                                <UpdateData
                                    data={item}
                                    click={this.click.bind(this, item.id)}

                                />))}

                        </tbody>
                    </table>
                }
            </>
        )
    }
}
export default Update;