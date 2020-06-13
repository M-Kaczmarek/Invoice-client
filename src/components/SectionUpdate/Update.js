import React from 'react';

class Update extends React.Component {
    state = {
        companies: [],
    }
    componentDidMount() {
        fetch("http://localhost:9090/api/company/4", {
            method: "PUT"
            , headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(
                {
                    "name": "strin4g"
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

export default Update;