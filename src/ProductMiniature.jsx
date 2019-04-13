import React from 'react';
import { Component } from 'react';

class ProductMiniature extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="miniature">
                <br />
                <a href={this.props.target}>
                    <div class="row" id="item">
                        <div class="col-12">
                            <h2>{this.props.name} <span class="badge badge-success">New</span></h2>
                            <img src={this.props.image} width="300px" height="300px" />
                            <p><span class="badge badge-warning">Cena</span> {this.props.price} pln</p>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }

}

export default ProductMiniature;