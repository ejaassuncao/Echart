'use strict';

class Properties extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-lg">
                    <label htmlFor="slc">Inverter Eixo</label>
                    <select id="slc" className="form-control">
                        <option value="0">Bar</option>
                        <option value="1">Column</option>
                    </select>
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#properties');
ReactDOM.render(<Properties />, domContainer);





