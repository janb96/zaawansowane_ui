import React from 'react';
import { Component } from 'react';

import ProductMiniature from './ProductMiniature';

class ShopSpace extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
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
                            <ProductMiniature name="Wiertarka BOSCH" image="https://5.allegroimg.com/s512/0332ad/95894beb4307ab96f1f8041758a5/WIERTARKA-UDAROWA-BOSCH-EASYIMPACT-500-550-W" description="Przewierci wszystko!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200"/>
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature name="Szlifierka Graphite" image="https://static02.leroymerlin.pl/files/media/image/191/1894191/product/szlifierka-katowa-59g187-125-mm-900-w-graphite,large.jpg" description="Szybka jak swiatlo..." target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="570" />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature name="Mlotek Lux-Tools" image="https://images.obi.pl/product/PL/1500x1500/376914_1.jpg" description="Wbijaj gwozdzie jak THOR!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="100" />
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
                            <ProductMiniature name="Kosiarka Fuxtec" image="https://fuxtec.pl/images/kosiarki/5196/FX-RM5196eS-Bild115aa155bc96c24.jpg" description="Super kosi, trawnik jak nowy!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="2300" />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature name="Kosiarka Powermat" image="https://f01.osfr.pl/foto/1/12766490095/874b7baecd7adab59820decba15ac25e/powermat-pm-kss-500n,12766490095_7.jpg" description="Tania, a kosi jak droga..." target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="300" />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature name="Kosiarka Thomas" image="https://thomas.biz.pl/wp-content/uploads/2017/12/0003185_gardenkraft-spalinowa-kosiarka-53cm-metal-bs7501.jpeg" description="Thomas - to masz!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200" />
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
                            <ProductMiniature name="Wiertarka BOSCH" image="https://5.allegroimg.com/s512/0332ad/95894beb4307ab96f1f8041758a5/WIERTARKA-UDAROWA-BOSCH-EASYIMPACT-500-550-W" description="Super pila mechaniczna!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200" />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature name="Wiertarka BOSCH" image="https://5.allegroimg.com/s512/0332ad/95894beb4307ab96f1f8041758a5/WIERTARKA-UDAROWA-BOSCH-EASYIMPACT-500-550-W" description="Super pila mechaniczna!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200" />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature name="Wiertarka BOSCH" image="https://5.allegroimg.com/s512/0332ad/95894beb4307ab96f1f8041758a5/WIERTARKA-UDAROWA-BOSCH-EASYIMPACT-500-550-W" description="Super pila mechaniczna!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200" />
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
                            <ProductMiniature name="Wiertarka BOSCH" image="https://5.allegroimg.com/s512/0332ad/95894beb4307ab96f1f8041758a5/WIERTARKA-UDAROWA-BOSCH-EASYIMPACT-500-550-W" description="Super pila mechaniczna!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200" />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature name="Wiertarka BOSCH" image="https://5.allegroimg.com/s512/0332ad/95894beb4307ab96f1f8041758a5/WIERTARKA-UDAROWA-BOSCH-EASYIMPACT-500-550-W" description="Super pila mechaniczna!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200" />
                        </center>
                    </div>
                    <div class="col-4">
                        <center>
                            <ProductMiniature name="Wiertarka BOSCH" image="https://5.allegroimg.com/s512/0332ad/95894beb4307ab96f1f8041758a5/WIERTARKA-UDAROWA-BOSCH-EASYIMPACT-500-550-W" description="Super pila mechaniczna!" target="https://getbootstrap.com/docs/4.0/utilities/borders/" price="1200" />
                        </center>
                    </div>
                </div>
                <br />
            </div>
        );
    }

}

export default ShopSpace;