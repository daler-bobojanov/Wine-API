import React from 'react';
import Axios from 'axios';

class WineForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <button className='wine-form-button'>Add Your Wine</button>
        );
    }
}

export default WineForm;