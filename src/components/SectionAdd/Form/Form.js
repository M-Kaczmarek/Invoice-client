import React from 'react';

const Form = ({ submitFn, data, change }) => {
    return (
        <form onSubmit={submitFn} >
            <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Company Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" placeholder="Company Name" value={data.name} onChange={change.bind(this, "name")} />
                </div>
            </div>
            <div class="form-group row">
                <label for="invoices" class="col-sm-2 col-form-label">Invoices</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="invoices" placeholder="Amount" value={data.Amount} onChange={change.bind(this, "Amount")} />
                    <input type="text" class="form-control" id="invoices" placeholder="Name" value={data.nameI} onChange={change.bind(this, "nameI")} />
                    <input type="text" class="form-control" id="invoices" placeholder="Surrname" value={data.surrName} onChange={change.bind(this, "surrName")} />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-2"> International Transport</div>
                <div class="col-sm-10">
                    <div class="form-check">
                        {console.log(data.internationalTransport + " sdadasd")}
                        <input class="form-check-input" type="checkbox" id="International" checked={data.internationalTransport} onChange={change.bind(this, "internationalTransport")} />
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Add</button>
                </div>
            </div>
        </form>)
}

export default Form;