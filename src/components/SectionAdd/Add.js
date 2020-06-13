import React from 'react';
import Form from './Form/Form'


class Add extends React.Component {
    state = {
        companies: [],
        name: "",
        Amount: "",
        nameI: "",
        surrName: "",
        internationalTransport: false
    }

    componentDidMount() {
        fetch("http://localhost:9090/api/company", {
            method: "POST"
            , headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(
                {
                    "name": "string"
                    ,
                    "invoices": [
                        {
                            "amount": 0,
                            "name": "string",
                            "surrName": "string"
                        }
                    ], "internationalTransport": true
                })
        }
        )
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
        }
    }
    addElement = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/company", {
            method: "POST"
            , headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(
                {
                    "name": e.target[0].value,
                    "invoices": [
                        {
                            "amount": e.target[1].value,
                            "name": e.target[2].value,
                            "surrName": e.target[3].value
                        }
                    ], "internationalTransport": e.target[4].checked === true ? true : false
                })
        }
        ).then(this.setState({
            name: "",
            Amount: "",
            nameI: "",
            surrName: "",
            internationalTransport: false

        })

        )

    }

    render() {
        return (

            <Form submitFn={this.addElement} data={this.state} change={this.change} />

        )
    }
}

export default Add;