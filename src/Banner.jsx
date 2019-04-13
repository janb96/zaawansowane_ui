import React from 'react';
import { Component } from 'react';

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div class="row border-secondary" id="baner">
                <div class="col-1"></div>
                <div class="col-10">
                    <a href={this.props.url}>
                        <img src={this.props.image} class="mx-auto" width="100%" height="100%"/>
                    </a>
                </div>
                <div class="col-1"></div>
            </div>
        );
    }

}

export default Banner;