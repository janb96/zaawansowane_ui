import React from 'react';
import { Component } from 'react';

class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div class="fixed-top" id="nawigacja">
                <div class="row p-2 border border-secondary">
                    <div class="col-3">
                        <a href="produkty.html">
                            <div>Wszystkie produkty</div>
                        </a>
                    </div>
                    <div class="col-3">
                        <a href="produkty.html">
                            <div>Nowosci</div>
                        </a>
                    </div>
                    <div class="col-3">
                        <a href="kontakt.html">
                            <div>Kontakt <i class="fas fa-phone"></i></div>
                        </a>
                    </div>
                    <div class="col-3">
                        <a href="https://www.facebook.com/">
                            <div ><i class="fab fa-facebook"> {this.state.date.toLocaleTimeString()}</i></div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Navbar;