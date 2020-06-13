import React from 'react';
import DataTable from './DataTable/DataTable'


class Find extends React.Component {
    state = {
        companies: [],
    }
    componentDidMount() {
        fetch("http://localhost:9090/api/company")
            .then(response => response.json())
            .then(i => this.setState({ companies: i }));
    }

    render() {


        return (

            <form action="" className="form-inline mt-3">
                <input type="number" class="form-control" id="inputPassword2" placeholder="Password" />
                <button type="submit" className="btn btn-primary ">SEARCH</button>

            </form>
        )
    }

}
export default Find;