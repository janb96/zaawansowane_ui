import React from 'react';
import { Component } from 'react';
import Promotion from './Promotion';
class ProductMiniature extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            date: this.props.promotionTime,
            promotion: this.props.promotionValue,
            price: this.props.price
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        if (this.state.promotion > 0) {
            this.setState((state) => {
                return { price: this.state.price - this.state.price * this.state.promotion/100};
            });
            this.setState({ isActive: true });
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.state.date > 0) {
            this.setState((state) => {
                return { date: state.date - 1 };
            });
            this.setState({ isActive: true });
        } else {
            this.setState({ isActive: false });
            this.setState((state) => {
                return { price: this.props.price};
            });
        }
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
                            <p><span class="badge badge-warning">Cena</span> {this.state.price} pln</p>
                            <p>
                                <Promotion isActive={this.state.isActive} time={this.state.date} />
                            </p>
                            <p>{this.props.description}</p>
                            <p>{this.props.promotionValue}</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }

}

export default ProductMiniature;