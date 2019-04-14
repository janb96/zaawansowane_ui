import React from 'react';
import { Component } from 'react';

class Promotion extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        if (this.props.isActive) {
            return (<span class="badge badge-danger">
                Promocja trwa jeszcze: {this.props.time} sekund!
            </span>);
        } else {
            return (<span class="badge badge-secondary">
                Promocja zakonczyla sie
            </span>);
        }
    }

}

export default Promotion;