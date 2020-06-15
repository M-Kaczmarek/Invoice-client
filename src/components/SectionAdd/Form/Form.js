import React from 'react';

const Form = ({ submitFn, data, change, type }) => {
    return (
        <form onSubmit={submitFn} >
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Company Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Company Name" value={data.name} onChange={change.bind(this, "name")} />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Invoices</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" placeholder="Amount" value={data.Amount} onChange={change.bind(this, "Amount")} />
                    <input type="text" class="form-control" placeholder="Name" value={data.nameI} onChange={change.bind(this, "nameI")} />
                    <input type="text" class="form-control" placeholder="Surrname" value={data.surrName} onChange={change.bind(this, "surrName")} />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-2"> International Transport</div>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" checked={data.internationalTransport} onChange={change.bind(this, "internationalTransport")} />
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">{type === 'update' ? "Update" : "Add"}</button>
                </div>
            </div>
        </form>)
}

export default Form;