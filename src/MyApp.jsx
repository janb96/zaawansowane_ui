import React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import ShopSpace from './ShopSpace';
import Contact from './Contact';
import PreparePromotion from './PreparePromotion';

class MyApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            promotionTime: 0,
            promotionValue: 0,
        };
        this.dodajPromocje = this.dodajPromocje.bind(this);
    }

    dodajPromocje(evt) {
        evt.preventDefault();
        console.log("DZIALAM");
        const czasTrwania = evt.target.czasTrwania.value;
        const wysokoscRabatu = evt.target.wysokoscRabatu.value;
        this.setState({ promotionTime: czasTrwania });
        this.setState({ promotionValue: wysokoscRabatu });
    }

    render() {
        return (
            <div>
                <Navbar />
                <br />
                <br />
                <Banner image="http://eurotekuae.com/wp-content/uploads/2017/10/tools.jpg" />
                <div class="row">
                    <hr align="left" width="100%"/>
                </div>
                <ShopSpace promotionTime={this.state.promotionTime} promotionValue={this.state.promotionValue} />
                <Contact />
                <PreparePromotion onClick={(evt) => this.dodajPromocje(evt)} />
            </div>
        );
    }

}

export default MyApp;