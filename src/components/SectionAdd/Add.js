import React from 'react';


class Add extends React.Component {
    state = {
        companies: [],
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

    render() {
        return (
            <>
                <p>USuwanie</p>
            </>
        )
    }
}

export default Add;