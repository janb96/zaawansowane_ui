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
                        <center><h1 class="display-3">Kontakt</h1></center>
                        <br />
                        <div>
                            <h2><span class="badge badge-info">Telefon <i class="fas fa-phone"></i></span> {this.state.phone}</h2>
                            <h2><span class="badge badge-info">Adres e-mail <i class="fas fa-mail-bulk"></i></span> {this.state.email}</h2>
                            <h2><span class="badge badge-info">Siedziba <i class="fas fa-search-location"></i></span> {this.state.adres.map(el => (el.ulica + " " + el.miasto))}</h2>
                        </div>
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