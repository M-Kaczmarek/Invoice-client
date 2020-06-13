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
                <form>
                    <div class="form-group row">
                        <label for="name" class="col-sm-2 col-form-label">Company Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="name" placeholder="Company Name" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="invoices" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" id="invoices" placeholder="Amount" />
                            <input type="text" class="form-control" id="invoices" placeholder="Name" />
                            <input type="text" class="form-control" id="invoices" placeholder="Surrname" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-2"> International Transport</div>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="International" />
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default Update;