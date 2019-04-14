import React from 'react';
import { Component } from 'react';

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: "692 778 XXX",
            email: "sklep@gmail.com",
            adres: [
                { ulica: "Sklepowa 48", miasto: "Miasto Sklepowe"}
            ],
        };
    }

    render() {
        const ulica = this.state.adres.values;
        return (
            <div className="contact">
                <br/>
                <div class="row">
                    <hr align="left" width="100%" />
                </div>
                <div class="row" id="contact">
                    <div class="col-12">
                        <h1>Kontakt</h1>
                        <h2>Telefon: {this.state.phone}</h2>
                        <h2>Telefon: {this.state.email}</h2>
                        <h2>Adres: {this.state.adres.map(el => (el.ulica + " " + el.miasto))}</h2>
                        <h3>{this.props.promotionTime}</h3>
                    </div>
                </div>
                <div class="row">
                    <hr align="left" width="100%" />
                </div>
            </div>
        );
    }

}

export default Banner;