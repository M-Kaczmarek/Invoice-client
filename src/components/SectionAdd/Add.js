import React from 'react';
import Form from './Form/Form'

const API_ADDRESS = "http://localhost:8080/api/company/";

class Add extends React.Component {
    state = {
        companies: [],
        name: "",
        Amount: "",
        nameI: "",
        surrName: "",
        internationalTransport: false
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
        fetch(API_ADDRESS, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "name": e.target[0].value,
                    "invoices": [
                        {
                            "amount": e.target[1].value,
                            "name": e.target[2].value,
                            "surrName": e.target[3].value
                        }
                    ], "internationalTransport": e.target[4].checked
                })
        }
        ).then(this.setState({
            name: "",
            Amount: "",
            nameI: "",
            surrName: "",
            internationalTransport: false
        })
        ).catch(() => { });
    }

    render() {
        return (
            <Form submitFn={this.addElement} data={this.state} change={this.change} />
        );
    }
}

export default Add;