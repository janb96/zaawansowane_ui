import React from 'react';
import { Component } from 'react';

import ProductMiniature from './ProductMiniature';

class ShopSpace extends Component {

    constructor(props) {
        super(props);
        this.state = {
            promotionTime: this.props.promotionTime,
            promotionValue: this.props.promotionValue,
        };
        this.productMiniatureElement = React.createRef();
        this.productMiniatureElement2 = React.createRef();
        this.productMiniatureElement3 = React.createRef();
        this.productMiniatureElement4 = React.createRef();
        this.productMiniatureElement5 = React.createRef();
        this.productMiniatureElement6 = React.createRef();
        this.productMiniatureElement7 = React.createRef();
        this.productMiniatureElement8 = React.createRef();
        this.productMiniatureElement9 = React.createRef();
        this.productMiniatureElement10 = React.createRef();
        this.productMiniatureElement11 = React.createRef();
        this.productMiniatureElement12 = React.createRef();
    }

    changePromotion = (promotion1, promotion2) => {
        this.setState({
            promotionTime: promotion1,
            promotionValue: promotion2,
        });
        this.productMiniatureElement.current.changePromotion(promotion1, promotion2);
        this.productMiniatureElement2.current.changePromotion(promotion1, promotion2);
        this.productMiniatureElement3.current.changePromotion(promotion1, promotion2);
        this.productMiniatureElement4.current.changePromotion(promotion1, promotion2);
        this.productMiniatureElement5.current.changePromotion(promotion1, promotion2);
        this.productMiniatureElement6.current.changePromotion(promotion1, promotion2);
        this.productMiniatureElement7.current.changePromotion(promotion1, promotion2);
        this.productMiniatureElement8.current.changePromotion(promotion1, promotion2);
        this.productMiniatureElement9.current.changePromotion(promotion1, promotion2);
        this.productMiniatureElement10.current.changePromotion(promotion1, promotion2);
        this.productMiniatureElement11.current.changePromotion(promotion1, promotion2);
        this.productMiniatureElement12.current.changePromotion(promotion1, promotion2);
    }

