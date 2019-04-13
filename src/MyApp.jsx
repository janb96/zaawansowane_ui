import React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import ShopSpace from './ShopSpace';

class MyApp extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
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
                <ShopSpace />
            </div>
        );
    }

}

export default MyApp;