    render() {
        return (
            <div id="shop_space">
                <br />
                <h1 class="display-3">Narzedzia</h1>
                <br />
                <div class="row">
                    <hr align="left" width="100%" />
                </div>
                <div class="row" id="shop">
                    <div class="col-4">
                        <center>
                            <ProductMiniature ref={this.productMiniatureElement} name="Wiertarka BOSCH" image="https://5.allegroimg.com/s512/0332ad/95894beb4307ab96f1f8041758a5/WIERTARKA-UDAROWA-BOSCH-EASYIMPACT-500-550-W" description="Przewierci wszystko!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200" promotionTime={this.props.promotionTime} promotionValue={this.props.promotionValue} />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature ref={this.productMiniatureElement2} name="Szlifierka Graphite" image="https://static02.leroymerlin.pl/files/media/image/191/1894191/product/szlifierka-katowa-59g187-125-mm-900-w-graphite,large.jpg" description="Szybka jak swiatlo..." target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="570" promotionTime={this.props.promotionTime} promotionValue={this.props.promotionValue} />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature ref={this.productMiniatureElement3} name="Mlotek Lux-Tools" image="https://images.obi.pl/product/PL/1500x1500/376914_1.jpg" description="Wbijaj gwozdzie jak THOR!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="100" promotionTime={this.props.promotionTime} promotionValue={this.props.promotionValue} />
                        </center>
                    </div>
                </div>
                <br />
                <div class="row">
                    <hr align="left" width="100%" />
                </div>
                <br />
                <h1 class="display-3">Kosiarki</h1>
                <br />
                <div class="row">
                    <hr align="left" width="100%" />
                </div>
                <div class="row" id="shop">
                    <div class="col-4">
                        <center>
                            <ProductMiniature ref={this.productMiniatureElement4} name="Kosiarka Fuxtec" image="https://fuxtec.pl/images/kosiarki/5196/FX-RM5196eS-Bild115aa155bc96c24.jpg" description="Super kosi, trawnik jak nowy!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="2300" promotionTime={this.props.promotionTime} promotionValue={this.props.promotionValue} />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature ref={this.productMiniatureElement5} name="Kosiarka Powermat" image="https://f01.osfr.pl/foto/1/12766490095/874b7baecd7adab59820decba15ac25e/powermat-pm-kss-500n,12766490095_7.jpg" description="Tania, a kosi jak droga..." target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="300" promotionTime={this.props.promotionTime} promotionValue={this.props.promotionValue} />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature ref={this.productMiniatureElement6} name="Kosiarka Thomas" image="https://thomas.biz.pl/wp-content/uploads/2017/12/0003185_gardenkraft-spalinowa-kosiarka-53cm-metal-bs7501.jpeg" description="Thomas - to masz!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200" promotionTime={this.props.promotionTime} promotionValue={this.props.promotionValue} />
                        </center>
                    </div>
                </div>
                <br />
                <div class="row">
                    <hr align="left" width="100%" />
                </div>
                <br />
                <h1 class="display-3">Meble Ogrodowe</h1>
                <br />
                <div class="row">
                    <hr align="left" width="100%" />
                </div>
                <div class="row" id="shop">
                    <div class="col-4">
                        <center>
                            <ProductMiniature ref={this.productMiniatureElement7} name="Zestaw 'Basiarzyna'" image="https://homegarden.com.pl/i/prod/meble-ogrodowe-technorattanowe-siena-grey-grey-home-garden-8849-m.jpg" description="Usiadziesz jak u cioci !" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="2000" promotionTime={this.props.promotionTime} promotionValue={this.props.promotionValue} />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature ref={this.productMiniatureElement8} name="Zestaw 'Kiedys to bylo'" image="https://gardenspace.pl/uploads/products/2506/meble-ogrodowe-bordeaux-iv.jpg" target="https://getbootstrap.com/docs/4.0/utilities/borders/" description="Elegancko i z klasa!" price="7000" promotionTime={this.props.promotionTime} promotionValue={this.props.promotionValue} />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature ref={this.productMiniatureElement9} name="Zestaw 'Basenowy Raj'" image="https://b.allegroimg.com/s1440/0332ec/c49fa9244ab5a458f29bd283216b" description="Masz basen? To dla Ciebie!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="15000" promotionTime={this.props.promotionTime} promotionValue={this.props.promotionValue} />
                        </center>
                    </div>
                </div>
                <br />
                <div class="row">
                    <hr align="left" width="100%" />
                </div>
                <br />
                <h1 class="display-3">Ogrodnictwo</h1>
                <br />
                <div class="row">
                    <hr align="left" width="100%" />
                </div>
                <div class="row" id="shop">
                    <div class="col-4">
                        <center>
                            <ProductMiniature ref={this.productMiniatureElement10} name="Wiertarka BOSCH" image="https://5.allegroimg.com/s512/0332ad/95894beb4307ab96f1f8041758a5/WIERTARKA-UDAROWA-BOSCH-EASYIMPACT-500-550-W" description="Super pila mechaniczna!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200" promotionTime={this.props.promotionTime} promotionValue={this.props.promotionValue} />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature ref={this.productMiniatureElement11} name="Wiertarka BOSCH" image="https://5.allegroimg.com/s512/0332ad/95894beb4307ab96f1f8041758a5/WIERTARKA-UDAROWA-BOSCH-EASYIMPACT-500-550-W" description="Super pila mechaniczna!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200" promotionTime={this.props.promotionTime} promotionValue={this.props.promotionValue} />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature ref={this.productMiniatureElement12} name="Wiertarka BOSCH" image="https://5.allegroimg.com/s512/0332ad/95894beb4307ab96f1f8041758a5/WIERTARKA-UDAROWA-BOSCH-EASYIMPACT-500-550-W" description="Super pila mechaniczna!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200" promotionTime={this.props.promotionTime} promotionValue={this.props.promotionValue} />
                        </center>
                    </div>
                </div>
                <br />
            </div>
        );
    }

}

export default ShopSpace;